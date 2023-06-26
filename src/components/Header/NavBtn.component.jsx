import {
  Button,
  Drawer,
  Grid,
  IconButton,
  Stack,
  useMediaQuery,
  Toolbar,
  AppBar,
} from "@mui/material";
import sectionIdEnum from "../../scripts/section-id.script";
import { useTheme } from "@emotion/react";
import { Fragment, useState } from "react";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { navStyles } from "../../styles/header-styles/header.styles";

const navBtnArr = [
  {
    text: "Currency",
    id: sectionIdEnum.mostTrade,
  },
  {
    text: "Gold",
    id: sectionIdEnum.goldRate,
  },
  {
    text: "Silver",
    id: sectionIdEnum.silverRate,
  },
  {
    text: "About",
    id: sectionIdEnum.about,
  },
];

const NavBtn = () => {
  const theme = useTheme();
  const isSamll = useMediaQuery(theme.breakpoints.down("md"));
  const [navDrawer, setNavDrawer] = useState(false);

  const navDrawerTouggle = () => {
    setNavDrawer((prevNabDrawer) => !prevNabDrawer);
  };

  const navBtnElement = navBtnArr.map((navItems) => {
    return (
      <Button
        key={navItems.id}
        variant="text"
        sx={navStyles.buttons}
        onClick={() => {
          setTimeout(() => {
            document
              .querySelector(`#${navItems.id}`)
              .scrollIntoView({ behavior: "smooth" });
          }, 3);
          navDrawerTouggle();
        }}
      >
        {navItems.text}
      </Button>
    );
  });

  return (
    <Fragment>
      {!isSamll ? (
        <Grid sx={navStyles.stack}>{navBtnElement}</Grid>
      ) : (
        <Fragment>
          <IconButton sx={navStyles.buttons} onClick={navDrawerTouggle}>
            <MenuOpenIcon />
          </IconButton>
          <Drawer
            anchor="right"
            open={navDrawer}
            onClose={navDrawerTouggle}
            onOpen={navDrawerTouggle}
            variant="temporary"
            PaperProps={navStyles.paperDrwaer}
          >
            <AppBar
              position="static"
              elevation={0}
              sx={{
                background: "none",
              }}
            >
              <Toolbar sx={{ marginBottom: "2rem" }}>
                <ChevronRightIcon
                  sx={navStyles.buttons}
                  onClick={navDrawerTouggle}
                />
              </Toolbar>
            </AppBar>
            <Stack sx={navDrawer.smallStack}>{navBtnElement}</Stack>
          </Drawer>
        </Fragment>
      )}
    </Fragment>
  );
};

export default NavBtn;
