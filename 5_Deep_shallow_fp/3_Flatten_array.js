// Version - 1
// input - [1,2,[3,4,[5,6]],7,8]
// output - [1,2,3,4,5,6,7,8]

Array.prototype.myFlat = function fn() {

    let newArr = [];

    for (let i = 0; i < this.length; i++) {

        if (Array.isArray(this[i])) {
            let parentArr = this[i].myFlat();
            newArr = [...newArr, ...parentArr];
        }

        else {
            newArr.push(this[i]);
        }
    }
    return newArr;
}

let arr = [1, [2, [3, [4]], 5]];
// console.log(arr.myFlat());

// Version - 2
// input - [1,2,[3,4,[5,6]],7,8] & n = 3
// output - [1,2,3,4,5,6,7,8]

Array.prototype.myFlat = function fn(lvl) {

    let newArr = [];

    for (let i = 0; i < this.length; i++) {

        if (Array.isArray(this[i]) && lvl>0) {
            let parentArr = this[i].myFlat(lvl-1);
            newArr = [...newArr, ...parentArr];
        }

        else {
            newArr.push(this[i]);
        }
    }

    return newArr;
}

console.log(arr.myFlat(4));