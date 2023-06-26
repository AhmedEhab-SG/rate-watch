import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  Grid,
  styled,
  TableCell,
  tableCellClasses,
  TableBody,
  Box,
  Typography,
} from "@mui/material";
import { Fragment } from "react";
import {
  setOfGold,
  gobloSilverBars,
  goldBars,
} from "../../../../../scripts/images.script";
import layoutStyles from "../../../../../styles/layout-styles/main-layout.styles";
import goldRateStyles from "../../../../../styles/sections-styles/goldRateSection.styles";
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

const GoldRate = (props) => {
  const tableGoldElement = props.goldElementArr.map((goldItems) => {
    return (
      <StyledTableRow className={styles.hover} key={goldItems.text}>
        <StyledTableCell component="th" scope="row">
          <Grid sx={goldRateStyles.goldContainer}>
            <Box
              component="img"
              src={goldItems.img}
              alt="gold-img"
              sx={goldRateStyles.goldImg}
            />
            <Typography variant="body1">{goldItems.text}</Typography>
          </Grid>
        </StyledTableCell>

        <StyledTableCell align="center">
          <Typography variant="body2"> {goldItems.buyPrice} .LE</Typography>
        </StyledTableCell>
        <StyledTableCell align="center">
          <Typography variant="body2">{goldItems.sellPrice} .LE </Typography>
        </StyledTableCell>
      </StyledTableRow>
    );
  });

  return (
    <Fragment>
      <Grid sx={goldRateStyles.updateContainer}>
        <Box
          component="img"
          src={gobloSilverBars}
          alt="gold-silver-bars"
          sx={goldRateStyles.goldSilverImg}
        />
        <Typography variant="h5" sx={{ textAlign: "center" }}>
          <i> Gold & Sliver Lastest Update: {props.onLastUpdate}</i>
        </Typography>
      </Grid>
      <Grid sx={goldRateStyles.titleConttainer}>
        <Box
          component="img"
          src={setOfGold}
          alt="set-of-gold"
          sx={goldRateStyles.setOfGoldImg}
        />
        <Typography variant="h3" sx={{ textAlign: "center" }}>
          Gold Prices
        </Typography>
        <Box
          component="img"
          src={goldBars}
          alt="empty-flag"
          sx={goldRateStyles.goldBarsImg}
        />
      </Grid>
      <TableContainer sx={goldRateStyles.tableContainer}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell sx={{ paddingLeft: "1.5rem" }}>
                <Typography variant="h6">Gold Unit </Typography>
              </StyledTableCell>
              <StyledTableCell align="center">
                <Typography variant="h6">Buy Price</Typography>
              </StyledTableCell>
              <StyledTableCell align="center">
                <Typography variant="h6">Sell Price</Typography>
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>{tableGoldElement}</TableBody>
        </Table>
      </TableContainer>
    </Fragment>
  );
};
export default GoldRate;
