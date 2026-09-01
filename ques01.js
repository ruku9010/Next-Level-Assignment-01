//Question No. 1

function describeValue(value) {
    return `${typeof value} | ${!value === false || 0 || -0 || 0n || "" || null || undefined || NaN && value.length === 0 ? "truthy" : "falsy"}`
}

console.log(describeValue("hello"))
console.log(describeValue(""))
console.log(describeValue(25))
console.log(describeValue(0))
console.log(describeValue(true))
console.log(describeValue(null))
console.log(describeValue(undefined))
console.log(describeValue("0"))
console.log(describeValue(NaN))