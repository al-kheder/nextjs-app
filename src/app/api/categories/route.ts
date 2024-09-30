import { categories } from '@/app/api/categories/mockData';
import {
  createCategory,
  deleteCategory,
  fetchCategories,
} from '@/services/categoriesServices';
import { NextResponse } from 'next/dist/server/web/spec-extension/response';

// get data
export async function GET() {
  try {
    const categories = await fetchCategories();

    return NextResponse.json(categories);
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to fetch categories' },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const responce = await createCategory(data);
    return NextResponse.json({
      message: 'Interpretation created successfully',
    });
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to create category' },
      { status: 500 }
    );
  }
}

/* //DELETE DATA 
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const response = await deleteCategory (id);
    return NextResponse.json({
      message: "category deleted successfully",
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to delete category" },
      { status: 500 }
    );
  }
}
 */
