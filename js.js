function startGame(){
    gameLoop();
}

var count=0;
var personVis = false; //переменная переключателя
var score=0; //переменная счёта


function gameLoop(){
    personVis = !personVis //переменная видимости
     
    if (personVis ==true){     //условия проверки для переключения
        var classToset="character visible"; 
    }
    else{
        var classToset = "character hidden";
    }

    var gamezone = document.getElementById("game"); //загрузка облости блоков

    for(i=0;i<8;i++){  //применение стиля для всех плоков 
        gamezone.children[i].className = classToset;
        gamezone.children[i].innerHTML="Персонаж";
        //при нажатие на персонажа отнимают два балла 
        gamezone.children[i].onclick=function(){score-=2}
    }

    var randomNum = Math.floor(Math.random()*8)+1; //рандомное число

    gamezone.children[randomNum-1].innerHTML="Лишний"; //Прикреп.слова лишний к рандомному блоку 
    
    //при нажатие
    gamezone.children[randomNum-1].onclick=function(){score+=1}

    gamezone.children[randomNum-1].className=classToset+" mercenary";

    count++;

    if (count<12){
        setTimeout(gameLoop,personVis ? 1000:1000)
    }
    else{
        alert("Игра окончена.");
        alert("Твой счёт "+ score)
    }

    var score=document.createElement(ert)
}
