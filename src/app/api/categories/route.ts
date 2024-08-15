import { categories } from '@/app/api/categories/mockData';
export async function GET(request: Request) {
  return Response.json(categories);
}
