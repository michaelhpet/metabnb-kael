import { Link } from 'react-router-dom';
import useImages from '../../utils/hooks/useImages';
import Image from '../display/Image';

export default function BrandImage() {
  const { brandImage } = useImages();

  function scrollToTop() {
    if (window) window.scrollTo(0, 0);
  }

  return (
    <Link to='/' onClick={scrollToTop}>
      <Image src={brandImage} alt='Meta BnB logo' />
    </Link>
  );
}

// const Wrapper = styled('div')({
//   position: 'relative',
//   width: 233,
//   height: 36.67,
// });
