import { styled } from '@mui/material';

export default function Image(props) {
  return (
    <Image_ width={props.width} height={props.height}>
      <img {...props?.image} src={props.src} alt={props.alt} />
    </Image_>
  );
}

const propKeys = ['width', 'height', 'src'];

const Image_ = styled('div', {
  shouldForwardProp: (prop) => !propKeys.includes(prop),
})((props) => ({
  position: 'relative',
  ...(props?.width && { width: props.width }),
  ...(props?.height && { height: props.height }),

  '& img': {
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
    margin: 'auto',
  },
}));
