// const data = require("./data");

// console.log(data.juniorClass[1].score.science);

// const multiplying = (a, b) => {
//   console.log(a)
//   console.log(b)
// }

// let number = 15
// multiplying(number, 10)

// function mean(dataScore) {
//   let totalScore = 0;

//   for (let i = 0; i < dataScore.length; i++) {
//     totalScore +=
//       dataScore[i].score.science +
//       dataScore[i].score.social +
//       dataScore[i].score.math;
//   }

//   return totalScore / dataScore.length;
// }

// console.log(mean(data.middleClass))

// const arr = [224, 238, 239, 300, 261, 120];
const arr = [
  {
    name: "A",
    score: 238,
  },
  {
    name: "B",
    score: 224,
  },
  {
    name: "C",
    score: 300,
  },
  {
    name: "D",
    score: 261,
  },
  {
    name: "E",
    score: 120,
  },
];

let maxNum = 0;

for (let i = 0; i < arr.length; i++) {
  console.log("saat ini :");
  console.log(arr[i].name, arr[i].score);

  if (arr[i].score > maxNum) {
    console.log(`Angka lebih besar dari ${maxNum}`);
    maxNum = arr[i].score;
    console.log("");
  } else {
    console.log(`Angka lebih kecil dari ${maxNum}`);
    console.log("");
  }
}

console.log(maxNum); // 300

