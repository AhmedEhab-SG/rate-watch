import { Container } from "@mui/system";

export const SectionContainer = (props) => {
  return (
    <Container
      key={props.sectionId}
      id={props.sectionId}
      sx={{
        minWidth: props.width,
        minHeight: props.height,
        overflow: props.overFlow,
        paddingRight:"0.8rem",
        paddingLeft:"0.8rem"
      }}
    >
      {props.children}
    </Container>
  );
};

export default SectionContainer;
