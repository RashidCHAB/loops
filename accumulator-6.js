let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
let accumulatorOdd = []
for (i = 0; i < array.length; i++) {
    if (array[i] % 2 && array[i] !== 0) accumulatorOdd.push(array[i])
}
console.log(accumulatorOdd);