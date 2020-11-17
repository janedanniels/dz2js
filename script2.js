
var first = +prompt('Введите первое число!') 
var second = +prompt('Введите второе число!')  
var third = +prompt('Введите третье число!') 

if(first > second || first < third && second < third || second > third){
    alert(first + ' среднее число!')
} else if(second > first || second < third && third > first || first > third){
    alert(second + ' среднее число!')
} else if(third > second || third < first && first > second ||  first < second){
    alert(third + ' среднее число!')
}