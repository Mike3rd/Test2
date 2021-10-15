<!DOCTYPE html>
<html>
<title>Mike Turko | Graphic Designer</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<!--<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">-->
<link rel="stylesheet" href="css/w3.css"><!--check for updates or use link above-->
<link rel="stylesheet" id="divi-style-css" href="css/style.css" type="text/css" media="all">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link href="https://fonts.googleapis.com/css?family=Aldrich" rel="stylesheet">

<link rel="icon" href="./images/2021/mtfavicon3_100x100.ico" sizes="32x32">
<link rel="icon" href="./images/2021/mtfavicon3_100x100.ico" sizes="192x192">
<link rel="apple-touch-icon" href="./images/2021/mtfavicon3_100x100.ico">
<meta name="msapplication-TileImage" content="./images/2021/mtfavicon3_100x100.ico">

<!-- Google recaptcha3 mturko.com-->
<script type="text/javascript" src="https://www.google.com/recaptcha/api.js?render=6Le6rMocAAAAAFArZJiGw2OtMRUQl3X_3pcgz__j&#038;ver=3.0" id="google-recaptcha-js"></script>

<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-65757808-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-65757808-1');
</script>
<!-- End Google Tag Manager -->	
<style>
body,h1 {font-family: "Montserrat", sans-serif}
img {margin-bottom: -7px}
.w3-row-padding img {margin-bottom: 12px}
</style>
<script>
// Toggle grid padding
function myFunction() {
  var x = document.getElementById("myGrid");
  if (x.className === "w3-row") {
    x.className = "w3-row-padding";
  } else { 
    x.className = x.className.replace("w3-row-padding", "w3-row");
  }
}

// Open and close sidebar
function w3_open() {
  document.getElementById("mySidebar").style.width = "100%";
  document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}
</script>
<body>
<!-- Sidebar -->
<?php include("sidebar.php"); ?>
<!-- !PAGE CONTENT! -->
<div class="w3-content" style="max-width:1500px">
<!-- Header -->
<div class="w3-opacity">
<span class="w3-button w3-xxlarge w3-white w3-right" onclick="w3_open()"><i class="fa fa-bars"></i></span> 
<div class="w3-clear"></div>
<header class="w3-center w3-margin-bottom">
  <p><a href="/"> <span class="textlogo">Mike Turko</span></a><br>
  <b>Graphic Designer</b></p>
</header>


</div>