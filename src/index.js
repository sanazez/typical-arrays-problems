exports.min = function min(array) {
    if (arguments[0] && array.length > 1) {
        let minNum = array[0];
        for (let i = 1; i < array.length; i++) {
            if (minNum > array[i]) {
                minNum = array[i];
            }
        }

        return minNum;
    } else return 0;
}

exports.max = function max(array) {
    if (arguments[0] && array.length > 1) {
        let minNum = array[0];
        for (let i = 1; i < array.length; i++) {
            if (minNum < array[i]) {
                minNum = array[i];
            }
        }
        return minNum;
    } else return 0;

}

exports.avg = function avg(array) {
    if (arguments[0] && array.length > 1) {
        let total = 0;
        for (let i = 0; i < array.length; i++) {
            total += array[i];
        }
        return total / array.length;
    } else return 0;
};