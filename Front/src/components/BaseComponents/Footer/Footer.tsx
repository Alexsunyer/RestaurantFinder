import { Box, Container, Link, Typography } from "@mui/material";

interface FooterProps extends FooterLogicProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <Box
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        p: 3,
        position: "fixed",
        bottom: 0,
        width: "100%",
        height: "20px",
        display: "flex",
        alignItems: "center",
      }}
      component="footer"
    >
      <Container maxWidth="sm">
        <Typography variant="body2" color="text.secondary" align="center">
          {"Copyright © "}
          <Link color="inherit" href="https://your-website.com/">
            Restaurant Finder
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Container>
    </Box>
  );
};

interface FooterLogicProps {}

export default Footer;
