import DisplayData from './DisplayData';

async function PageCategory() {
  const response = await fetch('http://localhost:3000/api/categories');
  const data = await response.json();

  console.log('data', data);
  return (
    <main className="flex justify-center">
      <DisplayData dataToDisplay={data} />
    </main>
  );
}

export default PageCategory;
