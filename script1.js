
var time = +prompt('Введите время!')
if( time > 0 && time <= 3 ){
    alert( time + ' часа ночи!')
} else if( time > 3 && time <= 11){
    alert( time + ' часов утра!')
}else if( time >= 12 && time <= 16){
    alert( time + ' часов дня!');
}else if( time > 16 && time <= 23){
    alert( time  + ' часов вечера!')
}else{
    alert('Полночь!')
}
