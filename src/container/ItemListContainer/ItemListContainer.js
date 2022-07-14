import "./ItemListContainer.css";
import ItemList from "../../Components/ItemList/ItemList";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getDocs} from 'firebase/firestore' 
import { db } from '../../services/firebase'

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const { idCategoria } = useParams();

  useEffect(() => {
    setCargando(true);

    if (!idCategoria) {
      getProductos()
        .then((response) => {
          setProductos(response);
        })
        .finally(() => {
          setCargando(false);
        });
    } else {
      getProductosPorCategoria(idCategoria)
        .then((response) => {
          setProductos(response);
        })
        .finally(() => {
          setCargando(false);
        });
    }
  }, [idCategoria]);

  if (cargando) {
    return (
      <div className="App-body">
        <div className="ItemListContainer">
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
      <div className="ItemListContainer">
        <h1 className="greeting">{greeting}</h1>

        {productos.length > 0 ? (
          <ItemList productos={productos} categoria={idCategoria} />
        ) : (
          <h1>Categoría inexistente</h1>
        )}
      </div>
    </div>
  );
};

export default ItemListContainer;