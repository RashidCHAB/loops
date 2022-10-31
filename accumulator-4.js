let array = ["Мансур", "Раяна", "Мохьмад", "Лиана", "Аржан", "Хадижа", "Седа", "Алима", "Ибрагим", "Майрбек"]
let accumulator = []
for (i = 0; i < array.length; i++) {
if (array[i][0] === "А") accumulator.push(array[i])
}
console.log(accumulator)