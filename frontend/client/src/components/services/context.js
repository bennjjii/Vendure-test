import { createContext, useContext, useState } from "react";
import { useQuery, useMutation, gql } from "@apollo/client";

export const appContext = createContext();

export function useAuth() {
  return useContext(appContext);
}

const ADD_TO_CART = gql`
  mutation ($productVariantId: ID!, $quantity: Int!) {
    addItemToOrder(productVariantId: $productVariantId, quantity: $quantity) {
      __typename
    }
  }
`;

function useAppContext() {
  // Put global variables and functions that aren't managed by the backend here
  const a = "banana";
  //this should be a global place where the shop query is handled and any filters categories pages etc are set
  const useQueryCollections = () => {
    const COLLECTION_QUERY = gql`
      query CollectionQuery {
        collections {
          items {
            slug
            position
            children {
              slug
            }
            parent {
              slug
            }
          }
          totalItems
        }
      }
    `;
    const { loading, error, data } = useQuery(COLLECTION_QUERY);
    return {
      loading,
      error,
      data,
    };
  };

  const [addToCart, { loading, error }] = useMutation(ADD_TO_CART);

  return {
    a,
    useQueryCollections,
    addToCart,
  };
}

export function ProvideCtx({ children }) {
  const ctx = useAppContext();
  return <appContext.Provider value={ctx}>{children}</appContext.Provider>;
}
