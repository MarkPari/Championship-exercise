"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
class Player {
    constructor(name, surname, srtNumber) {
        this.name = name;
        this.surname = surname;
        this.srtNumber = srtNumber;
    }
    getsrtNumber() {
        return this.srtNumber;
    }
}
exports.Player = Player;
