import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Slider from '@/components/Slider';
import MenuList from '@/components/MenuList';
import ShowmyOrderButton from '@/components/ShowmyOrderButton';

export default async function Home({
  searchParams: { categoryId },
}: {
  searchParams: { categoryId: string };
}) {
  const response = await fetch('http://localhost:3000/api/categories');
  const categories = await response.json();

  const menuReq = await fetch('http://localhost:3000/api/items');
  const menu = await menuReq.json();

  console.log('menu::', menu);
  //const cats = categories;

  return (
    <section className="px-40 py-20 w-full flex flex-col justify-center">
      <div className="flex flex-col justify-center w-full">
        <Header />
        <div>
          <Slider categories={categories} />
          <MenuList menu={menu} category={categories} />
          {/* <MenuList /> */}
        </div>
        <ShowmyOrderButton />
        <Footer />
      </div>
    </section>
  );
}
