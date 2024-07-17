# projects Related to DOM

##Project link
[click here]

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<link rel="stylesheet" href="style.css">
<!-- <link rel="stylesheet" href="../style.css"> -->


</script>
<body>
<nav>
    <!-- <div class="navbox"></div> -->
   <a href="/" area-current="page"><span id="Home">Home</span></a></div>
   <!-- <div class="navbox"> -->
    <a target="_blank" href="https://www.youtube.com"><span id="yt">Youtube channel</span></a> </div>
</nav>
<!-- <div class="canvas"> -->
<h1>Pick Backgroud Colour</h1>

<span class="button" id="Grey">Grey</span>
<span class="button" id="Green">Green</span>
<span class="button" id="Orange">Orange</span>
<span class="button" id="Blue">Blue</span>

<h2>please Click on Button to Change Background</h2>
<form action="">
    <input type="submit" value="Reset">
</form>
</div>
<!-- <script href="colorChanger.js"></script> -->
<script>
const buttons=document.querySelectorAll('.button');
    //  console.log(buttons);
    const body=document.querySelector('body');
    // console.log(body);
    buttons.forEach(function(button){
        // console.log(button);
        button.addEventListener('click',function(e){
            // console.log(e);
            console.log(e.target);

            if(e.target.id==='Green'){
                body.style.backgroundColor=e.target.id;
            }
            if(e.target.id==='Grey'){
                body.style.backgroundColor=e.target.id;
            }
            if(e.target.id==='Blue'){
                body.style.backgroundColor=e.target.id;
            }
            if(e.target.id==='Orange'){
                body.style.backgroundColor=e.target.id;
            }

        })



    })</script>

</body>
</html>


```

