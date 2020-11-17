
var first = +prompt('Введите первое число!');
var second = +prompt('Введите второе число!');
var third = +prompt('Введите третье число!');


if(first > second && first < third || first < second && first > third){
    alert(first + ' среднее число!')
} else if(second < first && second > third || second > first && second < third){
    alert(second + ' среднее число!')
} else if(third < second && third > first || first > second && second < third){
    alert(third + ' среднее число!')
}