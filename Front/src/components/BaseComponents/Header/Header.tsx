import { Typography } from "@mui/material";

const Header = () => {
  return (
    <>
      <Typography
        sx={{ fontSize: 50, maxWidth: "100%", textAlign: "center", py: 3 }}
        variant="h1"
      >
        Restaurant Finder
      </Typography>
    </>
  );
};

export default Header;
