import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import StyledBadge from './styled_badge';

const RightNav = () => {
  return (
    <div className="relative right-8">
      <Stack direction="row" spacing={3}>
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          variant="dot">
          <Avatar alt="Remy Sharp" src={require("../../assets/images/boy-cartoon-face-free-vector.jpeg")}
              className="cursor-pointer"/>
        </StyledBadge>
      </Stack>
    </div>
  )
}

export default RightNav