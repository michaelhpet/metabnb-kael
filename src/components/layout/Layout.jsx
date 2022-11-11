import { styled } from '@mui/material';
import Footer from './Footer';
import NavBar from './NavBar';

export default function Layout({ children }) {
  return (
    <Main>
      <NavBar />
      {children}
      <Footer />
    </Main>
  );
}

const Main = styled('main')({
  position: 'relative',
});
