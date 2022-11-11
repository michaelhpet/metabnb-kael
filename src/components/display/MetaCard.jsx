import { Rating, Stack, styled, Typography } from '@mui/material';
import StarIcon from '../icons/StarIcon';
import Image from './Image';

export default function MetaCard(props) {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image src={props.src} alt={props.title} />
      </ImageWrapper>

      <Content>
        <TextStack>
          <NormalText>{props.title}</NormalText>
          <BoldText>{props.price}</BoldText>
        </TextStack>

        <TextStack>
          <NormalText>{props.distance}</NormalText>
          <NormalText>{props.duration}</NormalText>
        </TextStack>

        <Rating value={props.rating} icon={<StarIcon />} readOnly />
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  border: '1px solid rgba(215, 215, 215, 1)',
  borderRadius: 15,
});

const ImageWrapper = styled('div')({
  padding: '16px 16px 0 16px',
});

const Content = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
  padding: '0 11px 16px 16px',

  '& .MuiSvgIcon-root': {
    width: 12,
    height: 12,
    marginRight: 8,
  },
});

const TextStack = styled('article')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
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
