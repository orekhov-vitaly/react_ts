import "./styles.css";
import type { AnimalCardProps } from "./types";

function AnimalCard({
    animalName,
    animalSpecies,
    animalNImg,
    children,
}: AnimalCardProps) {
    return (
        <div className="animal-card-wrapper">
            <h3>{animalName}</h3>
            <div>{animalSpecies}</div>
            <img src={animalNImg} alt="" />
            {children}
        </div>
    );
}

export default AnimalCard;
