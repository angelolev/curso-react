import productImage from "../../assets/product.svg";

interface IProduct {
  name: string;
  originalPrice: number;
  discount?: number;
}

const ProductCard = ({ name, originalPrice, discount = 0 }: IProduct) => {
  const calcDiscount = () => {
    return originalPrice - (originalPrice * discount) / 100;
  };

  const renderProductInfo = () => {
    if (discount !== 0) {
      return (
        <>
          <span className="font-bold">${calcDiscount()}</span>{" "}
          <span className="font-bold text-black/40">{`$${originalPrice}`}</span>{" "}
          <span className="bg-red-100 rounded-full text-[8px] text-red-400 px-2 py-1 relative top-[1px]">
            -{discount}%
          </span>
        </>
      );
    }

    return <span className="font-bold text-black">{`$${originalPrice}`}</span>;
  };

  return (
    <div>
      <div className="image">
        <img className="max-w-52 rounded-xl" src={productImage} alt="" />
      </div>
      <div className="info">
        <p className="font-bold text-xl">{name}</p>
        <p className="flex items-center gap-1">{renderProductInfo()}</p>
      </div>
    </div>
  );
};

export default ProductCard;
