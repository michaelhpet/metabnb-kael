import { SvgIcon } from '@mui/material';

export default function CancelIcon(props) {
  return (
    <SvgIcon
      {...props}
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M18 6L6 18'
        stroke='#1A1A1A'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M6 6L18 18'
        stroke='#1A1A1A'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </SvgIcon>
  );
}
