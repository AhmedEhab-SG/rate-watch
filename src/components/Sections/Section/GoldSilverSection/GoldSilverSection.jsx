import { GoldRate, SilverRate } from "../../../../scripts/section.script";
import { sectionWidthHeight } from "../../../../scripts/layout.script";

import { sectionIdEnum } from "../../../../scripts/section-id.script";
import { Fragment } from "react";
import SectionContainer from "../../SectionContianer/SectionContainer.component";

const GoldSilverSection = (props) => {
  const GoldSilverArr = [
    {
      sectionId: sectionIdEnum.goldRate,
      width: sectionWidthHeight[0].goldRate,
      overFlow: sectionWidthHeight[1].goldRate,
      component: (
        <GoldRate
          goldElementArr={props.onGold}
          onLastUpdate={props.onCurrUpdate}
        />
      ),
    },
    {
      sectionId: sectionIdEnum.silverRate,
      width: sectionWidthHeight[0].silverRate,
      overFlow: sectionWidthHeight[1].silverRate,
      component: <SilverRate silverElementArr={props.onSilver} />,
    },
  ];
  const goldSilverSection = GoldSilverArr.map((element) => {
    return (
      <SectionContainer
        width={element.width}
        height={element.height}
        sectionId={element.sectionId}
        overFlow={element.overFlow}
        key={element.sectionId}
      >
        {element.component}
      </SectionContainer>
    );
  });
  return <Fragment>{goldSilverSection}</Fragment>;
};
export default GoldSilverSection;
