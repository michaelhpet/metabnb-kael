import {
  Dialog,
  Grow,
  IconButton,
  Stack,
  styled,
  Typography,
} from '@mui/material';
import useImages from '../../utils/hooks/useImages';
import Image from '../display/Image';
import CancelIcon from '../icons/CancelIcon';
import ChevronRightIcon from '../icons/ChevronRightIcon';

export default function WalletModal(props) {
  const { metamaskIcon, walletconnectIcon } = useImages();

  return (
    <Wrapper
      open={props.open}
      onClose={props.onClose}
      TransitionComponent={Grow}
      maxWidth='sm'
      fullWidth>
      <Title>
        <Typography>Connect Wallet</Typography>

        <IconButton onClick={props.onClose} disableRipple>
          <CancelIcon />
        </IconButton>
      </Title>

      <Content>
        <Stack spacing={2}>
          <Typography>Choose your preferred wallet:</Typography>
          <Option>
            <Stack direction='row' alignItems='center' spacing={2}>
              <Image src={metamaskIcon} />
              <Typography>Metamask</Typography>
            </Stack>

            <ChevronRightIcon />
          </Option>

          <Option>
            <Stack direction='row' alignItems='center' spacing={2}>
              <Image src={walletconnectIcon} />
              <Typography>WalletConnect</Typography>
            </Stack>

            <ChevronRightIcon />
          </Option>
        </Stack>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled(Dialog)({
  '& .MuiBackdrop-root': {
    background: 'rgba(64, 64, 64, 0.3)',
  },

  '& .MuiPaper-root': {
    borderRadius: 16,
    boxShadow: 'none',
  },
});

const Title = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '24px 32px',
  borderBottom: '1px solid rgba(207, 216, 220, 1)',

  '& .MuiTypography-root': {
    fontSize: 24,
    fontWeight: 700,
    lineHeight: '29.98px',
    color: 'rgba(51, 51, 51, 1)',
  },
});

const Content = styled('div')({
  padding: 32,

  '& .MuiTypography-root': {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: '19.98px',
  },
});

const Option = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '12px 20px',
  border: '1px solid rgba(207, 216, 220, 1)',
  borderRadius: 12,

  '&:hover': {
    background: '#F8F9FA',
    cursor: 'pointer',
  },

  '& .MuiTypography-root': {
    fontFamily: 'Sora',
    fontSize: 18,
    fontWeight: 600,
    lineHeight: '22.68px',
    color: 'rgba(0, 0, 0, 1)',
  },
});
