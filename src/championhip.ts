import { Team } from "./team";
import { Player } from "./player";

export class Championhip{
    teams: Team[]=[];
    constructor(private name: string){}

    addTeam(team: Team){
        return this.teams.push(team);
    }

    getAllPlayerByNumber(srtNumber: number){
        //return this.teams.reduce((acc,item)=>acc=acc+""+item.players.map(item=>item), {});
        return this.teams.reduce((players, team) => {
            let foundPlayer = team.findByNumber(srtNumber);
            //if(foundPlayer) players.push(foundPlayer);
            //foundPlayer ?  players.push(foundPlayer) : '';
            foundPlayer && players.push(foundPlayer);
            return players;
        }, [] as Player[]);
    }
}

