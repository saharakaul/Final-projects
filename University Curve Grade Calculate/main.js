'use strict';



document.getElementById('calcBtn').addEventListener('click', calculate)

function calculate() {
    //INPUT
    let maxGr = Number(document.getElementById('maxG').value);
    let highGr = Number(document.getElementById('highestGr').value);
    let gr2 = Number(document.getElementById('gr2').value);
    let gr3 = Number(document.getElementById('gr3').value);
    let gr4 = Number(document.getElementById('gr4').value);
    let gr5 = Number(document.getElementById('gr5').value);
    let gr6 = Number(document.getElementById('gr6').value);
    let gr7 = Number(document.getElementById('gr7').value);
    let gr8 = Number(document.getElementById('gr8').value);
    let gr9 = Number(document.getElementById('gr9').value);
    let gr10 = Number(document.getElementById('gr10').value);
    //PROCESS
    let nhgr = Number(maxGr);
    let ngr2 = Number(gr2 + (maxGr - highGr));
    let ngr3 = Number(gr3 + (maxGr - highGr));
    let ngr4 = Number(gr4 + (maxGr - highGr));
    let ngr5 = Number(gr5 + (maxGr - highGr));
    let ngr6 = Number(gr6 + (maxGr - highGr));
    let ngr7 = Number(gr7 + (maxGr - highGr));
    let ngr8 = Number(gr8 + (maxGr - highGr));
    let ngr9 = Number(gr9 + (maxGr - highGr));
    let ngr10 = Number(gr10 + (maxGr - highGr));
    //OUTPUT
    document.getElementById('answer').innerHTML = 'High Grade: ' + nhgr + '%' + ', Grade 2: ' + ngr2 + '%' + ', Grade 3: ' + ngr3 + '%' + ', Grade 4: ' + ngr4 + '%' + ', Grade 5: ' + ngr5 + '%' + ', Grade 6: ' + ngr6 + '%' + ', Grade 7: ' + ngr7 + '%' + ', Grade 8: ' + ngr8 + '%' + ', Grade 9: ' + ngr9 + '%' + ', Grade 10: ' + ngr10 + '%';

}
