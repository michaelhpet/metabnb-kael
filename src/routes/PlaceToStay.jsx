import Feed from '../components/display/Feed';
import FilterBar from '../components/display/FilterBar';
import Layout from '../components/layout/Layout';

export default function PlaceToStay() {
  return (
    <Layout>
      <FilterBar />
      <Feed />
    </Layout>
  );
}
