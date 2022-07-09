function task1() {
    let num = prompt('Введите число');
    let system = prompt('Введите систему счисления');
        if (parseInt(num) > 0  && parseInt(system) > 1 && parseInt(system) < 10){
            let strRes = '';
            num = parseInt(num);
            system = parseInt(system);
            while(num >= system){
                strRes += num % system;
                num  = Math.floor(num / system);
            }
            strRes += num;
            strRes = strRes.split('').reverse().join('');
            let result = 'Результат: ' + parseInt(strRes)
            alert(result)
        }
        else{
            alert('Некорректный ввод!');
        }
}

function task2() {
    let num1 = prompt('Введите первое число');
    
    if (parseInt(num1)){
        let num2 = prompt('Введите второе число');
        if(parseInt(num2)){
            num1 = parseInt(num1);
            num2 = parseInt(num2);
            let result = 'Ответ: ' + (num1 + num2) + ',' + (num1 / num2);
            return result;
        }
        else{
            alert('Некорректный ввод!');
        }
    }
    else{
        alert('Некорректный ввод!');
    }
}


task1()
console.log(task2())