import { styled } from '@mui/material';

export default function Image(props) {
  return (
    <Image_ {...props}>
      <img src={props.src} alt={props.alt} />
    </Image_>
  );
}

const propKeys = ['width', 'height'];

const Image_ = styled('div', {
  shouldForwardProp: (prop) => !propKeys.includes(prop),
})((props) => ({
  position: 'relative',
  ...(props?.width && { width: props.width }),
  ...(props?.height && { width: props.height }),

  '& img': {
    width: '100%',
  },
}));
