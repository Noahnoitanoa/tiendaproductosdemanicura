import "./ButtonSecundario.css";
const ButtonSecundario = ({ onClick }) => {
  return (
    <button onClick={onClick} className="ButtonSecundario">
      Agregar al carrito
    </button>
  );
};

export default ButtonSecundario;
