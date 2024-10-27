function outer1() {
    var arrFn = [];
    for (var i = 0; i < 3; i++)
        arrFn.push(function () {
            i++;
            console.log(i)
        });

    return arrFn;
}

let arrFn = outer1();
arrFn[0](); // 4
arrFn[1](); // 5
arrFn[2](); // 6

function outer2() {
    var arrFn = [];
    for (let i = 0; i < 3; i++)
        arrFn.push(function () {
            i++;
            console.log(i)
        });

    return arrFn;
}

let arrFn2 = outer2();
arrFn2[0](); // 1
arrFn2[1](); // 2
arrFn2[2](); // 3