let my_parameter = process.argv[2];
if (my_parameter<=70) {
    console.log("You received a D")
}
else if (100>=my_parameter && my_parameter>=95) {
    console.log("You received an A+")
}  else if (94>=my_parameter && my_parameter>=90) {
    console.log("You received an A")
} else if (89>=my_parameter && my_parameter>=85) {
    console.log("You received a B+")
} else if (84>=my_parameter && my_parameter>=80) {
    console.log("You received a B")
} else if (79>=my_parameter && my_parameter>=75) {
    console.log("You received a C+")
} else if (74>=my_parameter && my_parameter>=70) {
    console.log("You received a C")
}
