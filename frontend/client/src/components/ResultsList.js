import ShopProduct from "./ShopProduct";

const ResultsList = (props) => {
  return (
    <>
      <div className="row">
        {props.data &&
          props.data.search.items.map((item) => {
            return (
              <ShopProduct
                name={item.productName}
                imgSrc={item.productAsset.preview}
                price={item.priceWithTax.min}
                slug={item.slug}
                new={item.new ? true : false}
              />
            );
          })}
      </div>
    </>
  );
};

export default ResultsList;
