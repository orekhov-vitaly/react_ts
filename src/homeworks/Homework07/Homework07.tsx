import "./styles.css";
import {animalsData} from "./data";
import AnimalCard from "components/AnimalCard/AnimalCard";

function Homework07() {
    const animalCards = animalsData.map((animal) => {
        return(
            <AnimalCard
                animalName={animal.name}
                animalSpecies={animal.species}
                animalNImg={animal.image}
            />
        )
    });
    return(
        <div className="homework07-wrapper">
            {animalCards}
        </div>
    )
}

export default Homework07;