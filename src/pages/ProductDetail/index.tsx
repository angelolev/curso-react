import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const products = [
    {
      id: 1,
      name: "Laptop",
      description: "Laptop HP",
      price: 1000,
    },
    {
      id: 2,
      name: "Smartphone",
      description: "Latest model smartphone",
      price: 700,
    },
    {
      id: 3,
      name: "Headphones",
      description: "Noise cancelling headphones",
      price: 200,
    },
  ];

  // Obtener el parámetro 'id' desde la URL
  const { productId } = useParams();

  // Convertir el id en número para buscar en el array (useParams devuelve strings)
  const product = products.find((product) => product.id === Number(productId));

  // Si el producto no existe, mostrar un mensaje
  if (!product) {
    return <h2>Producto no encontrado</h2>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
    </div>
  );
};

export default ProductDetail;
