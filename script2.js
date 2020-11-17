
var first = +prompt('Введите первое число!');1
var second = +prompt('Введите второе число!')  ;2
var third = +prompt('Введите третье число!') ;5


if(first > second && first < third || first < second && first > third){
    alert(first + ' среднее число!')
} else if(second < first && second > third || second > first && second < third){
    alert(second + ' среднее число!')
} else if(third < second && third > first || first > second && second < third){
    alert(third + ' среднее число!')
}