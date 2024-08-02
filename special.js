class special extends card {
    constructor(num, suit, active){
        super(num, suit);
        this.active = active;
    }
    getActive() {
        return this.active;
    }
    setActive(newActive) {
        this.active = newActive;
    }
}