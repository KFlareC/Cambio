class k extends special{
    constructor(num, suit, active) {
        if(num != "king") {
            throw new error("k is not king, MUST BE king");
        }
        super(num, suit, active);
    }
}