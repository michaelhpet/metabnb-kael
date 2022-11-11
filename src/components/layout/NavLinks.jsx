import { Stack, styled } from '@mui/material';
import { Link as Link_ } from 'react-router-dom';
import navLinks from '../../utils/assets/navLinks';
import useScroll from '../../utils/hooks/useScroll';

export default function NavLinks() {
  const scroll = useScroll();

  return (
    <Stack direction='row' alignItems='center' spacing={6}>
      {navLinks.map((link) => (
        <Link key={link.label} to={link.path} onClick={() => scroll(link.path)}>
          {link.label}
        </Link>
      ))}
    </Stack>
  );
}

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
