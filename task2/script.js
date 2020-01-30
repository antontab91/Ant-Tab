var arr = [2, 4, 5, 7, 9, 4, 1, 16];

function min(arr) {
    var a = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < a) {
            a = arr[i];
        }
    }
    return a;
}

console.log(min(arr));
min(arr);



function getMin(arr) {
    return Math.min.apply(null, arr);
}

console.log(getMin(arr));
getMin(arr);

