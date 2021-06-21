import ShopProduct from "./ShopProduct";

const ResultsList = (props) => {
  return (
    <>
      <div className="row">
        {props.productList.map((item) => {
          return (
            <ShopProduct
              name={item.name}
              imgSrc={item.imgSrc}
              price={item.price}
              new={item.new ? true : false}
            />
          );
        })}
      </div>
    </>
  );
};

export default ResultsList;
