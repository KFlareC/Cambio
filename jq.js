class jq extends special{
    constructor(num, suit, active) {
        if(num != "jack" && num != "queen") {
            throw new error("jq is not jack or queen, MUST BE jack or queen");
        }
        super(num, suit, active);
    }
}