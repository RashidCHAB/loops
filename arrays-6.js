let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
for (i = 0; i < array.length; i ++) {
    if (array[i] % 2 === 0 && array[i] !== 0) console.log(array[i])
}
let b = 0 
while (b < array.length) {
    if (array[b] % 2 !== 0 && array[b] !== 0) console.log(array[b])
    b++
}