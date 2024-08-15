import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ModeToggle } from '@/components/ModeToggle';
import Header from '@/components/Header';
import { useTranslations } from 'next-intl';
import LocalSwitscher from '@/components/LocalSwitscher';
import Category from '@/components/FoodCategorySlider';
import Footer from '@/components/Footer';
import FoodCategorySlider from '@/components/FoodCategorySlider';
import Slider from '@/components/Slider';
import OrderCard from '@/components/OrderCard';

export default function Home() {
  const t = useTranslations('HomePage');

  return (
    <section className=" px-40 py-20 w-full flex flex-col justify-center">
      <div className="flex flex-col  justify-center   w-full ">
        {/*   <div className="flex justify-between">
          <LocalSwitscher/>
          <h1 className="text-3xl font-bold">{t('pageTitle')}</h1>
          <ModeToggle />
        </div>
        <Card className="w-[350px] mt-10">
          <CardHeader>
            <CardTitle>{t('cardTitle')}</CardTitle>
            <CardDescription>{t('cardDescription')}</CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">{t('name')}</Label>
                  <Input id="name" placeholder="Name of your project" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="framework">Framework</Label>
                  <Select>
                    <SelectTrigger id="framework">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="next">Next.js</SelectItem>
                      <SelectItem value="sveltekit">SvelteKit</SelectItem>
                      <SelectItem value="astro">Astro</SelectItem>
                      <SelectItem value="nuxt">Nuxt.js</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button>Deploy</Button>
          </CardFooter>
        </Card> */}
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
