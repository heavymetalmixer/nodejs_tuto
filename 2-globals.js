// GLOBALS - NO WINDOW
// __dirname    - Path to the current directory
// __filename   - The file's name
// require      - Function to use modules in CommonJS syntax (CJS)
// module       - Info about the current module (file)
// process      - Info about env where the program is being executed

console.log(__dirname);
console.log(__filename);

setInterval(() => {
  console.log("Hello World!");
}, 1000);
