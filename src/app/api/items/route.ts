import { createItem, fetchItems } from '@/services/itemsService';
import { NextResponse } from 'next/dist/server/web/spec-extension/response';

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
    const data = await req.json();
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
