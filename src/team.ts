import { Player } from "./player";

export class Team {
    players: Player[]=[];
    constructor(private name: string){}

    addPlayer(player: Player){
        return this.players.push(player);
    }

    findByNumber(srtNumber: number){
        return this.players.find(item=>item.getsrtNumber() === srtNumber);
    }
}