import { appWriteClient } from '@/app/api/Appwrite_client';
import { Databases, ID, Query } from 'appwrite';
import { NextResponse } from 'next/server';

const database = new Databases(appWriteClient);

async function createItem(data: any) {
  try {
    const response = await database.createDocument(
      'digitalmenu',
      '66e862b000335c7e299d',
      ID.unique(),
      data
    );
    return response;
  } catch (error) {
    console.error('Error creating items', error);
    throw new Error('Error creating items');
  }
}

//fetch interpretation
async function fetchItems() {
  try {
    const response = await database.listDocuments(
      'digitalmenu',
      '66e862b000335c7e299d',
      [Query.orderDesc('$createdAt')]
    );
    return response.documents;
  } catch (error) {
    console.error('Error creating Items', error);
    throw new Error('Failed to fetch Items');
  }
}

//send data
export async function POST(req: Request) {
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
}

export { createItem, fetchItems };
