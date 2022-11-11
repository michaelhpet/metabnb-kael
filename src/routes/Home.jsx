import { useEffect } from 'react';
import Belt from '../components/display/Belt';
import Feed from '../components/display/Feed';
import HeroA from '../components/display/HeroA';
import HeroB from '../components/display/HeroB';
import Layout from '../components/layout/Layout';
import useScroll from '../utils/hooks/useScroll';

export default function Home() {
  const scroll = useScroll();

  useEffect(() => {
    scroll();

    window?.addEventListener('hashchange', () => {
      console.log('hash changed');
      scroll();
    });
  });

  return (
    <Layout>
      <HeroA />
      <Belt />
      <Feed home />
      <HeroB />
    </Layout>
  );
}
