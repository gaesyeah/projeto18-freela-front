import { StyledMyModelsCard } from "../../../style/MenuPageBody";
import { MyModelCard } from "./MyModel";

export const MyModelsCard = ({ breed: { breedName, models }, setMyModels }) => {
  return (
    <StyledMyModelsCard>
      <p>{breedName}s</p>
      {models.map(model => <MyModelCard setMyModels={setMyModels} model={model} key={model.id}></MyModelCard>)}
    </StyledMyModelsCard>
  );
}