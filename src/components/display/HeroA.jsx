import { Grid, Stack, styled, Typography } from '@mui/material';
import useImages from '../../utils/hooks/useImages';
import Button from '../input/Button';

export default function HeroA() {
  const { heroImage } = useImages();

  return (
    <Wrapper>
      <Grid container spacing={12.375}>
        <GridItem xs={12} md={6.73}>
          <TextContent>
            <Header>
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

        <GridItem xs={12} md={5.27}>
          <Image>
            <img src={heroImage} />
          </Image>
        </GridItem>
      </Grid>
    </Wrapper>
  );
}

const Wrapper = styled('section')({
  padding: '67px 0',
});

const GridItem = styled((props) => <Grid {...props} item />)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const TextContent = styled('article')({
  display: 'flex',
  flexDirection: 'column',
  gap: 48,
});

const Header = styled(Typography)(({ theme }) => ({
  fontSize: 54,
  fontWeight: 400,
  lineHeight: '78.4px',
  letterSpacing: '-0.02em',
  color: 'rgba(67, 67, 67, 1)',

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
}));

const SearchBar = styled('form')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',

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
}));

const Image = styled('div')({
  position: 'relative',
  width: '100%',
  height: '100%',

  '& img': {
    width: '94%',
    height: '100%',
  },
});
