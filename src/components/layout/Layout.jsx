import { styled } from '@mui/material';
import NavBar from './NavBar';

export default function Layout({ children }) {
  return (
    <Main>
      <NavBar />
      {children}
    </Main>
  );
}

const Main = styled('main')({
  position: 'relative',
});
