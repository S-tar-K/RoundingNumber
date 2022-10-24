function roundToInteger(number){
    let N = parseFloat(number);
    let y = Math.floor( N + .5 );
    document.getElementById("integer").innerHTML = y;

}

function roundToTength(number){
    let N = parseFloat(number);
    let y = Math.floor(N * 10 + .5) / 10;
    document.getElementById("tenth").innerHTML = y;

}

function roundToHundredths(number){
    let N = parseFloat(number);
    let y = Math.floor(N * 100 + .5) / 100;
    document.getElementById("hundred").innerHTML = y;
}

function roundToThousand(number){
    let N = parseFloat(number);
    let y = Math.floor(N * 1000 + .5) / 1000;
    document.getElementById("thousand").innerHTML = y;
}
