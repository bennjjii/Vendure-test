import { createContext, useContext, useState } from "react";
import { useQuery, gql } from "@apollo/client";

export const appContext = createContext();

export function useAuth() {
  return useContext(appContext);
}

function useAppContext() {
  // Put global variables and functions that aren't managed by the backend here
  const a = "banana";
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

  return {
    a,
    useQueryCollections,
  };
}

export function ProvideCtx({ children }) {
  const ctx = useAppContext();
  return <appContext.Provider value={ctx}>{children}</appContext.Provider>;
}
