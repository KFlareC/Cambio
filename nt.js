class nt extends special{
    constructor(num, suit, active) {
        if(num != "nine" && num != "ten") {
            throw new error("nt is not 9 or 10, MUST BE 9 or 10");
        }
        super(num, suit, active);
    }
}