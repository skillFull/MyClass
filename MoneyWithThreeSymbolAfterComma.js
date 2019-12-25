/**
 * @param {string} toFixString - Метод приводит к строке и округляет до 3 знаков после запятой.
 */

let Money = require('./MyClass');
class MoneyWithThreeSymbolAfterComma extends Money {

    toFixString() {
        return super.toFixString(3);
    }
}

module.exports = MoneyWithThreeSymbolAfterComma;