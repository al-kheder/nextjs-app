import DisplayData from './DisplayData';

async function PageCategory() {
  /* const response = await fetch('http://localhost:3000/api/categories');
  const data = await response.json();
console.log('data from the server component', data); */
  return (
    <main className="flex justify-center">
      <DisplayData />
    </main>
  );
}

export default PageCategory;
