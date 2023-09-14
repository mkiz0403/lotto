var result =[];
var bonus =[];

for(var i = 1; i <= 45; i++){
    var num = parseInt(Math.random() * 45) + 1;
    if(result.length < 6 && !result.includes(num)){
            result.push(num);
    } else if (result.length === 6 && !result.includes(num) && bonus.length < 1){
        bonus.push(num);
    }
    result.sort(function(a,b){
        return a - b
    });


}
console.log(`인생 역전! 🏠 행운의 로또 번호는 [ ${ result } ] 입니다.🥳 `)

console.log(`2등이라도 해보자! 🚘 행운의 보너스 번호는 [ ${ bonus } ] 입니다.😍 `)

console.log(`로또 번호 : [ ${result} ]  보너스 번호 : [ ${bonus} ] `)




