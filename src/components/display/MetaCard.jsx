import { Checkbox, Rating, styled, Typography } from '@mui/material';
import StarIcon from '../icons/StarIcon';
import HeartIcon from '../icons/HeartIcon';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function MetaCard(props) {
  return (
    <Wrapper>
      <Media>
        <Background bg={props.src}>
          <Heart>
            <Checkbox icon={<HeartIcon />} checkedIcon={<FavoriteIcon />} />
          </Heart>
        </Background>
      </Media>

      <Content>
        <TextStack>
          <NormalText>{props.title}</NormalText>
          <BoldText>{props.price}</BoldText>
        </TextStack>

        <TextStack>
          <NormalText>{props.distance}</NormalText>
          <NormalText>{props.duration}</NormalText>
        </TextStack>

        <Rating value={props.rating} icon={<StarIcon />} />
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

const Media = styled('div')({
  width: '100%',
  height: 265,
  padding: '16px 16px 0 16px',
});

const Background = styled('div', {
  shouldForwardProp: (prop) => prop !== 'bg',
})(({ bg }) => ({
  position: 'relative',
  width: '100%',
  height: '100%',
  background: `url(${bg}) no-repeat`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  borderRadius: 15,
}));

const Heart = styled('div')({
  position: 'absolute',
  top: 8,
  right: 8,
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
