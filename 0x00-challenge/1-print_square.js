#!/usr/bin/node

/*
print a square with the character #
the size of the square must be the first argument of the script
*/
if (process.argv.length <= 2) {
    process.stderr.write("Missing argument\n");
    process.stderr.write("Usage: ./1-print_square.js <size>\n");
    process.stderr.write("Example: ./1-print_square.js 8\n");
    process.exit(1);
}
let size = parseInt(process.argv[2], 10); // Assuming you want a decimal input

if (isNaN(size)) {
    process.stderr.write("The size must be a number\n");
    process.exit(1);
}

for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
        process.stdout.write('#');
    }
    process.stdout.write('\n');
}
