## Пример использования
```
let y = 200;
let x = new MoneyWithThreeSymbolAfterComma(y);
y = x.divided(3.4).plus(566.44).times(23).minus(79.521).value;
y = x.toFixString();
```