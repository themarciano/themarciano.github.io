<?php 
    include('con.php');
    <?php
        $result = mysql_query("SELECT proyecto, descripcion, fecha, path FROM files, proyectos WHERE proy = proyecto ORDER BY fecha ASC;");
    ?>
?>
<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->
        <link type="text/plain" rel="author" href="humans.txt">
        <link rel="stylesheet" href="css/normalize.css">
        <link rel="stylesheet" href="css/main.css">
        <script src="js/vendor/modernizr-2.6.2.min.js"></script>
    </head>
    <body>
        <!--[if lt IE 8]>
            <p class="browsehappy">Estas usando un navegador <strong>obsoleto!!!</strong>. Te recomendamos <a href="http://browsehappy.com/">actualizar tu navegador</a> para una mejor experiencia &nbsp; :)</p>
        <![endif]-->
        <section id="men">
            <nav>
                <ul>
                    <li><a href="index.html">Volver</a></li>
                </ul>
            </nav>
        </section>
        <section id="works">
            <div class="work">
                <div class="img">
                    <img src="img/uno.jpg">
                </div>
                <div class="cap">
                    <h2><a href="vista.html">Nombre dfdfdfd dfdf dfdf</a></h2>
                </div>
            </div>
            <div class="work">
                <div class="img">
                    <img src="img/uno.jpg">
                </div>
                <div class="cap">
                    <h2><a href="">Nombre dfdfdfd dfdf dfdf</a></h2>
                </div>
            </div>
            <div class="work">
                <div class="img">
                    <img src="img/uno.jpg">
                </div>
                <div class="cap">
                    <h2><a href="">Nombre dfdfdfd dfdf dfdf</a></h2>
                </div>
            </div>
            <div class="work">
                <div class="img">
                    <img src="img/uno.jpg">
                </div>
                <div class="cap">
                    <h2><a href="">Nombre dfdfdfd dfdf dfdf</a></h2>
                </div>
            </div>
        </section>
        <section id="soc">
            <span id="socs">Contact</span>
            <div></div>
            <div></div>
            <div></div>
        </section>
        <section id="cont">
            <div id="clc">Close</div>
            <section>
                <h2>Thanks</h2>
                <h3>You comments will be appreciated</h3>
                <form action="">
                    <label>Name</label>
                    <input type="text">
                    <label>Email</label>
                    <input type="email">
                    <label>Comments</label>
                    <textarea></textarea>
                    <input id="benv" type="button" value="Send">
                </form>
            </section>
        </section>
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.10.2.min.js"><\/script>')</script>
        <script src="js/plugins.js"></script>
        <script src="js/main.js"></script>

        <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
        <script>
            (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
            function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
            e=o.createElement(i);r=o.getElementsByTagName(i)[0];
            e.src='//www.google-analytics.com/analytics.js';
            r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
            ga('create','UA-XXXXX-X');ga('send','pageview');
        </script>
    </body>
</html>
