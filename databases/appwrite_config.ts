import { Client, Databases, Storage } from 'appwrite';

const ENDPOINT = 'https://cloud.appwrite.io/v1';
const PROJECT_ID = '66e846e300175632102d';
const DATABASE_ID_DEV = 'digitalmenu';
const COLLECTION_ID_CATEGORY = 'categories';
const COLLECTION_ID_ITEM = '66e862b000335c7e299d';
const BUCKET_ID = 'itemBucket';
const BUCKET_ENDPOINT = 'https://cloud.appwrite.io/v1/storage/buckets';

const client = new Client();

client.setEndpoint(ENDPOINT).setProject(PROJECT_ID);

const databases = new Databases(client);

const storage = new Storage(client);

export {
  PROJECT_ID,
  client,
  storage,
  databases,
  DATABASE_ID_DEV,
  COLLECTION_ID_CATEGORY,
  COLLECTION_ID_ITEM,
  BUCKET_ENDPOINT,
  BUCKET_ID
};
