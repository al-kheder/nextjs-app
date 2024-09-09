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
  const staticData = await fetch('http://localhost:3000/api/categories', {
    cache: 'force-cache',
  });
  const response = await staticData.json();

  const menuReq = await fetch('http://localhost:3000/api/items', {
    cache: 'force-cache',
  });
  const menu = await menuReq.json();

  const cats = response.data.filter(({ id }) =>
    menu.data.some(({ categoryId }) => categoryId === id)
  );

  return (
    <section className="px-40 py-20 w-full flex flex-col justify-center">
      <div className="flex flex-col justify-center w-full">
        <Header />
        <div>
          <Slider categories={cats} />
          <MenuList menu={menu.data} categoryId={categoryId} />
          {/* <MenuList /> */}
        </div>
        <ShowmyOrderButton />
        <Footer />
      </div>
    </section>
  );
}
