var today = new Date().toDateString()
console.log(today)

var currentHour = new Date().getHours()
console.log(currentHour)

var dateEl = $("#currentDay")
dateEl.text(today)
