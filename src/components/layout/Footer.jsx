import {
  Box,
  Container,
  Grid,
  IconButton,
  Stack,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import useImages from '../../utils/hooks/useImages';
import Image from '../display/Image';
import FacebookIcon from '../icons/FacebookIcon';
import InstagramIcon from '../icons/InstagramIcon';
import TwitterIcon from '../icons/TwitterIcon';
import CopyrightIcon from '../icons/CopyrightIcon';
import footerLinks from '../../utils/assets/footerLinks';
import { Link as Link_ } from 'react-router-dom';

export default function Footer() {
  return (
    <Wrapper>
      <Container>
        <Grid container columnSpacing={15} rowSpacing={7.875}>
          <Grid item xs={12} sm={6} md={3}>
            <BrandStack />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <LinksHeader>Community</LinksHeader>

            <Stack spacing={2}>
              {footerLinks.communityLinks.map((link) => (
                <Link key={link.label} to={link.path}>
                  {link.label}
                </Link>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <LinksHeader>Places</LinksHeader>

            <Stack spacing={1}>
              {footerLinks.placesLinks.map((link) => (
                <Link key={link.label} to={link.path}>
                  {link.label}
                </Link>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <LinksHeader>About us</LinksHeader>

            <Stack spacing={2}>
              {footerLinks.aboutLinks.map((link) => (
                <Link key={link.label} to={link.path}>
                  {link.label}
                </Link>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  );
}

function BrandStack() {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const { brandImageBw } = useImages();

  return (
    <Stack spacing={6.875}>
      <Box sx={{ marginBottom: 5.125 }}>
        <Image
          src={brandImageBw}
          alt='Meta BnB brand logo black and white'
          {...(smDown && { width: '70%' })}
        />
      </Box>

      <Stack direction='row' alignItems='center' spacing={4}>
        <IconButton>
          <FacebookIcon />
        </IconButton>
        <IconButton>
          <InstagramIcon />
        </IconButton>
        <IconButton>
          <TwitterIcon />
        </IconButton>
      </Stack>

      <Copyright>
        <CopyrightIcon />
        <CopyrightText>2022 Metabnb</CopyrightText>
      </Copyright>
    </Stack>
  );
}

const Wrapper = styled('footer')({
  padding: '58px 0 37px',
  background: 'rgba(29, 29, 30, 1)',

  '& .MuiSvgIcon-root': {
    width: 18,
    height: 18,
  },
});

const Copyright = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
});

const CopyrightText = styled(Typography)({
  fontSize: 16,
  fontWeight: 400,
  lineHeight: '24px',
  color: '#F7F7F7',
});

const LinksHeader = styled(Typography)({
  fontSize: 18,
  fontWeight: 700,
  lineHeight: '22.48px',
  marginBottom: 23,
  paddingTop: 5,
  color: 'rgba(255, 255, 255, 1)',
});

const Link = styled(Link_)({
  fontSize: 14,
  fontWeight: 400,
  lineHeight: '35px',
  textDecoration: 'none',
  color: 'rgba(241, 243, 249, 1)',
});
