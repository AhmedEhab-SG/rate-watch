import { Grid, Typography } from "@mui/material";

const AboutSection = () => {
  return (
    <Grid
      sx={{ display: "grid", gap: "2rem", margin: "0 auto 5rem" }}
      container
    >
      <Typography variant="h3">About Project</Typography>
      <Typography variant="p">
        This project is designed to provide you with up-to-date information on
        <Typography variant="caption"> Global</Typography> Currnecies and
        Gold-Silver rates by receiving it from APIs, You can stay informed about
        the latest changes in the
        <Typography variant="caption"> Global Market</Typography> which means
        that what you see in the Gold or Silver prices is{" "}
        <Typography variant="caption">Globally</Typography> not{" "}
        <Typography variant="caption">Localized</Typography> in Egypt so the
        Gold or Silver prices may differ than the actual prices in Egypt.
      </Typography>
    </Grid>
  );
};
export default AboutSection;
