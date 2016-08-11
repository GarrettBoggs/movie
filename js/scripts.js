var work = function(color,element,level){

    if(color === "blue")
    {
      if(element === "fire"){
        if(level === "noob")
          return "<h2 id='result'>You are a Litwick <br><img src='./img/litwick.png'class='img-responsive'></h2>";
        else //pro
          return "<h2 id='result'>You are a Salamance <br><img src='./img/salamance.png'class='img-responsive'></h2>";
      }
      else { //rock
        if(level === "noob")
          return "<h2 id='result'>You are a Omanyte <br><img src='./img/omanyte.gif'class='img-responsive'></h2>";
        else  //pro
          return "<h2 id='result'>You are a Carracosta <br><img src='./img/carracosta.png'class='img-responsive'></h2>";
      }
    }
    else { //red
      if(element === "fire"){
        if(level === "noob")
          return "<h2 id='result'>You are a Charmander <br><img     src='./img/charmander.png'class='img-responsive'></h2>";
        else  //pro
          return "<h2 id='result'>You are a Charizard <br><img src='./img/charazard.png'class='img-responsive'></h2>";
      }
      else { //rock
        if(level === "noob")
          return "<h2 id='result'>You are a Shuckle <br><img src='./img/shuckle.jpg'class='img-responsive'></h2>";

        else { //pro
          return "<h2 id='result'>You are a Tyrantum <br><img src='./img/tyrantum.png'class='img-responsive'></h2>";
        }
      }
    }

}

$(document).ready(function() {
  $("form").submit(function(){
    var color = $("input:radio[name=color]:checked").val();
    var element = $("input:radio[name=element]:checked").val();
    var level = $("input:radio[name=exp]:checked").val();
    $('#result').remove();

    $("#answer").after(work(color,element,level));

    event.preventDefault();
  });
});
