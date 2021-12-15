const btn = document.querySelector('.test-btn');
let count = 0;

btn.addEventListener('click', () => {

    count = 0;

    let questions = [
        document.test.q1.value,
        document.test.q2.value,
        document.test.q3.value,
        document.test.q4.value,
        document.test.q5.value,
        document.test.q6.value,
        document.test.q7.value,
        document.test.q8.value,
        document.test.q9.value,
        document.test.q10.value,
        document.test.q11.value,
        document.test.q12.value,
        document.test.q13.value,
        document.test.q14.value,
        document.test.q15.value,
        document.test.q16.value,
        document.test.q17.value,
        document.test.q18.value,
        document.test.q19.value
        ];
    questions.forEach((item) =>{

        if(item == '1'){
            count++;
        }

        if(item == '2'){
            count+=2;
        }

        if(item == '3'){
            count+=3;
        }

        if(item == '4'){
            count+=4;
        }

        if(item == '5'){
            count+=5;
        }
    });

    if(count <= 30){
        document.body.innerHTML = "<p>определенно вечерний</p> <button onClick=\"window.location.reload()\">Назад</button>"
    }

    if(count > 30 && count <= 41){
        document.body.innerHTML = "<p>умеренно вечерний</p> <button onClick=\"window.location.reload()\">Назад</button>"
    }

    if(count > 41 && count <= 58){
        document.body.innerHTML = "<p>промежуточный</p> <button onClick=\"window.location.reload()\">Назад</button>"
    }

    if(count > 58 && count <= 69){
        document.body.innerHTML = "<p>умеренно утренний</p> <button onClick=\"window.location.reload()\">Назад</button>"
    }

    if(count > 69 && count <= 86){
        document.body.innerHTML = "<p>определенно утренний</p> <button onClick=\"window.location.reload()\">Назад</button>"
    }
})


