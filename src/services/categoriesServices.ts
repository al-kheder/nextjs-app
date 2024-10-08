import { categories } from '@/app/api/categories/mockData';
import { appWriteClient } from '@/app/api/Appwrite_client';
import { Databases, ID, Query } from 'appwrite';
import { NextResponse } from 'next/server';

//db
import { db } from '../../databases/appwrite_database';

//const database = new Databases(appWriteClient);

async function createCategory(data: any) {
  try {
    /*  const response = await database.createDocument(
      'digitalmenu',
      'categories',
      ID.unique(),
      data
    ); */
    const response = await db.category.create(data);
    return response;
  } catch (error) {
    console.error('Error creating category', error);
    throw new Error('Error creating category');
  }
}

//fetch data
async function fetchCategories() {
  try {
    /*  const response = await database.listDocuments('digitalmenu', 'categories', [
      Query.orderDesc('$createdAt'),
    ]); */
    const response = await db.category.list();
    return response.documents;
  } catch (error) {
    console.error('Error creating category', error);
    throw new Error('Failed to fetch category');
  }
}

//send data
export async function POST(req: Request) {
  try {
    const data = await req.json();
    const responce = await createCategory(data);
    return NextResponse.json({
      message: 'Category created successfully',
    });
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to create Category' },
      { status: 500 }
    );
  }
}

// get data
export async function GET() {
  try {
    const categories = await fetchCategories();

    return NextResponse.json(categories);
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to fetch categoreis' },
      { status: 500 }
    );
  }
}

//delete data

async function deleteCategory(id: string) {
  try {
    /* const response = await database.deleteDocument(
      'digitalmenu',
      'categories',
      id
    ); */
    const response = await db.category.delete(id);
    return NextResponse.json({
      message: 'Category deleted successfully',
    });
  } catch (error) {
    console.log('Error deleting category', error);
    throw new Error('Failed to delete category');
  }
}

//update data
export async function PUT(req: Request) {
  try {
    const { id, term, category } = await req.json();
    const data = { term, category };
    await database.updateDocument('digitalmenu', 'categories', id, data);
    return NextResponse.json({
      message: 'Category updated successfully',
    });
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to update category' },
      { status: 500 }
    );
  }
}

export { createCategory, fetchCategories, deleteCategory };
