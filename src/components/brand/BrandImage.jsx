import { styled } from '@mui/material';
import useImages from '../../utils/hooks/useImages';

export default function BrandImage() {
  const { brandImage } = useImages();

  return (
    <Wrapper>
      <img src={brandImage} />
    </Wrapper>
  );
}

const Wrapper = styled('div')({
  position: 'relative',
  width: 233,
  height: 36.67,

  '& img': {
    width: '100%',
    height: '100%',
  },
});
