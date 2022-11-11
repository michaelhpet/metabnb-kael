import { AppBar, styled } from '@mui/material';
import { Container } from '@mui/system';
import { useEffect, useMemo, useState } from 'react';
import BrandImage from '../brand/BrandImage';
import Button from '../input/Button';
import WalletModal from '../modals/WalletModal';
import NavLinks from './NavLinks';

export default function NavBar() {
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
      <Padding />
      <NavBar_ scroll={scroll}>
        <Container>
          <Toolbar>
            <BrandImage />
            <NavLinks />
            <Button variant='contained' onClick={() => setModalOpen(true)}>
              Connect wallet
            </Button>
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
const NavBar_ = styled(AppBar, {
  shouldForwardProp: (prop) => !propKeys.includes(prop),
})(({ theme, scroll }) => ({
  position: 'sticky',
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
