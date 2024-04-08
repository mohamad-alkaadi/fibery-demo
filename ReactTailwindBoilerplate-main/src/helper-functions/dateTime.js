export const time = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
]

export const day = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
]

const year = {
  1: {
    name: "January",
    days: 31,
  },
  2: {
    name: "February",
    days: 28,
  },
  3: {
    name: "March",
    days: 31,
  },
  4: {
    name: "April",
    days: 30,
  },
  5: {
    name: "May",
    days: 31,
  },
  6: {
    name: "June",
    days: 30,
  },
  7: {
    name: "July",
    days: 31,
  },
  8: {
    name: "August",
    days: 31,
  },

  9: {
    name: "September",
    days: 30,
  },
  10: {
    name: "October",
    days: 31,
  },
  11: {
    name: "November",
    days: 30,
  },
  12: {
    name: "December",
    days: 31,
  },
}

export const leapYear = (inputYear) => {
  if ((inputYear % 4 === 0 && inputYear % 100 !== 0) || inputYear % 400 === 0) {
    return { ...year, 2: { name: "February", days: 29 } }
  } else {
    return { ...year, 2: { name: "February", days: 28 } }
  }
}

export const getFirstDay = (year, month) => {
  var day = new Date(year + "-" + month + "-01").getDay()
  if (day === 0) {
    day = 7
  }
  return day
}

export const getDay = () => {
  const date = new Date()
  const today = date.getDay()
  return today
}

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]
export const getDayOfWeek = (day, month, year) => {
  const date = new Date(year, month - 1, day)
  const dayOfWeek = date.getDay()
  return daysOfWeek[dayOfWeek]
}
export const getTime = () => {
  const date = new Date()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const formattedMinutes = minutes.toString().padStart(2, "0")
  return `${hours}:${formattedMinutes}`
}

export const getMonth = () => {
  const now = new Date()
  const month = now.getMonth() + 1
  return month
}

export const getYear = () => {
  const now = new Date()
  const year = now.getFullYear()
  return year
}
export const convertTimeToInt = (time) => {
  const timeWithoutMinutes = time.slice(0, -3)
  const timeAsInteger = parseInt(timeWithoutMinutes, 10)
  return timeAsInteger
}

export const addMinutesToTime = (timeStr, minutesToAdd) => {
  const [hours, minutes] = timeStr.split(":").map(Number)

  const totalMinutes = hours * 60 + minutes + minutesToAdd

  const newHours = Math.floor(totalMinutes / 60)
  const newMinutes = totalMinutes % 60

  const newTimeStr = `${String(newHours).padStart(2, "0")}:${String(
    newMinutes
  ).padStart(2, "0")}`
  return newTimeStr
}
