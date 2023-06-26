import { MostTrade, CurrencyRate } from "../../../../scripts/section.script";
import SectionContainer from "../../SectionContianer/SectionContainer.component";
import { sectionWidthHeight } from "../../../../scripts/layout.script";
import sectionIdEnum from "../../../../scripts/section-id.script";
import { Fragment } from "react";

const CurrSection = (props) => {
  const CurrSectionsArr = [
    {
      sectionId: sectionIdEnum.mostTrade,
      width: sectionWidthHeight[0].mostTrade,
      overFlow: sectionWidthHeight[1].mostTrade,
      component: (
        <MostTrade
          onCurrArr={props.onCurrArr}
          onCurrUpdate={props.onCurrUpdate}
        />
      ),
    },
    {
      sectionId: sectionIdEnum.currencyRate,
      width: sectionWidthHeight[0].currencryRate,
      overFlow: sectionWidthHeight[1].currencryRate,
      component: (
        <CurrencyRate
          onCurrArr={props.onCurrArr}
          onCurrUpdate={props.onCurrUpdate}
        />
      ),
    },
  ];
  const currsection = CurrSectionsArr.map((element) => {
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
  return <Fragment>{currsection}</Fragment>;
};

export default CurrSection;
