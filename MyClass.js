var Decimal = require('decimal.js');


class Money {
    constructor(value) {
        this.value = new Decimal(value);
    }
    plus(value) {
        this.value = this.value.plus(value);
        return this;
    }

    minus(value) {
        this.value = this.value.minus(value);
        return this;
    }

    divided(value) {
        this.value = this.value.dividedBy(value);
        return this;
    }

    times(value) {
        this.value = this.value.times(value);
        return this;
    }
    toFixString(value) {
        this.value = this.value.toFixed(value);
        return this.value;
    }
}



module.exports = Money;


