import { Player } from "./player";
import { Team } from "./team";
import { Championhip } from "./championhip";

const championship = new Championhip("Serie A");
const team1 = new Team("Juve");
const team2 = new Team("Roma");
const team3 = new Team("Man Utd");

championship.addTeam(team1);
championship.addTeam(team2);
championship.addTeam(team3);

const p1 = new Player("Mario", "Balotelli", 9);
const p2 = new Player("Francesco", "Totti", 10);
const p3 = new Player("Alex", "Del Piero", 10);
const p4 = new Player("Cristiano", "Ronaldo", 7);
const p5= new Player("Mauro German", "Camoranesi", 7);

team1.addPlayer(p3);
team1.addPlayer(p5);
team2.addPlayer(p2);
team3.addPlayer(p4);
team3.addPlayer(p1);

console.log(championship.getAllPlayerByNumber(10));
