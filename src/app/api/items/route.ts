import { createItem, fetchItems } from '@/services/itemsService';
import { NextResponse } from 'next/dist/server/web/spec-extension/response';
import { Formidable } from 'formidable';

export const config = {
  api: {
    bodyParser: false,
  },
};

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
    const formData = await req.formData();
    const name = formData.get('name');
    const nameAr = formData.get('nameAr');
    const file = formData.get('file');
    const fields = { name, nameAr, file };

    console.log('fields route', fields);

    const responce = await createItem(fields);
    return NextResponse.json({
      formData,
    });
  } catch (error) {
    console.log('error', error);
    return NextResponse.json({ error });
  }
}
