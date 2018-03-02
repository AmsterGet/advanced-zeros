module.exports = function getZerosCount(number, base) {
    const resultsArray = calculateZeroes(number, base);

    let tailingZeroesCount = resultsArray[0];
    resultsArray.forEach((item) => {
        if (item<tailingZeroesCount) {
            tailingZeroesCount = item;
        }
    });
    return tailingZeroesCount;
};

const getBasePowers = function getBasePrimePowers(baseNumber) {
    let j = 1;
    let i = 2;
    let basePrimePowersArray = [];
    while (i < baseNumber) {
        if (baseNumber % i === 0) {
            basePrimePowersArray[j] = i;
            j++;
            baseNumber = baseNumber / i;
        }
        else {
            i++;
        }
    }
    basePrimePowersArray[j] = i;

    const basePrimePowers = {};
    basePrimePowersArray.forEach((item) => {
        if (!basePrimePowers[item]) {
            basePrimePowers[item] = 1;
        } else {
            basePrimePowers[item]++;
        }
    });

    return basePrimePowers;
};

const calculateZeroes = function calculateZeroesForAllPrimePowers(number, base) {
    const basePrimePowers = getBasePowers(base);
    let iterationNumber = number;
    let rezArray = [];

    for (let item in basePrimePowers) {
        let itemSum = 0;
        let itemAccumulator = +item;
        while (itemAccumulator<=iterationNumber) {
            itemSum+=Math.floor(iterationNumber/itemAccumulator);
            itemAccumulator*=+item;
        }
        itemSum = Math.floor(itemSum/basePrimePowers[item]);
        rezArray.push(itemSum);
    }
    return rezArray;
};