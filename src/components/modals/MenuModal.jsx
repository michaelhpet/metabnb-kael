import { Dialog, Menu, MenuItem, styled } from '@mui/material';
import navLinks from '../../utils/assets/navLinks';

export default function MenuModal(props) {
  return (
    <Menu open={props.open} onClose={props.onClose}>
      {navLinks.map((link) => (
        <MenuItem></MenuItem>
      ))}
    </Menu>
  );
}

const MenuItem = styled(MenuItem_)({
  padding: '32px 24px',
});
