import {
  Container,
  styled,
  Tab as Tab_,
  Tabs,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import filterLinks from '../../utils/assets/filterLinks';
import Button_ from '../input/Button';
import SettingsIcon from '../icons/SettingsIcon';

export default function FilterBar() {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container>
      <Wrapper>
        <Tabs
          value={false}
          variant='scrollable'
          scrollButtons={smDown}
          allowScrollButtonsMobile>
          {filterLinks.map((link) => (
            <Tab key={link.label} label={link.label} />
          ))}
        </Tabs>

        <div>
          <Button endIcon={<SettingsIcon />}>Location</Button>
        </div>
      </Wrapper>
    </Container>
  );
}

const Wrapper = styled('section')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: 65,
  marginLeft: -16,
  paddingTop: 99,
  paddingRight: 63,
  paddingBottom: 64,

  [theme.breakpoints.down('sm')]: {
    gap: 8,
    marginLeft: -40,
  },
}));

const Tab = styled((props) => <Tab_ {...props} disableRipple />)(
  ({ theme }) => ({
    textTransform: 'none',
    fontSize: 20,
    fontWeight: 400,
    lineHeight: '24.98px',
    borderRadius: 8,
    textDecoration: 'none',
    color: 'rgba(67, 67, 67, 1)',

    '&:hover': {
      color: theme.palette.primary.main,
    },
  })
);

const Button = styled(Button_)(({ theme }) => ({
  flexGrow: 1,
  padding: '14px 16px 14px 13px',
  border: '1px solid rgba(180, 180, 180, 1)',
  borderRadius: 8,
  background: 'transparent',
  color: 'rgba(51, 51, 51, 1)',
  gap: 40,

  [theme.breakpoints.down('sm')]: {
    gap: 8,
  },
}));
