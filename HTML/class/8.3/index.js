var array = [];
for (let i = 0; i < 10; i++) {
    array[i] = function() {
        console.log(i);
    }
}