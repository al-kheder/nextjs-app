import { create } from 'zustand';
import { appWriteClient, storage } from '@/app/api/Appwrite_client';
import { Databases, ID, Query } from 'appwrite';
import { NextResponse } from 'next/server';
import {
  BUCKET_ENDPOINT,
  BUCKET_ID,
  PROJECT_ID,
} from '../../databases/appwrite_config';

//db
import { db } from '../../databases/appwrite_database';

const database = new Databases(appWriteClient);

async function createItem(data: any) {
  const { file, ...rest } = data;
  try {
    /*   const response = await database.createDocument(
      'digitalmenu',
      '66e862b000335c7e299d',
      ID.unique(),
      rest 
    );
*/
    const response = await db.item.create(rest);
    const promise = await storage.createFile('itemBucket', data.imageId, file); //ID.uniqe()

    return response;
  } catch (error) {
    console.error('Error creating file', error);
    throw new Error('Error creating items');
  }
}

//fetch items
async function fetchItems() {
  try {
    /*   const response = await database.listDocuments(
      'digitalmenu',
      '66e862b000335c7e299d',
      [Query.orderDesc('$createdAt')]
    ); */

    const response = await db.item.list();

    return response.documents;
  } catch (error) {
    console.error('Error creating Items', error);
    throw new Error('Failed to fetch Items');
  }
}

//fetch the filelist

const getImageUrl = (imageId: string): string => {
  const baseUrl = BUCKET_ENDPOINT;
  return `${baseUrl}/${BUCKET_ID}/files/${imageId}/view?project=${PROJECT_ID}`;
};

//send data
/* export async function POST(req: Request) {
  try {
    const { term, interpretation } = await req.json();
    const data = { term, interpretation };
    const responce = await createItem(data);
    return NextResponse.json({
      message: 'Items created successfully',
    });
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to create Items' },
      { status: 500 }
    );
  }
} */

export { createItem, fetchItems, getImageUrl };
