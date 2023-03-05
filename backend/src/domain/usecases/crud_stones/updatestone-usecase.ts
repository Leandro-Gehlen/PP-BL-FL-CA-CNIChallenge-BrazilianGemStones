import { Stone } from "../../entities";

export interface UpdateStone {
    updateStone(newStone: Stone): Stone
}