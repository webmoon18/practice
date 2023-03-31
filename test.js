train.onclick = function() {
    let start = Date.now();

    let timer = setInterval(function() {
      let timePassed = Date.now() - start;

      train.style.left = timePassed / 5 + 'px';

      if (timePassed > 7000) clearInterval(timer);

    }, 40);
  }
  function makeEaseInOut(timing) {
    return function(timeFraction) {
      if (timeFraction < .5)
        return timing(2 * timeFraction) / 2;
      else
        return (2 - timing(2 * (1 - timeFraction))) / 2;
    }
  }


  function bounce(timeFraction) {
    for (let a = 0, b = 1, result; 1; a += b, b /= 2) {
      if (timeFraction >= (7 - 4 * a) / 11) {
        return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
      }
    }
  }

  let bounceEaseInOut = makeEaseInOut(bounce);

  brick.onclick = function() {
    animate({
      duration: 3000,
      timing: bounceEaseInOut,
      draw: function(progress) {
        brick.style.left = progress * 500 + 'px';
      }
    });
  };
  function animateText(textArea) {
    let text = textArea.value;
    let to = text.length,
      from = 0;

    animate({
      duration: 5000,
      timing: bounce,
      draw: function(progress) {
        let result = (to - from) * progress + from;
        textArea.value = text.substr(0, Math.ceil(result))
      }
    });
  }


  function bounce(timeFraction) {
    for (let a = 0, b = 1, result; 1; a += b, b /= 2) {
      if (timeFraction >= (7 - 4 * a) / 11) {
        return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
      }
    }
  }
  function fillList() {
	x = document.getElementById("Theoria");
	for (i=0;i<=200;i++) {
		option = document.createElement("option");
		a=i/10;
		option.text = a;
		x.add(option);
	}
	x = document.getElementById("Ergastirio");
	for (i=0;i<=200;i++) {
		option = document.createElement("option");
		a=i/10;
		option.text = a;
		x.add(option);
	}
}
function vresMO() {
	AT=parseFloat(document.getElementById("Theoria").value);
BT=parseFloat(document.getElementById("Ergastirio").value);
	MO=(AT+BT)/2;
	MO=(Math.ceil(MO*10)/10).toFixed(1);
	document.getElementById("moDiv").innerHTML="Μέσος Όρος="+MO;
}
//function that display value
function dis(val)
{
    document.getElementById("result").value+=val
}

//function that evaluates the digit and return result
 function solve()
{
    let x = document.getElementById("result").value
    let y = eval(x)
    document.getElementById("result").value = y
}
 
//function that clear the display
 function clr()
{
    document.getElementById("result").value =""
}