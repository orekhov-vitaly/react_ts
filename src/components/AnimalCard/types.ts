import type { ReactNode } from "react";

export interface AnimalCardProps {
    animalName: string;
    animalSpecies: string;
    animalNImg: string;
    children?: ReactNode;
}
