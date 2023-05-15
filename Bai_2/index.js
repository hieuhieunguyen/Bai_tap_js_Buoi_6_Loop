
document.getElementById('btn').onclick = function() {
    var inputX = Number(document.getElementById('soX').value);
    var inputN = Number(document.getElementById('soN').value);
    var result = 0;
    for(i = 1 ; i <= inputN; i++) {
        result += Math.pow(inputX, i);
    };
    document.getElementById('ket-qua').innerHTML = result; 
};


