import {
  Grid,
  Container as Container_,
  styled,
  Typography,
} from '@mui/material';
import useImages from '../../utils/hooks/useImages';
import Button from '../input/Button';

export default function HeroA() {
  const { heroImage } = useImages();

  return (
    <Container>
      <Grid container spacing={{ xs: 5, md: 12.375 }}>
        <GridItem sm={12} md={6.73}>
          <TextContent>
            <Header component='h1'>
              Rent a <span>Place</span> away from <span>Home</span> in the{' '}
              <span>Metaverse</span>
            </Header>

            <SubHeader>
              we provide you access to luxury and affordable houses in the
              metaverse, get a chance to turn your imagination to reality at
              your comfort zone
            </SubHeader>

            <SearchBar>
              <input placeholder='Search for location' />
              <Button variant='contained'>Search</Button>
            </SearchBar>
          </TextContent>
        </GridItem>

        <GridItem sm={12} md={5.27}>
          <Image>
            <img src={heroImage} alt='Metabnb' />
          </Image>
        </GridItem>
      </Grid>
    </Container>
  );
}

const Container = styled(Container_)(({ theme }) => ({
  paddingTop: 67,
  paddingBottom: 67,

  [theme.breakpoints.down('sm')]: {
    paddingTop: 32,
  },
}));

const GridItem = styled((props) => <Grid {...props} item />)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  [theme.breakpoints.down(1000)]: {
    maxWidth: '50%',
    margin: '0 auto',

    [theme.breakpoints.down(900)]: {
      maxWidth: '100%',
      margin: '0 auto',
    },
  },
}));

const TextContent = styled('article')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 48,

  [theme.breakpoints.down(1000)]: {
    gap: 24,
  },
}));

const Header = styled(Typography)(({ theme }) => ({
  fontSize: 54,
  fontWeight: 400,
  lineHeight: '78.4px',
  letterSpacing: '-0.02em',
  color: 'rgba(67, 67, 67, 1)',

  [theme.breakpoints.between(900, 1000)]: {
    fontSize: 48,
  },

  '& span': {
    fontWeight: 700,
    color: theme.palette.primary.main,
  },
}));

const SubHeader = styled(Typography)(({ theme }) => ({
  fontSize: 24,
  fontWeight: 400,
  lineHeight: '35px',
  color: 'rgba(67, 67, 67, 1)',

  [theme.breakpoints.between(900, 1000)]: {
    fontSize: 20,
  },
}));

const SearchBar = styled('form')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  paddingBottom: 24,

  '& input': {
    flexGrow: 1,
    fontFamily: 'inherit',
    fontSize: 14,
    fontWeight: 400,
    lineHeight: '18.2px',
    padding: '16px 15px 18px',
    border: '1px solid #A3A3A3',
    borderRadius: '8px 0px 0px 8px',
    background: 'rgba(247, 247, 247, 0.1)',

    '&:focus': {
      outline: 'none',
      border: `1px solid ${theme.palette.primary.main}`,
    },
  },

  '& .MuiButton-root': {
    padding: '17px 87px',
    borderRadius: '0px 8px 8px 0px',
  },

  [theme.breakpoints.down(1000)]: {
    flexDirection: 'column',
    gap: 16,
    alignItems: 'flex-start',

    '& input': {
      width: '100%',
      borderRadius: 8,
    },

    '& .MuiButton-root': {
      borderRadius: 8,
    },
  },
}));

const Image = styled('div')(({ theme }) => ({
  position: 'relative',
  width: '100%',
  paddingRight: 19,

  [theme.breakpoints.down('md')]: {
    paddingRight: 0,
  },

  '& img': {
    width: '100%',
    // height: '100%',

    [theme.breakpoints.between(900, 1000)]: {
      width: '130%',
      marginLeft: -60,
    },
  },
}));
