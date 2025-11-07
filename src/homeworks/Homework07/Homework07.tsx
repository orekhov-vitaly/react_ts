import { v4 } from "uuid";
import type { JSX } from "react";

import "./styles.css";
import {animalsData} from "./data";
import AnimalCard from "components/AnimalCard/AnimalCard";
import type { Animal } from "./types";

function Homework07() {
    const animalCards: JSX.Element[] = animalsData.map((animal: Animal) => {
        return(
            <AnimalCard
                key = {v4()}
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