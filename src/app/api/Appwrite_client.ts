import { Client } from 'appwrite';

const appWriteClient = new Client();

appWriteClient
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('66e846e300175632102d');

export { appWriteClient };
