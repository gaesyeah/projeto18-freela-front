import { StyledMyModelCard } from "../../../style/MenuPageBody";

export const MyModelCard = ({ model }) => {
  return (
    <StyledMyModelCard>
      <h2>{model.title}</h2>
    </StyledMyModelCard>
  );
}