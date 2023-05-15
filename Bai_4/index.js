document.getElementById('btn').onclick = function() {
    var div = document.getElementById('div');
    var output = '';
    for(var i = 1; i <= 10; i++) {
        if(i % 2 == 0) {
            output += `<div class="bg-danger p-3 text-white">Div chẵn ${i}</div>`;
        } else {
            output += `<div class="bg-primary p-3 text-white">Div lẻ ${i}</div>`;
        };
    };
    div.innerHTML = output;
};

