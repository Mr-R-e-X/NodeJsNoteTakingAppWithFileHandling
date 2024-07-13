// Please don't change the pre-written code
// Import the necessary modules here
let fs = require("fs");
const Solution = () => {
  // Write your code here
  fs.writeFileSync("notes.txt", "The world has enough coders \n");
  let data = fs.readFileSync("notes.txt", { encoding: "utf8" });
  console.log(data);
  try {
    fs.appendFileSync("notes.txt", "BE A  CODING NINJA!");
    let updatedData = fs.readFileSync("notes.txt", "utf8");
    console.log(updatedData);
  } catch (error) {
    console.log(error);
  }
};
Solution();
module.exports = Solution;
