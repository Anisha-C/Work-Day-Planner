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

function displayTimeBlocks() {
    var timeBlocks = "";
    for (let i = 8; i <= 18; i++) {
        if (currentHour < i) {
            var colorCode = "future"
        }
        else if (currentHour == i) {
            var colorCode = "present"
        }
        else {
            var colorCode = "past"
        }
        var savedNote = localStorage.getItem(`${i.toString().padStart(2, "0")}:00`) || ""
        timeBlocks += `<div class="time-block row ${colorCode} hour"  id="${i}"> 
        <p class = "time col-2">${i.toString().padStart(2, "0")}:00</p>
        <input type = "text-area" class = col-8 value = ${savedNote}>
        <button class = "col-2 saveBtn">💾</button>
        </div>`
    }

    $("#timeblocks").html(timeBlocks)
    var saveBtns = document.getElementsByClassName("saveBtn")
    console.log(saveBtns)
    for (let i = 0; i < saveBtns.length; i++) {
        saveBtns[i].addEventListener("click", getNoteData)
    }
}
function getNoteData(event) {
    var note = $(this).siblings(".col-8").val()
    var key = $(this).siblings(".time").text()
    save(key, note)
}
function save(key, note) {
    localStorage.setItem(key, note)
}

displayTimeBlocks()
