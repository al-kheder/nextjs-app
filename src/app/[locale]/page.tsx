import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Slider from '@/components/Slider';
import OrderCard from '@/components/OrderCard';

export default function Home() {
  return (
    <section className=" px-40 py-20 w-full flex flex-col justify-center">
      <div className="flex flex-col  justify-center   w-full ">
        <Header />
        <div>
          <Slider />
          <OrderCard />
        </div>
        <Footer />
      </div>
    </section>
  );
}
