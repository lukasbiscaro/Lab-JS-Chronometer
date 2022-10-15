class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
  // currentTime++ cada 1000
    this.intervalId = setInterval(() => {
      this.currentTime++
      if(printTimeCallback) {
        printTimeCallback()
      }
    }, 10);
  // printTimeCallback a cada 1000
  }

  getMinutes() {
    // Math.floor() para numero arredondado como resultado
    return Math.floor(this.currentTime / 6000)
  }

  getSeconds() {
    let convert = Math.floor(this.currentTime / 100)
   return (convert % 60) // possibilidade de uso do math.floor
  }

  getCentiseconds() {
    // possui também this.currentTime
    return (this.currentTime % 100)
  }

  computeTwoDigitNumber(value) {

    // se for passado numero < 10 retorna 0${value}
    /* if(value < 10) return `0${value}`
    return `${value}` */

    return `${value}`.padStart(2, '0')
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    //declarar minutos
    let minutes = this.computeTwoDigitNumber(this.getMinutes())
    //declarar segundos
    let seconds = this.computeTwoDigitNumber(this.getSeconds())
    let centiSeconds = this.computeTwoDigitNumber(this.getCentiseconds())
    //retornar valor com formato "mm : ss"
    return `${minutes}:${seconds}.${centiSeconds}`

  }
}

