document.getElementById('submit').addEventListener('click', submit);

let results = 0

function submit () {
    let input1 = document.getElementById('in1').value;
    input1 = input1.toLowerCase();
    if (input1 == '6371') {
        results +=1;
    } else {
        results +=0;
    } 
    let input2 = document.getElementById('in2').value;
    if (input2 == 'not quite'){
        results +=1
    } else if (input2 == 'no'){
        results +=1
    } else {
        results +=0
    } 
    let input3 = document.getElementById('in3').value;
    if (input3 == 'iron, oxygen, silicone' || input3 == 'oxygen, iron, silicone' || input3 == 'silicone, iron, oxygen') {
        results +=1;
    } else {
        results +=0;
    }
    if (results ==3) {
        document.getElementById('results').innerHTML = 'You got 3/3';
    } else if (results ==2) {
        document.getElementById('results').innerHTML = 'You got 2/3';
    } else {
        document.getElementById('results').innerHTML = 'You got 1/3';
    }
}