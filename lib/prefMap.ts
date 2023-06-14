export const housingMap: Record<string, Record<number, string>> = {
  housingType: { 1: "1-year lease", 2: "Short-term lease" },
  moveIn: { 1: "ASAP", 2: " in < 3 months", 3: "in 3+ months" },
  housemates: {
    1: "1-2 roomies",
    2: "3-5 roomies",
    3: "6-12 roomies",
    4: "12+ roomies",
  },
  roomPrice: {1: "Less than $1000", 2: "$1000 - $1500", 3: "$1500 - $2000", 4: "$2000 - $2500", 5: "$2500 - $3000", 6: "Over $3000" },
};
