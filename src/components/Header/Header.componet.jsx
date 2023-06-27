import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  Box,
  Fade,
  Fab,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { isisLogo } from "../../scripts/images.script";
import NavBtn from "./NavBtn.component";
import headerStyles from "../../styles/header-styles/header.styles";

function ScrollTop(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#hero"
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
      });
    }
  };
  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={headerStyles.scrollUpPosition}
      >
        {children}
      </Box>
    </Fade>
  );
}
const btnHannder = () => {
  document.querySelector("#hero").scrollIntoView({ behavior: "smooth" });
};
const Header = (props) => {
  return (
    <header>
      <AppBar sx={headerStyles.headerAppbar} elevation={0}>
        <Toolbar>
          <Grid container sx={headerStyles.container}>
            <Link onClick={btnHannder} sx={headerStyles.linkLogo}>
              <Box
                sx={headerStyles.logo}
                component="img"
                src={isisLogo}
                alt="isis-logo"
              />
              <Typography variant="h6" sx={headerStyles.logoHover}>
                RateWatch
              </Typography>
            </Link>
            <NavBtn />
          </Grid>
        </Toolbar>
      </AppBar>
      <ScrollTop {...props}>
        <Fab
          size="small"
          sx={headerStyles.scrollUp}
          aria-label="scroll back to top"
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </header>
  );
};

export default Header;
