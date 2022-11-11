import { Container, Grid, styled, Typography } from '@mui/material';
import useMetaImages from '../../utils/hooks/useMetaImages';
import MetaCard from './MetaCard';

export default function Feed() {
  const images = useMetaImages();

  return (
    <Wrapper>
      <Header>Inspiration for your next adventure</Header>
      <Grid container spacing={3}>
        {images.map((image) => (
          <Grid item key={image} xs={12} sm={6} md={3}>
            <MetaCard
              src={image}
              title='Desert king'
              price='1MBT per night'
              distance='2345km away'
              duration='available for 2weeks stay'
              rating={5}
            />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
}

const Wrapper = styled(Container)({
  paddingTop: 39,
});

const Header = styled(Typography)(({ theme }) => ({
  fontSize: 48,
  fontWeight: 700,
  lineHeight: '59.95px',
  textAlign: 'center',
  color: 'rgba(0, 0, 0, 1)',
}));
