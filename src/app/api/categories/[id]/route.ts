import { Message } from './../../../../../node_modules/react-hook-form/dist/types/errors.d';
import { appWriteClient } from '@/app/api/Appwrite_client';
import { Databases } from 'appwrite';
import { NextResponse } from 'next/server';

const database = new Databases(appWriteClient);

//fetch specific data

async function fetchCategory(id: string) {
  try {
    const category = await database.getDocument(
      'digitalmenu',
      'categories',
      id
    );
    return category;
  } catch (error) {
    console.error('Error fetching category', error);
    throw new Error('Failed to fetch category');
  }
}

//DELET DATE

async function deleteCategory(id: string) {
  try {
    const response = await database.deleteDocument(
      'digitalmenu',
      'categories',
      id
    );
    return response;
  } catch (error) {
    console.error('Error deleting category', error);
    throw new Error('Failed to delete category');
  }
}

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const category = await fetchCategory(id);
    return NextResponse.json(category);
  } catch (error) {
    return { message: 'Failed to fetch category' };
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const category = await deleteCategory(id);
    return NextResponse.json(category);
  } catch (error) {
    return { message: 'Failed to delete category' };
  }
}
