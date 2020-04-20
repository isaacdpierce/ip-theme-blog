export const getStart = (start, num) => {
  if (start === "left") return -num
  if (start === "right") return num
  else return 0
}

export const setOddEvenOffset = (i, num) => (i % 2 === 0 ? -num : num)

export const isEven = num => (num % 2 === 0 ? true : false)
