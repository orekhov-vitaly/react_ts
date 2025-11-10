import type { AnimalCardProps } from "./types";
import { AnimalCardWrapper, AnimalImg, Title, AnimalSpecies } from "./styles";

function AnimalCard({
    animalName,
    animalSpecies,
    animalNImg,
    children,
}: AnimalCardProps) {
    return (
        <AnimalCardWrapper>
            <Title>{animalName}</Title>
            <AnimalSpecies>{animalSpecies}</AnimalSpecies>
            <AnimalImg src={animalNImg} />
            {children}
        </AnimalCardWrapper>
    );
}

export default AnimalCard;
