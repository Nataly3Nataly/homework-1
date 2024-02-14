let year = parseInt(prompt('Введіть свій вік'));
if(!isNaN(year) && year >= 0){
    let endOfDigist = year % 10;
    if (year !== 12 && year !== 14 && (endOfDigist === 2 || endOfDigist === 4)){
    confirm("Ваш вік - " + year + " роки");
    }else if (endOfDigist === 1) {
        confirm("Ваш вік - " + year + " рік");
    }else {
        confirm("Ваш вік - " + year + " років");}
    }
else{
    year = prompt('Спробуйте ще раз! Ввведіть свій вік (тільки цифри)');
}