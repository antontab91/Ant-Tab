var arr = [2, 4, 5, 7, 9, 4, 1, 16];

function getEven(arr) {
    var arr2 = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            arr2.push(arr[i]);
        }
    }
    return [arr2];
}

console.log(getEven(arr));
getEven(arr);

