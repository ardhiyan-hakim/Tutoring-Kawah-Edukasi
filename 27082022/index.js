// Pembahasan Live Code III
const data = require('./data');

// Case I: (nilai siswa adalah total dari semua nilai yang ada)
// Buat function untuk menghitung rata-rata total nilai dari tiap kelas!
// re-usable
function mean(dataScore) {
  let totalScore = 0;

  for (let i = 0; i < dataScore.length; i++) {
    totalScore +=
      dataScore[i].score.science +
      dataScore[i].score.social +
      dataScore[i].score.math;
  }

  return totalScore / dataScore.length;
}

// Kelas mana yang memiliki nilai rata-rata total nilai paling tinggi? // String
function getHighestMean(dataScore) {
  juniorClassMean = mean(dataScore.juniorClass);
  middleClassMean = mean(dataScore.middleClass);
  seniorClassMean = mean(dataScore.seniorClass);
  masterClassMean = mean(dataScore.masterClass);

  // LOOPING
  // const meanScore = [
  //   juniorClassMean,
  //   middleClassMean,
  //   seniorClassMean,
  //   masterClassMean,
  // ];

  // let highestMean = 0; // Mendeteksi rata rata terbesar
  // let index = -1; // Mendeteksi pemilik rata rata tersebut

  // for (let i = 0; i < meanScore.length; i++) {
  //   if (meanScore[i] > highestMean) {
  //     highestMean = meanScore[i];
  //     index = i;
  //   }
  // }

  // switch (index) {
  //   case 0:
  //     return 'Junior Class';
  //   case 1:
  //     return 'Middle Class';
  //   case 2:
  //     return 'Senior Class';
  //   case 3:
  //     return 'Master Class';
  // }

  // CONDITIONAL
  if (
    middleClassMean > juniorClassMean &&
    middleClassMean > seniorClassMean &&
    middleClassMean > masterClassMean
  ) {
    return 'Middle Class';
  }

  if (
    seniorClassMean > juniorClassMean &&
    seniorClassMean > middleClassMean &&
    seniorClassMean > masterClassMean
  ) {
    return 'Senior Class';
  }

  if (
    masterClassMean > juniorClassMean &&
    masterClassMean > middleClassMean &&
    masterClassMean > seniorClassMean
  ) {
    return 'Master Class';
  }

  return 'Junior Class';
}

console.log(getHighestMean(data));

// Case II: (juara umum adalah juara dari keseluruhan siswa)
// Buat function untuk mencari juara umum I, II, dan III!
function getWinner(dataScore) {
  console.log(dataScore);
  let winner1 = 0;
  let winner2 = 0;
  let winner3 = 0;

  // winner1 = Mukti
  // nilai adam > nilai Mukti
  // adam = winner 1
  // mukti = winner 2
  // nilai dewi > nilai adam
  // dewi = winner 1
  // adam = winner 2
  // mukti = winner 3

  for (let i = 0; i < dataScore.length; i++) {
    const totalScore =
      dataScore[i].score.science +
      dataScore[i].score.social +
      dataScore[i].score.math;

    // Cek jika total Score > Nilai Winner 1

  // winner1, winner2, winner3 = 0
  // 240 > winner1 (0), benar 
  // 240 !== 0, benar
  // winner1 = totalScore (240)
  // winner2 = winner1 (0)
  // winner3 = winner2 (0)

  // winner1, winner2, winner3 = 0, totalScore = 240, 200, 180, 300
  // Iterasi 1
  // 240 > juaraI (0) ? Benar, juaraI = totalScore (240)
  
  // Iterasi 2
  // 200 > juaraI (240) ? Salah
  // 200 > juaraII (0) ? Benar, juaraII = totalScore (200)

  // Iterasi 3
  // 180 > juaraI (240) ? Salah
  // 180 > juaraII (200) ? Salah
  // 180 > juaraIII (0) ? Benar, juaraIII = totalScore(180)

  // Iterasi 4
  //  300 > juaraI (240) ? Benar, juaraI = totalScore(300)

  // JuaraIII = juaraII (200)
  // JuaraII = juaraI (240)
  // JuaraI = totalScore (300)

  if (totalScore > winner1) {
      // Cek Jika Nilai Winner 1 ada
      if (winner1 !== 0) {
        // Cek Jika Nilai Winner 2 ada
        if (winner2 !== 0) {
          winner3 = winner2;
          winner2 = winner1;
          winner1 = totalScore;
        } else {
          // Jika Winner 2 tidak ada
          winner2 = winner1;
          winner1 = totalScore;
        }
      } else {
        // Jika winner 1 tidak ada
        winner1 = totalScore;
      }
    } else {
      // Cek jika total Score > Nilai Winner 2
      if (totalScore > winner2) {
        // Cek Jika Nilai Winner 2 ada
        if (winner2 !== 0) {
          winner3 = winner2;
          winner2 = totalScore;
        } else {
          // Jika Winner 2 tidak ada
          winner2 = totalScore;
        }
      } else {
        // Cek jika total Score > Nilai Winner 3
        if (totalScore > winner3) {
          winner3 = totalScore;
        }
      }
    }
  }

  console.log(winner1, winner2, winner3);
  return [winner1, winner2, winner3];
}

// Berapa rata-rata total nilai yang di dapat oleh juara umum? // Number // maksimal 2 decimal
function winnerMean(dataScore) {
  const mean = getWinner(dataScore);

  return (mean[0] + mean[1] + mean[2]) / 3;
}

console.log(
  winnerMean([
    ...data.juniorClass,
    ...data.middleClass,
    ...data.masterClass,
    ...data.seniorClass,
  ])
);
