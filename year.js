let BtnStart = document.querySelector("#Btn1");
let Inp0 = document.querySelector("#Inp0")
let Inp1 = document.querySelector("#Inp1");
let Out = document.querySelector(".Out");

BtnStart.onclick = function(){

    const oneDay = 1000 * 60 * 60 * 24;

    let Name0 = Inp0.value;

    if(Inp0.value.length === 0) {
        Name0 = "X";
    }

    var strDate = document.getElementById('Inp1').value;
    var date = new Date(strDate);
    var now = new Date()
    var age = now.getFullYear() - date.getFullYear();
    if (now.getTime() < date.getTime()) age = -1;

    date.setFullYear(date.getFullYear() + 20);
    let diffInTime = date.getTime() - now.getTime();
    let diffInDays = Math.round(diffInTime / oneDay);

    let passportDays = "";
    if (age >= 0 && !isNaN(age)) {
        if (diffInDays > 0)
            passportDays = "Через " + diffInDays + " дней вам необходимо будет заменить паспорт.";
        else if (diffInDays < 0) {
            date.setFullYear(date.getFullYear() + 25);
            diffInTime = date.getTime() - now.getTime();
            diffInDays = Math.round(diffInTime / oneDay);
            if (diffInDays > 0)
                passportDays = "Через " + diffInDays + " дней вам необходимо будет заменить паспорт.";
            else if (diffInDays === 0)
                passportDays = "Вам необходимо заменить паспорт сегодня.";
            else
                passportDays = "Вам не нужно менять паспорт.";
        }
        else
            passportDays = "Вам необходимо заменить паспорт сегодня.";
    }

    if (isNaN(age)) age = "на данный момент вам X лет";
    else if (age < 0) age = "введите правильную дату";
    else if (age < 1) age = "на данный момент вам <1 лет";
    else age = "на данный момент вам " + age + " лет";

    Out.innerHTML = "Здравствуйте, " + Name0 + ", " + age + ". " + passportDays;
}
           