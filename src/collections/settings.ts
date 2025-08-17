import { createCollection } from "@tanstack/react-db";
import { electricCollectionOptions } from "@tanstack/electric-db-collection";
import { TableSchema } from "./types";

const createCustomCollection = (id: string) =>
  createCollection(
    electricCollectionOptions({
      id,
      shapeOptions: {
        url: `${import.meta.env.VITE_SERVER_URL}/api/shapes/${id}`,
      },
      schema: TableSchema,
      getKey: (item) => item.id,
    })
  );

export const collectionA = createCustomCollection("a");
export const collectionB = createCustomCollection("b");
export const collectionC = createCustomCollection("c");
export const collectionD = createCustomCollection("d");
