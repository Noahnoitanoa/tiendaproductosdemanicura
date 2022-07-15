import { SimpleGrid } from "@chakra-ui/react"
import Item from "../item/Item"
import "./ItemList.css";

const ItemList = ({ productos, categoria }) => {
  return (
    <>
      {!!categoria && <p className="titulo-categoria">{categoria}</p>}
      <ul className="ItemList">
        {productos.map((producto) => (
          <Item
            key={producto.id}
            encabezados={!categoria ? true : false}
            {...producto}
          />
        ))}
      </ul>
    </>
  );
};

export default ItemList;
