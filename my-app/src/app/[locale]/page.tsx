// app/page.tsx
import { Button } from '@/components/Button';
import { Navbar } from '@/components/Navbar';
import { DesktopItem } from '@/components/Navbar/Desktop/Item';
import SceneHairDryer from '@/components/Scenes/SceneHairDryer';
import { logotypeTitle } from '@/constants';
import { PageHome } from '@/pages/Home';
import motion from 'framer-motion';
import { useTranslations } from "next-intl";


type Props = {
};


export default function Home({}: Props) {
  const t = useTranslations("Index");

  
  return (
    <div className='text-white'>
      <PageHome/>
    </div>
  );
}
