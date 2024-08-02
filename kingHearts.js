class kingHearts extends k {
    constructor(num, suit, active) {
        if(suit != "hearts") throw new error("kingHearts needs to be hearts!!!");
        super(num, suit, active);
    }
}