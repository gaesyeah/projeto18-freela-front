import { StyledMyModelsCard } from "../../../style/MenuPageBody";
import { MyModelCard } from "./MyModel";

export const MyModelsCard = ({ breed: { breedName, models } }) => {
  return (
    <StyledMyModelsCard>
      <p>{breedName}s</p>
      {models.map(model => <MyModelCard model={model} key={model.id}></MyModelCard>)}
    </StyledMyModelsCard>
  );
}