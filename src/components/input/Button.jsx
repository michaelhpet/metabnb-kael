import { Button as Button_, styled } from '@mui/material';

const Button = styled((props) => (
  <Button_ {...props} disableElevation disableRipple />
))({
  fontSize: 16,
  fontWeight: 400,
  lineHeight: '19.98px',
  textTransform: 'none',
  padding: '14px 26px',
  borderRadius: 10,
});

export default Button;
