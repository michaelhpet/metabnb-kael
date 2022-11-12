import {
  AppBar,
  IconButton,
  Stack,
  styled,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Container } from '@mui/system';
import { useEffect, useState } from 'react';
import BrandImage from '../brand/BrandImage';
import Button_ from '../input/Button';
import WalletModal from '../modals/WalletModal';
import NavLinks from './NavLinks';

export default function NavBar() {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const tablet = useMediaQuery(theme.breakpoints.down(1000));
  const [scroll, setScroll] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (window) {
      window.addEventListener('scroll', () => {
        setScroll(() => window.scrollY);
      });
    }
  }, [scroll]);
  return (
    <>
      {!smDown && <Padding />}
      <NavBar_ scroll={scroll}>
        <Container>
          <Toolbar>
            <BrandImage />
            <NavLinks />

            <Stack direction='row' alignItems='center' spacing={2}>
              {tablet ? (
                <IconButton>
                  <MenuIcon />
                </IconButton>
              ) : null}

              <Button variant='contained' onClick={() => setModalOpen(true)}>
                Connect wallet
              </Button>
            </Stack>
            <WalletModal open={modalOpen} onClose={() => setModalOpen(false)} />
          </Toolbar>
        </Container>
      </NavBar_>
    </>
  );
}

const Padding = styled('div')({
  width: '100%',
  height: 24,
});

const propKeys = ['scroll'];
const NavBar_ = styled('nav', {
  shouldForwardProp: (prop) => !propKeys.includes(prop),
})(({ theme, scroll }) => ({
  position: 'sticky',
  top: 0,
  zIndex: 999,
  padding: '16px 0',
  boxShadow: `0 3px 3px ${
    scroll > 100 ? 'rgba(67, 67, 67, 0.25)' : 'transparent'
  }`,
  background: theme.palette.background.default,
}));

const Toolbar = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const Button = styled(Button_)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    display: 'block',
    flexGrow: 1,
    lineHeight: '16px',
    padding: '10px 8px',
  },
}));
