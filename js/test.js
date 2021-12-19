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

    if(count <= 35){
        document.getElementById("root").innerHTML = "<main class='main container'><h1 class='item-title'>Ваш резльтат:<br> Лев</h1>" +
            "<ul class=\"vl\">\n" +
            "            <li><b>Чотири ключові риси характеру:</b> сумлінність, спокій, практичність, оптимізм.</li>\n" +
            "            <li><b>Чотири ключові моделі поведінки:</b> завищують планку; стежать за здоров'ям та фізичною формою;\n" +
            "                воліють позитивне спілкування; Докладно розробляють стратегії.\n" +
            "            </li>\n" +
            "            <li><b>Графік сну та активності:</b> Леви прокидаються на зорі або раніше з ясною головою, до кінця дня\n" +
            "                втомлюються та легко засинають. Максимальна активність: опівдні. Максимальна продуктивність: вранці.\n" +
            "                Денний сон: Леви рідко сплять вдень, воліючи замість цього зайнятися чимось корисним.\n" +
            "            </li>\n" +
            "        </ul>" +
            "<a href='../pages/lion.html' class='more'>Дізнатися більше</a>" +
            "<button class='back' onClick=\"window.location.reload()\">Пройти ще раз</button></main>"
    }

    if(count > 35 && count <= 51){
        document.getElementById("root").innerHTML = "<main class='main container'><h1 class='item-title'>Ваш резльтат:<br> Ведмідь</h1>" +
            "<ul class=\"vl\">\n" +
            "            <li><b>Чотири ключові риси характеру:</b> передбачливість, екстравертність, дружелюбність та товариськість,\n" +
            "                широкі погляди.\n" +
            "            </li>\n" +
            "            <li><b>Чотири ключові моделі поведінки:</b> уникають конфліктів, прагнуть здорового способу життя,\n" +
            "                намагаються бути щасливими і комфортно почуваються у знайомій обстановці.\n" +
            "            </li>\n" +
            "            <li><b>Графік сну та активності:</b> прокидаються з туманом голові, попередньо один-два рази вимкнувши\n" +
            "                повторення будильника, втомлюються в середині дня або до кінця вечора, сплять глибоко, але не так довго,\n" +
            "                як би хотіли. Максимальна активність: середина ранку – початок дня. Максимальна продуктивність: пізній\n" +
            "                ранок. Денний сон: надолужують упущене у вихідні, лежачи на дивані.\n" +
            "            </li>\n" +
            "        </ul>" +
            "<a href='../pages/bear.html' class='more'>Дізнатися більше</a>" +
            "<button class='back' onClick=\"window.location.reload()\">Пройти ще раз</button></main>"
    }

    if(count > 51 && count <= 68){
        document.getElementById("root").innerHTML = "<main class='main container'><h1 class='item-title'>Ваш резльтат:<br> Вовк</h1>" +
            "<ul class=\"vl\">\n" +
            "            <li><b>Чотири ключові риси характеру:</b> імпульсивність, песимізм, схильність до творчості та перепадів\n" +
            "                настрою.\n" +
            "            </li>\n" +
            "            <li><b>Чотири ключові моделі поведінки:</b> схильні до ризику, дають задоволення на перше місце, шукають\n" +
            "                новизну, дуже емоційно реагують на все.\n" +
            "            </li>\n" +
            "            <li><b>Графік сну та активності:</b> Вовкам важко прокидатися до 9.00 (хоча і можливо), вони приходять до\n" +
            "                середини дня і втомлюються до півночі або пізніше. Максимальна активність: 19:00. Максимальна\n" +
            "                продуктивність: пізно вранці та пізно ввечері. Денний сон: спокусливий для них, але якщо Вовк подрімає\n" +
            "                вдень, то вже не засне вночі. Гра не варта свічок.\n" +
            "            </li>\n" +
            "        </ul>" +
            "<a href='../pages/wolf.html' class='more'>Дізнатися більше</a>" +
            "<button class='back' onClick=\"window.location.reload()\">Пройти ще раз</button></main>"
    }

    if(count > 68 && count <= 84){
        document.getElementById("root").innerHTML = "<main class='main container'><h1 class='item-title'>Ваш резльтат:<br> Дельфін</h1>" +
            "<ul class=\"vl\">\n" +
            "            <li><b>Чотири ключові риси характеру:</b> обережність, інтровертність, нервозність, інтелектуальність.</li>\n" +
            "            <li><b>Чотири ключові моделі поведінки:</b> уникають ризикованих ситуацій, перфекціоністи, схильні до\n" +
            "                обсесивно-компульсивного поводження, приділяють особливу увагу дрібницям.\n" +
            "            </li>\n" +
            "            <li><b>Графік сну та активності:</b> зазвичай Дельфіни прокидаються втомленими і перебувають у цьому\n" +
            "                стані до пізнього вечора, коли їхнє самопочуття різко покращується. Максимальна активність: пізно\n" +
            "                вночі. Максимальна продуктивність: удень, короткочасними періодами. Денний сон: намагаються подрімати,\n" +
            "                щоб надолужити втрачене вночі, але їм це рідко вдається.\n" +
            "            </li>\n" +
            "        </ul>" +
            "<a href='../pages/dolphin.html' class='more'>Дізнатися більше</a>" +
            "<button class='back' onClick=\"window.location.reload()\">Пройти ще раз</button></main>"
    }
})


