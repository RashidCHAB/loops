let array = ['JavaScript', 'EcmaScript', 'Java', 'TypeScript', 'C', 'php', "C++", "C#", "Python", "Kotlin"]
let accumulator = []
let i = 0
while (i < array.length) {
    if (array[i].length > 3) accumulator.push(array[i])
    i++
}
console.log(accumulator)