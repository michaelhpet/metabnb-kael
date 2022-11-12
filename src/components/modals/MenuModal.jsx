import { Menu as Menu_, MenuItem as MenuItem_, styled } from '@mui/material';
import { Link as Link_ } from 'react-router-dom';
import navLinks from '../../utils/assets/navLinks';
import useScroll from '../../utils/hooks/useScroll';

export default function MenuModal(props) {
  const scroll = useScroll();

  return (
    <Menu
      keepMounted
      open={props.open}
      onClose={props.onClose}
      anchorEl={props.anchorEl}
      disableScrollLock>
      {navLinks.map((link) => (
        <Link key={link.label} to={link.path} onClick={() => scroll(link.path)}>
          <MenuItem>{link.label}</MenuItem>
        </Link>
      ))}
    </Menu>
  );
}

const Menu = styled(Menu_)({
  '& .MuiBackdrop-root': {
    background: 'rgba(64, 64, 64, 0.3)',
  },

  '& .MuiPaper-root': {
    borderRadius: 16,
    boxShadow: 'none',
  },
});

const MenuItem = styled(MenuItem_)({
  minWidth: 300,
  padding: '18px 24px',
  borderBottom: '1px solid  rgba(207, 216, 220, 1)',
});

const Link = styled(Link_)(({ theme }) => ({
  fontSize: 20,
  fontWeight: 400,
  lineHeight: '24.98px',
  textDecoration: 'none',
  color: 'rgba(67, 67, 67, 1)',

  '&: hover': {
    color: theme.palette.primary.main,
  },
}));
