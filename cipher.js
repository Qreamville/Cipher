const cipher = (string) => {
  const key1 = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };

  const key2 = {
    1: "a",
    2: "e",
    3: "i",
    4: "o",
    5: "u",
  };

  if (/[0-9]/g.test(string)) {
    return string
      .replace(/a/g, "")
      .split("")
      .map((letter) => (key2[letter] ? key2[letter] : letter))
      .join("");
  } else {
    return string
      .split("")
      .map((letter) => (key1[letter] ? key1[letter] : `${letter}a`))
      .join("");
  }
};

cipher("ga1ta2 w1a3ta"); // returns gate wait
cipher("gate"); // returns ga1ta2
