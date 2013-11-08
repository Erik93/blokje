	var scale1 = height / width;
	var scale2 = height / length;
	var scale


	blockwidth = scale1 * 300;
	blockheight = scale2 * 300;
	
	scalewidth = scale1 / 300;
	scalelength = scale2 / 300;








nieuwe versie:

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Naamloos document</title>
<link href="stijl.css" rel="stylesheet" type="text/css" />
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js" > </script>


</head>



<body>

<div id="experiment">
        <div id="cube">
        		<div id="referentie"></div>
                <div class="face one" id="top">
                         top
                </div>
                <div class="face two" id="front">
                        front
                </div>
                <div class="face three" id="rechts">
                     rechts 
                </div>
                <div class="face four" id="achter">
                        achter
                </div>
                <div class="face five" id="links">
                       links
                </div>
                <div class="face six" id="bot">
                      bot
                </div>
        </div>
</div>
 

<form>
	<label>Lengte in mm:<br /> </label><input type="number" name="length" id="length2" placeholder="length in mm" value="30"/> <br />
	<label>Breedte in mm: <br /></label><input type="number" name="width" id="width1" placeholder="width in mm" value="20"/> <br />
 <label>Hoogte in mm:<br /> </label><input type="number" name="height" id="height1" placeholder="height in mm" value="40"/> <br /> <br />
 
 
	<input type="button" id="calc" value="calculate" />
    
</form>




<script>


var props = 'transform WebkitTransform MozTransform OTransform msTransform'.split(' '),
    prop,
    el = document.createElement('div');

for(var i = 0, l = props.length; i < l; i++) {
    if(typeof el.style[props[i]] !== "undefined") {
        prop = props[i];
        break;
    }
}

var xAngle = 0, yAngle = 0;
$('body').keydown(function(evt) {
    switch(evt.keyCode) {
        case 37: // left
            yAngle -= 90;
            break;

 ///       case 38: // up
 ///          xAngle += 90;
///           break;

        case 39: // right
            yAngle += 90;
            break;

  ///    case 40: // down
    ///       xAngle -= 90;
  ///        break;
    };
    document.getElementById('cube').style[prop] = "rotateX("+xAngle+"deg) rotateY("+yAngle+"deg)";
});

   
    //// size button
window.onload = function(){
	var button = document.getElementById('calc');
	button.onclick = calculate;
	calculate();
}


function calculate() {
	var width = document.getElementById('width1').value;
	var length = document.getElementById('length2').value;
	var height = document.getElementById('height1').value;
	
	var block = document.getElementById('cube');

var blockwidth;
var blocklength;
var blockheight;
	
    var zuilhoogtemax = 300;
	

	
	
if (width >= length && width >= height)
  {
	 blockwidth  = 300;
	 blocklength = (length / width) * 300;
	 blockheight = (height / width) * 300;
  }
else if (length >= width && length >= height)
  {

	 blockwidth  = (width / length) * 300;
	 blocklength = 300;
	 blockheight = (height / length) * 300;
	
	 
  }
  
  else if (height >= width && height >= height)
  {
	blockwidth  = (width / height) * 300;
	blocklength = (length / height) * 300;
	blockheight = 300;

  }
  console.log(width, height, length, blockwidth, blockheight);
	

    var top = document.getElementById('top');
	top.style.width=blockwidth+("px");
	top.style.height=blockheight+("px");
    top.style.webkitTransform ="translateX(-"+(blockwidth/2)+"px) translateY(-"+(blockheight/2)+"px) rotateX(-90deg) translateZ(-"+(blockheight/2)+"px) rotateX(180deg)";


    var  front = document.getElementById('front');
	front.style.width = blockwidth+("px");
	front.style.height= blockheight+("px");
	front.style.webkitTransform = "translateX(-"+(blockwidth/2)+"px) translateY(-"+(blockheight/2)+"px) translateZ("+(blockheight/2)+"px)";
	

	
	var  rechts = document.getElementById('rechts');
	rechts.style.width= blockheight+("px");
	rechts.style.height= blockheight+("px");
	rechts.style.webkitTransform = "translateX("+(blockwidth/2)+"px) translateY(-"+(blockheight/2)+"px) rotateY(-90deg) translateZ("+(blockheight/2)+"px)  rotateY(180deg)";


	var  achter = document.getElementById('achter');
	achter.style.width = blockwidth+("px");
	achter.style.height= blockheight+("px");
	achter.style.webkitTransform = "translateX(-"+(blockwidth/2)+"px) translateY(-"+(blockheight/2)+"px) translateZ(-"+(blockheight/2)+"px) rotateY(180deg)";
	

	var  links = document.getElementById('links');
	links.style.width= blockheight+("px");
	links.style.height= blockheight+("px");
	links.style.webkitTransform = "translateX(-"+(blockwidth/2)+"px) translateY(-"+(blockheight/2)+"px) rotateY(90deg) translateZ(-"+(blockheight/2)+"px) rotateY(180deg)";


	
	var  bot = document.getElementById('bot');
	bot.style.width = blockwidth+("px");
	bot.style.height= blockheight+("px");
	bot.style.webkitTransform =  "translateX(-"+(blockwidth/2)+"px) translateY("+(blockheight/2)+"px) rotateX(90deg) translateZ("+(blockheight/2)+"px) rotateX(180deg)";

	

}


</script>


</body>
</html>


