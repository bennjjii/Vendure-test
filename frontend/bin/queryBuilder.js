const sortMethods = {
  none: 0,
  nameAsc: 1,
  nameDesc: 2,
  priceAsc: 3,
  priceDesc: 4,
};

Object.freeze(sortMethods);

function queryBuilder(
  pageSize = 12,
  page = 0,
  sortMethod = 0,
  collectionSlug = null
) {
  let sortString;
  switch (sortMethod) {
    case 0:
      break;
    case 1:
      sortString = ", sort: {name:ASC}";
    case 2:
      sortString = ", sort: {name:DESC}";
    case 3:
      sortString = ", sort: {price:ASC}";
    case 3:
      sortString = ", sort: {price:DESC}";
  }
  return `{search(input: { ${
    collectionSlug ? 'collectionSlug: "' + collectionSlug + '",' : ""
  } take: ${pageSize}, skip: ${
    page * pageSize
  }, groupByProduct: true ${sortString}}) {
          items {
            productId,
            sku,
            productName,
            description,
            productAsset{
              preview
            },
            priceWithTax{
              ... on PriceRange{
                min
              },
            }
          }
        }
      }`;
}

module.exports = queryBuilder;
