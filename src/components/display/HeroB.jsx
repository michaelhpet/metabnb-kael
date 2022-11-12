import { Grid, Container, styled, Typography } from '@mui/material';
import useImages from '../../utils/hooks/useImages';
import Button_ from '../input/Button';
import Image from './Image';

export default function HeroB() {
  const { hero2Image } = useImages();

  return (
    <Wrapper id='nfts'>
      <Container>
        <Grid container spacing={12.375}>
          <GridItem xs={12} md={5.27}>
            <TextContent>
              <Header component='h2'>Metabnb NFTs</Header>

              <SubHeader>
                Discover our NFT gift cards collection. Loyal customers gets
                amazing gift cards which are traded as NFTs. These NFTs gives
                our cutomer access to loads of our exclusive services.
              </SubHeader>

              <div>
                <Button variant='contained'>Learn more</Button>
              </div>
            </TextContent>
          </GridItem>

          <GridItem xs={12} md={6.73}>
            <Image src={hero2Image} alt='Metabnb' />
          </GridItem>
        </Grid>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled('section')(({ theme }) => ({
  paddingTop: 100,
  paddingBottom: 99.15,
  background: theme.palette.primary.main,
  border: '1px solid rgba(0, 0, 0, 1)',
}));

const GridItem = styled((props) => <Grid {...props} item />)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const TextContent = styled('article')({
  display: 'flex',
  flexDirection: 'column',
  gap: 35,
});

const Header = styled(Typography)(({ theme }) => ({
  fontSize: 48,
  fontWeight: 700,
  lineHeight: '59.95px',
  color: '#FFFFFF',

  '& span': {
    fontWeight: 700,
    color: theme.palette.primary.main,
  },
}));

const SubHeader = styled(Typography)({
  fontSize: 18,
  fontWeight: 400,
  lineHeight: '35px',
  marginBottom: 22.55,
  color: '#FFFFFF',
});

const Button = styled(Button_)(({ theme }) => ({
  padding: '14px 33px',
  background: 'linear-gradient(124.4deg, #FFFFFF 10.8%, #FFFFFF)',
  color: theme.palette.primary.main,
}));
