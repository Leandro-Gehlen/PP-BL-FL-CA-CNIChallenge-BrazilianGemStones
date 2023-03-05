import { Stone } from "../../entities";

export interface DeleteStone {
    deleteStone(stone: Stone): boolean
}