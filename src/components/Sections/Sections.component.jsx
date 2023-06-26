import { Box } from "@mui/material";
import { sectionWidthHeight } from "../../scripts/layout.script";
import sectionIdEnum from "../../scripts/section-id.script";
import {
  CurrSectionsApi,
  GoldSilverSectionsApi,
  HeroSection,
  AboutSection,
} from "../../scripts/section.script";

const Sections = () => {
  const sections = [
    {
      sectionId: sectionIdEnum.hero,
      width: sectionWidthHeight[0].hero,
      overFlow: sectionWidthHeight[1].hero,
      component: <HeroSection />,
    },
    {
      sectionId: "CurrSectionApi",
      component: <CurrSectionsApi />,
    },
    {
      sectionId: "GoldSilverApi",
      component: <GoldSilverSectionsApi />,
    },
    {
      sectionId: sectionIdEnum.about,
      width: sectionWidthHeight[0].about,
      overFlow: sectionWidthHeight[1].about,
      component: <AboutSection />,
    },
  ];

  const section = sections.map((element) => {
    return (
      <Box
        width={element.width}
        height={element.height}
        id={element.sectionId}
        overflow={element.overFlow}
        key={element.sectionId}
        margin="0 auto 0"
      >
        {element.component}
      </Box>
    );
  });
  return <main>{section}</main>;
};

export default Sections;
