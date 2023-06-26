import styled from "@emotion/styled";
import {
  Box,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  tableCellClasses,
} from "@mui/material";
import { Fragment } from "react";
import { setOfSilver, silverBars } from "../../../../../scripts/images.script";
import layoutStyles from "../../../../../styles/layout-styles/main-layout.styles";
import silverRateStyles from "../../../../../styles/sections-styles/silverRateSection.styles";
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

const SilverRate = (props) => {
  const tableSilverElement = props.silverElementArr.map((silverItems) => {
    return (
      <StyledTableRow className={styles.hover} key={silverItems.text}>
        <StyledTableCell component="th" scope="row">
          <Grid sx={silverRateStyles.silverContainer}>
            <Box
              component="img"
              src={silverItems.img}
              alt="silver-img"
              sx={silverRateStyles.silverImg}
            />
            <Typography variant="body1"> {silverItems.text}</Typography>
          </Grid>
        </StyledTableCell>
        <StyledTableCell align="center">
          <Typography variant="body2"> {silverItems.buyPrice} .LE</Typography>
        </StyledTableCell>
        <StyledTableCell align="center">
          <Typography variant="body2"> {silverItems.sellPrice} .LE</Typography>
        </StyledTableCell>
      </StyledTableRow>
    );
  });

  return (
    <Fragment>
      <Grid sx={silverRateStyles.titleContainer}>
        <Box
          component="img"
          src={setOfSilver}
          alt="empty-flag"
          sx={silverRateStyles.setOfSilverImg}
        />
        <Typography variant="h3" sx={{ textAlign: "center" }}>
          Silver Prices
        </Typography>
        <Box
          component="img"
          src={silverBars}
          alt="empty-flag"
          sx={silverRateStyles.silverBarsImg}
        />
      </Grid>
      <TableContainer sx={silverRateStyles.tableContianer}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell sx={{ paddingLeft: "1.5rem" }}>
                <Typography variant="h6"> Silver Unit</Typography>
              </StyledTableCell>
              <StyledTableCell align="center">
                {" "}
                <Typography variant="h6">Buy Price</Typography>
              </StyledTableCell>
              <StyledTableCell align="center">
                {" "}
                <Typography variant="h6">Sell Price</Typography>
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>{tableSilverElement}</TableBody>
        </Table>
      </TableContainer>
    </Fragment>
  );
};
export default SilverRate;
