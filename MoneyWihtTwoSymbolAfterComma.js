/**
 * @param {string} toFixString - Метод приводит к строке и округляет до 2 знаков после запятой.
 */

let Money = require('./MyClass');
class WihtTwoSymbolAfterComma extends Money {

    toFixString() {
        return super.toFixString(2);
    }
}
module.exports = WihtTwoSymbolAfterComma;