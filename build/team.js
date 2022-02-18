"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Team = void 0;
class Team {
    constructor(name) {
        this.name = name;
        this.players = [];
    }
    addPlayer(player) {
        return this.players.push(player);
    }
    findByNumber(srtNumber) {
        return this.players.find(item => item.getsrtNumber() === srtNumber);
    }
}
exports.Team = Team;
