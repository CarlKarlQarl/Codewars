humanReadable = input => {
    let hours = 0
    let minutes = 0
    let seconds = 0
    
    seconds = input % 60
    minutes = Math.floor(input / 60) % 60
    hours = Math.floor(input / 3600)
    
    return formattedTime(hours, minutes, seconds)
  }
  
  formattedTime = (hours, minutes, seconds) => {
    let formattedHours = hours > 9 ? `${hours}`: `0${hours}`
    let formattedMinutes = minutes > 9 ? `${minutes}`: `0${minutes}`
    let formattedSeconds = seconds > 9 ? `${seconds}`: `0${seconds}`
    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`
}