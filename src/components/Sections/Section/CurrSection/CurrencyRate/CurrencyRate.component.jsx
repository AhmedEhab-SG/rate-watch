import {
  Grid,
  Box,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  tableCellClasses,
  styled,
  Button,
  Typography,
} from "@mui/material";
import { Fragment, useState } from "react";
import {
  egyptionCoin,
  egyptionLargeStack,
} from "../../../../../scripts/images.script";
import layoutStyles from "../../../../../styles/layout-styles/main-layout.styles";
import currStyles from "../../../../../styles/sections-styles/currSections.styles";
import styles from "../../../../../styles/styles.module.css";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    background: layoutStyles.paperTable,
    color: theme.palette.common.white,
    fontSize: 20,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

//map over curreny

const CurrencyRate = (props) => {
  const [isShown, setIsShown] = useState(false);
  const showToggleHandler = () => {
    setIsShown((pevState) => !pevState);
  };

  const tableElement = props.onCurrArr.map((currenyItems) => {
    return (
      <StyledTableRow className={styles.hover} key={currenyItems.country}>
        <StyledTableCell component="th" scope="row">
          <Grid sx={currStyles.currContianer}>
            <Box
              component="img"
              src={currenyItems.img}
              alt="country-img"
              sx={currStyles.countryFlags}
            />
            <Typography variant="body1">{currenyItems.country}</Typography>
          </Grid>
        </StyledTableCell>

        <StyledTableCell align="center">
          <Typography variant="body2">
            {currenyItems.currencyToEgp} .LE
          </Typography>
        </StyledTableCell>
      </StyledTableRow>
    );
  });

  const showTableElement = tableElement.slice(0, 12);
  const hideTableElement = tableElement.slice(12);

  return (
    <Fragment>
      <Grid sx={currStyles.titleContainer}>
        <Box
          component="img"
          src={egyptionLargeStack}
          alt="empty-flag"
          sx={currStyles.titleImgFlag}
        />
        <Typography variant="h3" sx={{ textAlign: "center" }}>
          Currencies Rate
        </Typography>
        <Box
          component="img"
          src={egyptionCoin}
          alt="empty-flag"
          sx={currStyles.titleImgCoin}
        />
      </Grid>
      <TableContainer sx={currStyles.tableContainer}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell sx={{ paddingLeft: "1.5rem" }}>
                <Typography variant="h6">Foreign Currency</Typography>
              </StyledTableCell>
              <StyledTableCell align="center">
                <Typography variant="h6">Current Rate</Typography>
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {showTableElement}
            {isShown && hideTableElement}
          </TableBody>
        </Table>
      </TableContainer>
      <Button
        onClick={showToggleHandler}
        variant="outlined"
        color="inherit"
        sx={currStyles.tableBtn}
      >
        {isShown ? "Hide" : "Show More"}
      </Button>
    </Fragment>
  );
};

export default CurrencyRate;
