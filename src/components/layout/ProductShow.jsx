import Card from "../Card";
const ProductShow = ({products,AddToCart}) => {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-10">
      {/* Cards will apear here */}
      {products.map((product) => (
        <Card key={product.id} product={product} AddToCart={AddToCart}/>
      ))}
    </div>
  );
};

export default ProductShow;
