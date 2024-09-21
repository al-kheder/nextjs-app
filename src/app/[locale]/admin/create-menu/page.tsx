import MenuForm from './MenuForm';

async function Page() {
  const response = await fetch('http://localhost:3000/api/categories');
  const data = await response.json();

  
  return (
    <main className="flex justify-center">
      <MenuForm category={data} />
    </main>
  );
}

export default Page;
