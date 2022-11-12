import { styled } from '@mui/material';
import { Container } from '@mui/system';
import useImages from '../../utils/hooks/useImages';
import Image from './Image';

export default function Belt() {
  const { mbtokenImage, metamaskImage, openseaImage } = useImages();

  return (
    <Wrapper id='community'>
      <Container>
        <Image src={mbtokenImage} alt='MB Token image' />
        <Image src={metamaskImage} alt='Meta Mask image' />
        <Image src={openseaImage} alt='Open Sea image' />
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled('section')(({ theme }) => ({
  padding: '10px 0',
  background: theme.palette.primary.main,

  '& .MuiContainer-root': {
    display: 'flex',
    alignItems: 'center',
    padding: '0 62.77px',
    justifyContent: 'space-between',

    [theme.breakpoints.down(800)]: {
      padding: '32px 0',
      flexDirection: 'column',
      gap: 32,
    },
  },
}));
