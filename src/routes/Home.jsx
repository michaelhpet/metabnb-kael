import Belt from '../components/display/Belt';
import Feed from '../components/display/Feed';
import HeroA from '../components/display/HeroA';
import HeroB from '../components/display/HeroB';
import Layout from '../components/layout/Layout';

export default function Home() {
  return (
    <Layout>
      <HeroA />
      <Belt />
      <Feed home />
      <HeroB />
    </Layout>
  );
}
