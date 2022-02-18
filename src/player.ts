export class Player {
    constructor(private name: string, private surname: string, private srtNumber: number){}

    getsrtNumber(){
        return this.srtNumber;
    }
}