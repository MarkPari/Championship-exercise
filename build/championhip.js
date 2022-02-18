"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Championhip = void 0;
class Championhip {
    constructor(name) {
        this.name = name;
        this.teams = [];
    }
    addTeam(team) {
        return this.teams.push(team);
    }
    getAllPlayerByNumber(srtNumber) {
        //return this.teams.reduce((acc,item)=>acc=acc+""+item.players.map(item=>item), {});
        return this.teams.reduce((players, team) => {
            let foundPlayer = team.findByNumber(srtNumber);
            //if(foundPlayer) players.push(foundPlayer);
            //foundPlayer ?  players.push(foundPlayer) : '';
            foundPlayer && players.push(foundPlayer);
            return players;
        }, []);
    }
}
exports.Championhip = Championhip;
