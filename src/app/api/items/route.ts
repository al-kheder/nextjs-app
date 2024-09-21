import { createItem, fetchItems } from '@/services/itemsService';
import { NextResponse } from 'next/dist/server/web/spec-extension/response';
import { Formidable } from 'formidable';


// get data
export async function GET() {
  try {
    const items = await fetchItems();

    return NextResponse.json(items);
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to fetch Items' },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const formData = await req.body
 

    console.log(formData);

    //return the data back or just do whatever you want with it

    /*     const responce = await createItem({ ...fields, file: files.file })
     */ return NextResponse.json({
      message: 'Items created successfully',
    });
  } catch (error) {
    console.log('error', error);
    return NextResponse.json(
      { message: 'Failed to create Items' },
      { status: 500 }
    );
  }
}
