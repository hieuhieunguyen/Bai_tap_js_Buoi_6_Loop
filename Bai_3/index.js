document.getElementById('btn').onclick = function() {
    var giaTriN = Number(document.getElementById('value-input').value);
    var result = 1;
    for(var i = 1; i <= giaTriN; i++) {
        result *= i;
    }
    document.getElementById('ketQua').innerHTML = result;
}
