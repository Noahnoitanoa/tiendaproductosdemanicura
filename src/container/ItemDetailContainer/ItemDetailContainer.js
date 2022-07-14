import ItemDetail from "../../Components/ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";
import { getProductoPorId } from "../../services/firebase";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const { idProducto } = useParams();
  const [producto, setProducto] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    setCargando(true);
    getProductoPorId(idProducto)
      .then((response) => {
        setProducto(response);
      })
      .finally(() => {
        setCargando(false);
      });
  }, [idProducto]);

  if (cargando) {
    return (
      <div className="App-body">
        <div className="ItemDetailContainer">
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
      <div className="ItemDetailContainer">
        {!producto ? (
          <h1 style={{ textAlign: "center" }}>Producto inexistente</h1>
        ) : (
          <ItemDetail {...producto} />
        )}
      </div>
    </div>
  );
};

export default ItemDetailContainer;
