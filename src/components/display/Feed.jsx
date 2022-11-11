import { Container, Grid, styled, Typography } from '@mui/material';
import useMetaImages from '../../utils/hooks/useMetaImages';
import MetaCard from './MetaCard';

export default function Feed(props) {
  const images = useMetaImages();

  return (
    <Container>
      {props?.home ? (
        <Header>Inspiration for your next adventure</Header>
      ) : null}

      <GridContainer spacing={3}>
        {(props?.home
          ? [...images.slice(4, 8), ...images.slice(0, 4)]
          : images
        ).map((image) => (
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
      </GridContainer>
    </Container>
  );
}

const GridContainer = styled((props) => <Grid {...props} container />)({
  padding: '0 0 43px',
});

const Header = styled(Typography)(({ theme }) => ({
  fontSize: 48,
  fontWeight: 700,
  lineHeight: '59.95px',
  textAlign: 'center',
  padding: '58px 0 43px',
  color: 'rgba(0, 0, 0, 1)',
}));
