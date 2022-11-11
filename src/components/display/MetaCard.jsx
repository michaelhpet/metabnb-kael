import { Rating, Stack, styled, Typography } from '@mui/material';
import StarIcon from '../icons/StarIcon';
import Image from './Image';

export default function MetaCard(props) {
  return (
    <Wrapper>
      <Image src={props.src} alt={props.title} />
      <Content>
        <Stack direction='row' alignItems='center'>
          <NormalText>{props.title}</NormalText>
          <BoldText>{props.price}</BoldText>
        </Stack>

        <Stack direction='row' alignItems='center'>
          <NormalText>{props.distance}</NormalText>
          <NormalText>{props.duration}</NormalText>
        </Stack>

        <Rating value={props.rating} icon={<StarIcon />} />
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
});

const Content = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
});

const NormalText = styled(Typography)({
  fontSize: 12,
  fontWeight: 400,
  lineHeight: '13.2px',
  color: 'rgba(67, 67, 67, 1)',
});

const BoldText = styled(NormalText)({
  fontWeight: 700,
});
