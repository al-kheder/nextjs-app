import { campanies } from '@/app/api/company/mockData';
export async function GET(request: Request) {
  return Response.json(campanies);
}
