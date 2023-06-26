import { Box, Grid, Link, Typography } from "@mui/material";
import { github, isisLogo } from "../../scripts/images.script";
import footerStyles from "../../styles/footer-styles/Footer.styles";

const Footer = () => {
  return (
    <footer>
      <Grid sx={footerStyles.footerContainer}>
        <Grid sx={footerStyles.footerGrid}>
          <Typography variant="caption" sx={footerStyles.textDicrostions}>
            API PROVIDERS
          </Typography>
          <Link
            target="_blank"
            href="https://currencyfreaks.com/"
            variant="subtitle1"
            sx={footerStyles.linkStyles}
          >
            currencyfreaks.com
          </Link>
          <Link
            target="_blank"
            href="https://www.freegoldprice.org/"
            variant="subtitle1"
            sx={footerStyles.linkStyles}
          >
            freegoldprice.org
          </Link>
        </Grid>
        <Grid sx={footerStyles.footerMidGrid}>
          <Box
            component="img"
            src={isisLogo}
            alt="isis-Logo"
            sx={footerStyles.logo}
          />
          <Link
            variant="subtitle1"
            target="_blank"
            href="https://github.com/AhmedEhab-SG/"
            sx={footerStyles.linkNotI}
          >
            Designed & Built by Ahmed Ehab
          </Link>
        </Grid>
        <Grid sx={footerStyles.footerMidGrid}>
          {" "}
          <Link
            target="_blank"
            href="https://github.com/AhmedEhab-SG/isis-rates"
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              gap: "1rem",
            }}
          >
            <Typography variant="caption" sx={footerStyles.linkUnderline}>
              {" "}
              Interested Feel Free
            </Typography>
            <Box
              component="img"
              src={github}
              alt="github"
              sx={footerStyles.githubImg}
            />
          </Link>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
