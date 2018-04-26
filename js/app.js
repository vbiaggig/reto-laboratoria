
do {
  var userName = prompt('Por favor ingresa tu nombre');
} while (userName.length==0);

var userNameP = document.getElementById('userName');
userNameP.textContent =  userName;
document.getElementById("display-after").style.display = "";

  function myFunction() {
      var txt;
      if (confirm("List@ para empezar?")) {
        var answer1 = prompt("2+2");
        var answer2 = prompt("2+3");
        var answer3 = prompt("2+4");
        alert('Veamos tus resultados!!!')

        if(answer1=="4"){
          var question1C = document.getElementById('question1C');
          question1C.textContent = "2+2";
          var answers1Co= document.getElementById('answer1C');
          answers1Co.textContent = answer1;
          document.getElementById("answer1C").style.display = "";
        }else{
          var question1Inc = document.getElementById('question1Inc');
          question1Inc.textContent = "2+2";
          var questions1IC= document.getElementById('answer1Inc');
          questions1IC.textContent = answer1;
          document.getElementById("answer1Inc").style.display = "";
        }
        if(answer2=="5"){
          var question2C = document.getElementById('question2C');
          question2C.textContent = "2+3";
          var answers2Co= document.getElementById('answer2C');
          answers2Co.textContent = answer2;
          document.getElementById("answer2C").style.display = "";
        }else{
          var question2Inc = document.getElementById('question2Inc');
          question2Inc.textContent = "2+3";
          var questions2IC= document.getElementById('answer2Inc');
          questions2IC.textContent = answer2;
          document.getElementById("answer2Inc").style.display = "";
        }
        if(answer3=="6"){
          var question3C = document.getElementById('question3C');
          question3C.textContent = "2+4";
          var answers3Co= document.getElementById('answer3C');
          answers3Co.textContent = answer3;
          document.getElementById("answer3C").style.display = "";
        }else{
          var question3Inc = document.getElementById('question3Inc');
          question3Inc.textContent = "2+4";
          var questions3IC= document.getElementById('answer3Inc');
          questions3IC.textContent = answer3;
          document.getElementById("answer3Inc").style.display = "";
        }
        document.getElementById("display-after-after").style.display = "";
      } else {
          txt = "JUGAREMOS PARA LA PROXIMA!!!";
          document.getElementById("demo").innerHTML = txt;
      }

  }
