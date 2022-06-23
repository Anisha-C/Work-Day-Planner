var today = new Date().toDateString()
console.log(today)

var currentHour = new Date().getHours()
console.log(currentHour)

var dateEl = $("#currentDay")
dateEl.text(today)

function currentTime() {
    var time = new Date().toTimeString()

    var timeEl = $("#time")
    timeEl.text(time)
}

setInterval(currentTime, 1000)