import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard";

function Home() {
  const products = [
    {
      id: 1,
      name: "Laptop",
      description: "High performance laptop",
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

  return (
    <>
      {/* <ProductCard name="chekered Shirt" originalPrice={260} discount={80} />
      <ProductCard name="chekered Shirt" originalPrice={260} discount={0} /> */}
      <h1>Lista de Productos</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {/* Link para navegar a la ruta del producto usando su ID */}
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Home;
