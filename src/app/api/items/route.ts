import { menu } from '@/app/api/items/mockData';
export async function GET(request: Request) {
  return Response.json(menu);
}
