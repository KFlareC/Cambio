class sevenEight extends special{
    constructor(num, suit, active) {
        if(num != "seven" && num != "eight") {
            throw new error("sevenEight is not 7 or 8, MUST BE 7 or 8");
        }
        super(num, suit, active);
    }
}