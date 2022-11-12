import { useMediaQuery, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import useImages from '../../utils/hooks/useImages';
import Image from '../display/Image';

export default function BrandImage() {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const { brandImage } = useImages();

  function scrollToTop() {
    if (window) window.scrollTo(0, 0);
  }

  return (
    <Link to='/' onClick={scrollToTop}>
      <Image
        src={brandImage}
        alt='Meta BnB logo'
        {...(smDown && { width: '70%' })}
      />
    </Link>
  );
}
