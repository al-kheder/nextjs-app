import {
  databases,
  DATABASE_ID_DEV,
  COLLECTION_ID_CATEGORY,
  COLLECTION_ID_ITEM,
} from './appwrite_config';
import { ID, Query } from 'appwrite';

const collections = [
  {
    databaseId: DATABASE_ID_DEV,
    id: COLLECTION_ID_CATEGORY,
    name: 'category',
  },
  {
    databaseId: DATABASE_ID_DEV,
    id: COLLECTION_ID_ITEM,
    name: 'item',
  },
];

const db: { [key: string]: any } = {};

collections.forEach((collection) => {
  db[collection.name] = {
    get: (id) =>
      databases.getDocument(collection.databaseId, collection.id, id),

    list: (queries: Query[] = []) =>
      databases.listDocuments(collection.databaseId, collection.id, queries),

    create: (data: any) =>
      databases.createDocument(
        collection.databaseId,
        collection.id,
        ID.unique(),
        data
      ),

    update: (documentId: string, data: any) =>
      databases.updateDocument(
        collection.databaseId,
        collection.id,
        documentId,
        data
      ),

    delete: (documentId: string) =>
      databases.deleteDocument(
        collection.databaseId,
        collection.id,
        documentId
      ),
  };
});

export { db };
