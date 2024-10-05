import ProductCard from "../../components/ProductCard";

function Home() {
  return (
    <>
      <ProductCard name="chekered Shirt" originalPrice={260} discount={80} />
      <ProductCard name="chekered Shirt" originalPrice={260} discount={0} />
    </>
  );
}

export default Home;
