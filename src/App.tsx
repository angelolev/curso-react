import ProductCard from "./components/ProductCard";

function App() {
  return (
    <>
      <ProductCard name="chekered Shirt" originalPrice={260} discount={80} />
      <ProductCard name="chekered Shirt" originalPrice={260} discount={10} />
    </>
  );
}

export default App;
