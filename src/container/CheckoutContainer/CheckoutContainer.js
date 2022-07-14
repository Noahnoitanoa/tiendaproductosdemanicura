import "./CheckoutContainer.css";
import ButtonPrimario from "../../components/ButtonPrimario/ButtonPrimario";
import { useState, useContext } from "react";
import Swal from "sweetalert2";
import {
  guardarOrden,
  getProductosCatalogo,
  confirmarOrden,
} from "../../services/firebase";
import CartContext from "../../Context/CartContext";
import { useNavigate } from "react-router-dom";

const CheckoutContainer = () => {
  const { carrito, totalEnCarrito, vaciarCarrito } = useContext(CartContext);
  const [cargando, setCargando] = useState(false);
  const navigate = useNavigate();

  const [valores, setValores] = useState({
    nombre: "",
    direccion: "",
    correo: "",
    telefono: "",
  });

  const getFecha = () => {
    let fecha = new Date();
    let dia =
      fecha.getFullYear() +
      "-" +
      (fecha.getMonth() + 1) +
      "-" +
      fecha.getDate();

    let hora =
      fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds();

    return dia + " " + hora;
  };

  const handleChange = (evt) => {
    const { target } = evt;
    const { name, value } = target;
    setValores({ ...valores, [name]: value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    let isIncomplete = false;

    for (const valor in valores) {
      if (valores[valor] === "") {
        isIncomplete = true;
      }
    }

    if (isIncomplete) {
      Swal.fire(
        "Datos incompletos",
        "Debes completar todos los campos para confirmar tu compra.",
        "error"
      );
      setCargando(false);
    } else {
      handleCrearOrden();
    }
  };

  const handleCrearOrden = () => {
    const idsEnCarrito = carrito.map((prod) => prod.id);

    const productosConStock = [];
    const productosSinStock = [];

    setCargando(true);

    //Revisar stock
    getProductosCatalogo(idsEnCarrito)
      .then((response) => {
        response.docs.forEach((doc) => {
          const productoCatalogo = doc.data();
          const stockActualProductoCatalogo = productoCatalogo.stock;

          const productoCarrito = carrito.find((prod) => prod.id === doc.id);
          const cantidadSeleccionadaProductoCarrito = productoCarrito.cantidad;

          if (
            stockActualProductoCatalogo >= cantidadSeleccionadaProductoCarrito
          ) {
            productosConStock.push({
              referencia: doc.ref,
              nuevoStock:
                stockActualProductoCatalogo -
                cantidadSeleccionadaProductoCarrito,
            });
          } else {
            productosSinStock.push({ id: doc.id, producto: productoCatalogo });
          }
        });
      })
      .then((_) => {
        //Si hay stock para satisfacer la orden
        if (productosSinStock.length === 0) {
          //creo la orden
          const orden = {
            comprador: {
              nombre: valores.nombre,
              email: valores.correo,
              telefono: valores.telefono,
              direccion: valores.direccion,
              fecha: getFecha(),
            },
            items: carrito,
            total: totalEnCarrito,
          };

          //guardo la orden
          guardarOrden(orden).then(({ id }) => {
            //una vez creada la orden, actualizo stocks
            confirmarOrden(productosConStock);
            //limpio el carrito
            vaciarCarrito();
            //notifico ID de Orden al usuario
            Swal.fire({
              title: "Orden creada exitosamente!",
              html: `Tu ID de Orden es: <br><br><b>${id}</b><br><br>Vas a necesitarla para seguir tu envío`,
              icon: "success",
            });
            setCargando(false);
            //redirecciono al usuario al home
            setTimeout(() => {
              navigate("/");
            }, 1500);
          });
        } else {
          //Notifico al usuario que no es posible satisfacer su orden. Problemente haya cambiado el stock
          Swal.fire({
            title: "Error al procesar tu orden",
            html: `Algo ocurrió mientras intentabamos procesar tu orden.<br><br>La disponibilidad de los productos o el servicio puede haber cambiado desde la ultima vez que ingresaste.<br><br>Por favor, intenta crear tu orden nuevamente`,
            icon: "error",
          });
          setCargando(false);
        }
      });
  };

  if (cargando) {
    return (
      <div className="App-body">
        <div className="CheckoutContainer">
          <img
            src={process.env.PUBLIC_URL + "/loading.gif"}
            className="spinner"
          ></img>
        </div>
      </div>
    );
  }

  return (
    <div className="App-body">
      <div className="CheckoutContainer">
        <h1 className="greeting">Completá tus datos</h1>
        <div className="formCheckout__container">
          <img
            src="https://i.imgur.com/TFwk85k.jpg"
            className="formCheckout__container-img"
          />
          <form className="formCheckout">
            <input
              type="text"
              placeholder="Nombre y Apellido"
              className="fromCheckout__input"
              onChange={handleChange}
              name="nombre"
              value={valores.nombre}
            />
            <input
              type="text"
              placeholder="Dirección"
              className="fromCheckout__input"
              onChange={handleChange}
              name="direccion"
              value={valores.apellido}
            />
            <input
              type="text"
              placeholder="Correo"
              className="fromCheckout__input"
              onChange={handleChange}
              name="correo"
              value={valores.correo}
            />
            <input
              type="text"
              placeholder="Teléfono"
              className="fromCheckout__input"
              onChange={handleChange}
              name="telefono"
              value={valores.telefono}
            />

            <div className="formCheckout__btnEnviar">
              <ButtonPrimario
                type="submit"
                accion={handleSubmit}
                tipoBoton="confirmar"
                texto="Enviar"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutContainer;