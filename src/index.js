module.exports = function makeExchange(currency) {
    const result = {};
    const moneyEquals = {
        50: 'H',
        25: 'Q',
        10: 'D',
        5: 'N',
        1: 'P'
    };
    const usedMoney   = [50, 25, 10, 5, 1];

    function writeInObj(elem, obj, increase) {
        obj[moneyEquals[elem]] = increase;
    }

    if (currency > 10000) {
        result.error = "You are rich, my friend! We don't have so much coins for exchange";
    } else if (currency > 0) {
        usedMoney.forEach((element) => {
            if (currency / element >= 1) {
                writeInObj(element, result, Math.floor(currency / element));
                currency = currency % element;
            }
            else if (currency / element < 1
                    && currency / element >= 0)
            {
                return
            }
        });
    }
    return result;
};