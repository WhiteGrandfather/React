//arrow-функции

function square(x) {
    return x*x;
}

const sq = (x) => x*x;

const arr = ['1', '3', '2', '4'];

// ES6
const res = arr
.map((el) => parseInt(el))
.filter((num) => num%2)
.reduce((max, value) => Math.max(max, value), 0);

// ES5
const res2 = arr
.map(function(el) {
    return parseInt(el);
})
.filter(function(num) {
    return num%2;
})
.reduce(function(max, value) {
    return Math.max(max, value);
}, 0);