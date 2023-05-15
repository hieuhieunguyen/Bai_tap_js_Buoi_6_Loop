var sum = 0;
var n = 0;

while(sum <= 10000) {
    n++;
    sum += n;
};

document.getElementById('ketQua').innerText = `Số nguyên dương nhỏ nhất: ${n}`;
