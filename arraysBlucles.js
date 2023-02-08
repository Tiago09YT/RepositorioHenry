// FOR
var arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}

function encontrarLetraP(string){
    var letra = string.split("");
    for(let i =0; i<letra.length;i++){
        if(letra[i]==="p")
        console.log("Sí contiene a P")
    }
}
encontrarLetraP("JavaScript")
encontrarLetraP("Henry")

// WHILE
var arr = [];
while (arr.length < 5) {
   arr.push('Camilo');
}
console.log(arr);