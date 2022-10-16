function compute() {
    var principal = document.getElementById("principal").value;
    if (principal <= 0) {
        alert("Enter a positive number")
        document.getElementById("principal").focus()
    } else {
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        var interest = principal * years * rate / 100;
        var year = new Date().getFullYear() + parseInt(years);

        let result = document.getElementById('result')
        result.innerHTML = `<p>If you deposit <span class="result-number">${principal}</span>,<br>
    at an interest rate of <span class="result-number">${rate}</span>.<br>
    You will receive an amount of <span class="result-number">${interest}</span>,<br>
    in the year <span class="result-number">${year}</span>.</p>`
    }
}

function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval + "%";
}