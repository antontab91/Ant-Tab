var arr = [
    { name: 'Jonny Walker', birthDate: '1995-17-12' },
    { name: 'Andrew', birthDate: '2001-10-29' },
    { name: 'Viktor', birthDate: '1998-11-09' }
];

function searchByName(name) {
    var arrByName;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].name == name) {
            arrByName = arr[i];
        }
    }
    return arrByName;
}

console.log(searchByName('Andrew'));

searchByName('Andrew')