import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import StyledBadge from "./styled_badge";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
const RightNav = () => {
  return (
    <div className="relative right-8 flex flex-row-reverse">
      <Stack direction="row" spacing={3}>
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          variant="dot"
        >
          <Avatar
            alt="Remy Sharp"
            src={require("../../assets/images/boy-cartoon-face-free-vector.jpeg")}
            className="cursor-pointer"
          />
        </StyledBadge>
      </Stack>
      <svg width="24" height="24" class="icon_svg">
        <path d="M22.64 17.23A7.31 7.31 0 0120 11.59V9A8 8 0 004 9v2.59a7.31 7.31 0 01-2.64 5.64A1 1 0 002 19h6a4 4 0 008 0h6a1 1 0 00.64-1.77zM6 9a6 6 0 0112 0v2.59c.001.472.038.943.11 1.41H5.89A9.36 9.36 0 006 11.59V9zm6 12a2 2 0 01-2-2h4a2 2 0 01-2 2zm-7.72-4a9.42 9.42 0 001.08-2h13.28a9.42 9.42 0 001.08 2H4.28z"></path>
      </svg>
    </div>
  );
};

export default RightNav;
