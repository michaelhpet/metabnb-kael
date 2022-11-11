import { AppBar, styled } from '@mui/material';
import BrandImage from '../brand/BrandImage';
import Button from '../input/Button';
import NavLinks from './NavLinks';

export default function NavBar() {
  return (
    <NavBar_>
      <Toolbar>
        <BrandImage />
        <NavLinks />
        <Button variant='contained'>Connect wallet</Button>
      </Toolbar>
    </NavBar_>
  );
}

const NavBar_ = styled(AppBar)({
  position: 'sticky',
  padding: '40px 0',
  background: 'transparent',
  boxShadow: 'none',
});

const Toolbar = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});
