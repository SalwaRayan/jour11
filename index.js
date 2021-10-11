var fs = require("fs")
const { builtinModules } = require("module")

function breakLine() {
  console.log("")
  console.log("")
}

// 01 - File System 

  // fs.readFile("jour07.txt", function (err, data) {
  //   if(err){
  //     console.error(err)
  //     return
  //   }

  //   console.log(data.toString())
  // })

  // fs.writeFile("jour07.txt", "Hello World!", function (err) {
  //   if (err) {
  //     return console.error(err)
  //   }

  //   fs.readFile("jour07.txt", function (err, data) {
  //     if (err) {
  //       console.error(err)
  //     }

  //     console.log(data.toString())

  //   })

  // })

  // fs.unlink("jour07.txt", function (err) {
  //   if (err) { 
  //     console.error(err)
  //   }
  // })

breakLine()

// 02 - Map double 

var array = [1, 2, 3, 4, 5]

var double = array.map(function(num) {
  return num * 2
})

console.log(array)
console.log(double)

breakLine()

// 03 - Map Names

var longNames = [
	{
		firstName: "Jane",
		lastName: "Doe"
	},
	{
		firstName: "John",
		lastName: "Smith"
	}
]

var shortNames = longNames.map(function(element) {
  var newObject = { name: `${element.firstName} ${element.lastName}`}
  return newObject
})

console.log(shortNames)

breakLine()

// 04 - Filter Numbers

var array = [1, "toto", 34, "javascript", 8]

var numbers = array.filter(function(num) {
  return Number(num)
})

console.log(numbers)

breakLine()

// 05 - Filter Even

var numbers = [1, 2, 3, 4, 5, 6, 7, 8]

var even = numbers.filter(function(num) {
  return num % 2 === 0
})

console.log(even)

// 06 - Cakes

var cakes = [
	{
		name: "cake",
		flavor: "vanilla",
		status: "available"
	},
	{
		name: "brownie",
		flavor: "chocolate",
		status: "available"
	},
	{
		name: "pie",
		flavor: "strawberry",
		status: "available"
	},
	{
		name: "muffin",
		flavor: "pistachio",
		status: "available"
	},
	{
		name: "donut",
		flavor: "chocolate",
		status: "available"
	},
]

var chocolateCake = cakes.filter(function(cake){
  return cake.flavor === "chocolate" 
})

console.log(chocolateCake)

var soldOut = chocolateCake.map(function (element) {
	element.status = "sold out!"
	return element
})

console.log(soldOut)

breakLine()