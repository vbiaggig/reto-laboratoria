
do {
  var userName = prompt("Por favor ingresa tu nombre");
} while (userName.length==0);

var userNameP = document.getElementById("userName");
userNameP.textContent =  userName;
document.getElementById("display-after").style.display = "";
var q1 = "¿Cuál es el valor de F()? \nF()=(A-X)(B-X)(C-X)...(Z-X)";
var q2 = "Si tengo 5 peces y 3 se me \nahogan ¿Cuántos peces me quedan?";
var q3 = "En una tienda de comestibles \nse tienen en el aparador 8 sandias, 5 manzanas, 7 peras y 3 veces \nmas naranjas que peras. Si llamaramos \nmanzanas a las naranjas, cuantas manzanas seran entonces?.";

  function myFunction() {
      var txt;
      if (confirm("¿List@ para empezar?")) {
        var answer1 = prompt(q1);
        var answer2 = prompt(q2);
        var answer3 = prompt(q3);
        alert("¡¡¡Veamos tus resultados!!!")

        if(answer1=="0"){
          var question1C = document.getElementById("question1C");
          question1C.textContent = q1;
          var answers1Co= document.getElementById("answer1C");
          answers1Co.textContent = answer1;
          document.getElementById("answer1C").style.display = "";
        }else{
          var question1Inc = document.getElementById("question1Inc");
          question1Inc.textContent = q1;
          var questions1IC= document.getElementById("answer1Inc");
          questions1IC.textContent = answer1;
          document.getElementById("answer1Inc").style.display = "";
          document.getElementById("answer1CC").style.display = "";
        }
        if(answer2=="5"){
          var question2C = document.getElementById("question2C");
          question2C.textContent = q2;
          var answers2Co= document.getElementById("answer2C");
          answers2Co.textContent = answer2;
          document.getElementById("answer2C").style.display = "";
        }else{
          var question2Inc = document.getElementById("question2Inc");
          question2Inc.textContent = q2;
          var questions2IC= document.getElementById("answer2Inc");
          questions2IC.textContent = answer2;
          document.getElementById("answer2Inc").style.display = "";
          document.getElementById("answer2CC").style.display = "";
        }
        if(answer3=="5"){
          var question3C = document.getElementById("question3C");
          question3C.textContent = q3;
          var answers3Co= document.getElementById("answer3C");
          answers3Co.textContent = answer3;
          document.getElementById("answer3C").style.display = "";
        }else{
          var question3Inc = document.getElementById("question3Inc");
          question3Inc.textContent = q3;
          var questions3IC= document.getElementById("answer3Inc");
          questions3IC.textContent = answer3;
          document.getElementById("answer3Inc").style.display = "";
          document.getElementById("answer3CC").style.display = "";
        }
        document.getElementById("display-after-after").style.display = "";
      } else {
          txt = "JUGAREMOS PARA LA PROXIMA!!!";
          document.getElementById("demo").innerHTML = txt;
      }

  }
