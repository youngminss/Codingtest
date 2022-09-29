function solution(fees, records) {
  const [standardTime, standardFee, perTime, perFee] = fees;
  const cars = {};

  records.forEach((record) => {
    const carNumber = record.split(" ")[1];
    if (!(carNumber in cars)) {
      cars[carNumber] = { accTime: 0, totalFee: 0 };
    }
  });

  records.forEach((record) => {
    const [time, carNumber, status] = record.split(" ");

    if (status === "IN") {
      cars[carNumber]["time"] = time;
      cars[carNumber]["status"] = status;
    } else {
      cars[carNumber]["accTime"] += calculateAccumulateTime(cars[carNumber]["time"], time);
      cars[carNumber]["status"] = status;
    }
  });

  for (const carNumber in cars) {
    if (cars[carNumber]["status"] === "IN") {
      cars[carNumber]["accTime"] += calculateAccumulateTime(cars[carNumber]["time"], "23:59");
      cars[carNumber]["status"] = "OUT";
    }
  }

  for (const carNumber in cars) {
    if (cars[carNumber]["accTime"] <= standardTime) {
      cars[carNumber]["totalFee"] = standardFee;
    } else {
      cars[carNumber]["totalFee"] =
        standardFee + Math.ceil((cars[carNumber]["accTime"] - standardTime) / perTime) * perFee;
    }
  }

  return Object.entries(cars)
    .sort()
    .map((car) => car[1]["totalFee"]);
}

const calculateAccumulateTime = (start, end) => {
  const [startHour, startMinute] = start.split(":").map(Number);
  const [endHour, endMinute] = end.split(":").map(Number);

  return endHour * 60 + endMinute - (startHour * 60 + startMinute);
};

// solution(
//   [180, 5000, 10, 600],
//   [
//     "05:34 5961 IN",
//     "06:00 0000 IN",
//     "06:34 0000 OUT",
//     "07:59 5961 OUT",
//     "07:59 0148 IN",
//     "18:59 0000 IN",
//     "19:09 0148 OUT",
//     "22:59 5961 IN",
//     "23:00 5961 OUT",
//   ],
// ); // [14600, 34400, 5000]

// solution([120, 0, 60, 591], ["16:00 3961 IN", "16:00 0202 IN", "18:00 3961 OUT", "18:00 0202 OUT", "23:58 3961 IN"]); // [0, 591]

// solution([1, 461, 1, 10], ["00:00 1234 IN"]); // 	[14841]
