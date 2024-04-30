<!--  add  template  -->
<!-- #6c1514- brown
#fcdbb4-  -->
<template>
    <div class="">
        <div class="header">
            <div class="container text-center">
                <div class="row align-content-center">
                    <div class="col-md-12">
                        <h1><a class="brand" href="">Bramamithra</a></h1>
                        <!-- <a class="brand" href=""><img alt="Logo" src="img/logo.jpg"></a> -->
                    </div>
                </div>

                <div class="col-md-12">
                    <!-- <h1> In the name of God, religion, sastras you have duped us</h1> -->

                    <p class="tagline">
                        In the name of God, religion, sastras you have duped us
                    </p>

                    <div class="">
                        <div>
                            <router-link :to="{name: 'login'}"> <button class="log bn">Login</button></router-link>
                            <router-link :to="{name: 'registration'}">
                            <button class="reg bn">Sign up</button></router-link>
                        
                        </div>
                     </div>
                </div>
            </div>
        </div>
        <!-- Header Section End -->
        
        <!-- About Section Start -->
        <div class="about">
            <div class="container">
                <div class="section-header">
                    <h2>About Our App</h2>
                </div>
                <div class="row align-items-center">
                    <div class="col-md-6 img-cols">
                        <div class="img-col">
                            <div class="img">
                                <img src="https://i.pinimg.com/564x/6b/74/a0/6b74a0bb95d053b0721c7b4d63313d12.jpg">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 content-cols">
                        <div class="content-col content-col-1">
                            <h3>Brahmin matrimony</h3>
                            <p>
                                BrahminMatrimony - The No. 1 & most successful Brahmin Matrimony Site from Bramamithra.com.
                            </p>
                            <p>
                                Nam fringilla justo justo. Proin sodales bibendum pharetra. Aliquam blandit sapien eu nisl dictum pretium. Proin ac orci et ipsum vehicula rutrum eget.
                            </p>
                            <a href="https://htmlcodex.com">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- About Section End -->
        
        <!-- Feature Section Start -->
        <div class="feature">
            <div class="container">
                <div class="section-header">
                    <h2>Features</h2>
                </div>
                <div class="row align-items-center text-center">
                    <div class="col-md-3 col-sm-12">
                        <div class="f-item">
                            <a href="https://htmlcodex.com"><i class="fa fa-adjust"></i></a>
                            <h3>Product</h3>
                            <p>Brahmins Foods is a food product-based company in Kerala. Brahmins group is a well-known manufacturer and supplier of multiple food products</p>
                        </div>
                        <div class="f-item">
                            <a href=""><i class="fa fa-headphones"></i></a>
                            <h3>Brahmin matrimony</h3>
                            <p>  BrahminMatrimony - The No. 1 & most successful Brahmin Matrimony Site from Bramamithra.com.</p>
                        </div>
                    </div>
                    <div class="col-md-6 d-none d-md-block">
                        <div class="f-img">
                            <img src="https://images.unsplash.com/photo-1605378229010-11aedbb01b24?q=80&w=1390&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Mobile Image" />
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-12">
                        <div class="f-item">
                            <a href=""><i class="fa fa-wifi"></i></a>
                            <h3>communication</h3>
                            <p>Lorem ipsum dolor sit amet adipiscing elit. Mauris vitae neque tristique diam</p>
                        </div>
                        <div class="f-item">
                            <a href="https://htmlcodex.com"><i class="fa fa-volume-up"></i></a>
                            <h3>Lorem ipsum</h3>
                            <p>Lorem ipsum dolor sit amet adipiscing elit. Mauris vitae neque tristique diam</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Feature Section End -->

        <!-- Subscribe Section Start -->
        <div class="subscribe">
            <div class="container">
                <div class="section-header">
                    <h2>Newsletter</h2>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="subscribe-form">
                            <form>
                                <input type="email" required="required" placeholder="Enter your email here" />
                                <button>submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="popup-wraper subscription">
            <div class="popup whitish high-opacity">
                <a class="popup-closed" href="#" title=""><i class="fa fa-close"></i></a>
                <div class="popup-bg" style="background-image:url(images/resources/deal-popup-bg.jpg);"></div>
                <div class="sub-popup">
                    <h4> <span>Your Spiritual Haven</span></h4>
                    <p>Welcome to Bamamithra – a sacred space where spirituality meets modernity. Immerse yourself in the wisdom of our heritage, explore enriching content, and partake in a divine journey of self-discovery. Join us in the pursuit of higher consciousness!</p>

                    <form method="post">
                        <router-link :to="{name: 'login'}">
                            <button  data-ripple=""><i class="fa fa-sign-in "></i> Login</button>
                        </router-link>
                        <router-link :to="{name: 'registration'}">
                            <button data-ripple=""><i class="fa fa-user-plus"></i> Registration</button>
                        </router-link>
                    </form>
                </div>
            </div>
        </div><!-- page onload popup -->
    </div>

</template>

<style>/* ================================================= */
/* ------------------ General CSS ------------------ */
/* ================================================= */






.bn {
  cursor: pointer;
  border: 0;
  border-radius: 4px;
  font-weight: 600;
  margin: 0 10px;
  width: 200px;
  padding: 10px 0;
  box-shadow: 0 0 20px rgba(104, 85, 224, 0.2);
  transition: 0.4s;
}

.reg {
  color: white;
  background-color: #6c1514;
}

.log {
    color: #383737;
    background-color: #fcdbb4;
 
 
}

button:hover {
  color: white;
 
  box-shadow: 0 0 20px rgba(104, 85, 224, 0.6);
  background-color: #6c1514;
}



* {
    box-sizing: border-box;
}

body {
    color: #222222;
    font-family: 'Montserrat', sans-serif;
    font-weight: 100;
    background: #ffffff;
}

a {
    color: #6c1514;
    transition: 0.3s;
}

a:hover,
a:active,
a:focus {
    color: #222222;
    outline: none;
    text-decoration: none;
}

p {
    color: #222222;
    font-size: 16px;
    font-weight: 200;
    line-height: 22px;
    padding: 0;
    margin: 0 0 15px 0;
}

h2 {
    margin: 0;
    padding: 0;
    color: #222222;
    font-weight: 200;
}

@media (max-width: 767.98px) {
    h2 {
        font-size: 26px;
    }
}

@media (max-width: 575.98px) {
    h2 {
        font-size: 18px;
    }
}

/* ================================================= */
/* ------------------ Header Style ----------------- */
/* ================================================= */

.header {
    display: table;
    position: relative;
    background-image: url(https://images.unsplash.com/photo-1597157639073-69284dc0fdaf?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
    background-size: cover;
    padding: 100px 0;
    color: #fff;
    width: 100%;
    height: 100vh;
}

.header:after {
    content: '';
    z-index: 0;
    position: absolute;
    background: rgb(255 255 255 / 52%);
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
}

.header .container {
    position: relative;
    z-index: 1;
    text-align: center;
    display: table-cell;
    vertical-align: middle;
    width: 100%;
}

.header .brand {
    font-size: 75px;
    font-weight: 100;
    margin-bottom: 35px;
    display: inline-block;
    text-transform: uppercase;
    letter-spacing: 10px;
}

.header .brand:before {
    content: '';
    position: absolute;
    width: 150px;
    height: 1px;
    top: 0;
    left: calc(50% - 75px);
    background: #fcdbb4;
}

.header .brand:after {
    content: '';
    position: absolute;
    width: 150px;
    height: 1px;
    bottom: 42px;
    left: calc(50% - 75px);
    background: #fcdbb4;
}

.header .brand:hover {
    color: #222222;
}

.header .brand:hover img {
    opacity: .9;
}

.header h1 {
    font-size: 50px;
    font-weight: 100;
    color: #222222;
    letter-spacing: 2px;
}

.header .tagline {
    font-size: 18px;
    font-weight: 200;
    line-height: 14px;
    margin-bottom: 60px;
    color: #2422229e;
}

.header .btn img {
    max-width: 200px;
    border-radius: 5px;
}

@media (max-width: 61.9em) {
    .header {
        padding: 75px 0;
    }
    
    .header h1 {
        font-size: 2.2rem;
    }

    .header .brand {
        font-size: 3rem;
        margin-bottom: 35px;
    }

    .header .tagline {
        margin: 35px 0;
        font-size: 22px;
        line-height: 28px;
    }
}

/* ================================================= */
/* -------------- Section Header Style ------------- */
/* ================================================= */

.section-header {
    position: relative;
    text-align: center;
    margin-bottom: 60px;
}

.section-header h2 {
    color: #6c1514;
    font-size: 45px;
    font-weight: 100;
}

.section-header::before {
    position: absolute;
    content: '';
    height: 1px;
    width: 150px;
    bottom: -10px;
    left: calc(50% - 75px);
    background: #6c1514;
}

@media (max-width: 767.98px) {
    .section-header h2 {
        font-size: 35px;
    }
}

@media (max-width: 575.98px) {
    .section-header h2 {
        font-size: 25px;
    }
}

/* ================================================= */
/* ------------------ About Style ------------------ */
/* ================================================= */

.about {
    position: relative;
    padding: 45px 0 60px 0;
    background: #ffffff;
}

.about .img-col,
.about .content-col {
    position: relative;
    overflow: hidden;
    border-radius: 5px;
}

.about .img-col img {
    width: 100%;
    border-radius: 5px;
    transition: .3s;
}

.about .img-col:hover img {
    transform: scale(1.1);
}

.about .content-col h3 {
    font-weight: 100;
    margin-bottom: 15px;
}

@media (max-width: 767.98px) {
    .about .content-col {
        text-align: center;
    }
    
    .about .content-col h3 {
        margin-top: 15px;
    }
}

.about .content-col p {
    font-size: 16px;
    line-height: 25px;
    font-weight: 200;
    margin-bottom: 20px;
}

.about .content-col a {
    display: inline-block;
    background-color: #fcdbb4;
    font-weight: 200;
    color: #282727;
    padding: 10px 30px;
    border-radius: 5px;
    text-transform: uppercase;
}

.about .content-col a:hover {
    background-color: #222222;
    color: #6c1514;
}

.about .content-col a:focus {
    color: #ffffff;
}

/* ================================================= */
/* ---------------- Subscribe Style ---------------- */
/* ================================================= */
.feature {
    position: relative;
    padding: 45px 0 60px 0;
    width: 100%;
    background: #f7f7f7;
}

.feature .f-item {
    position: relative;
    margin-bottom: 30px;
}

.feature .f-item a {
    width: 80px;
    height: 80px;
    padding: 9px;
    display: inline-block;
    box-shadow: 0 0 5px #999999;
    border-radius: 80px;
    font-size: 40px;
    margin-bottom: 15px;
}

.feature .f-item h3 {
    font-size: 16px;
    font-weight: 200;
    text-transform: uppercase;
}

.feature .f-img {
    position: relative;
    padding: 15px;
    display: inline-block;
    box-shadow: 0 0 5px #999999;
    border-radius: 20px;
}

.feature .f-img img {
    max-height: 500px;
}

/* ================================================= */
/* ---------------- Subscribe Style ---------------- */
/* ================================================= */
.subscribe {
    position: relative;
    text-align: center;
    padding: 45px 0 60px 0;
    background-image: url(../img/subscribe-bg.jpg);
    background-size: cover;
}

.subscribe:after {
    content: '';
    z-index: 0;
    position: absolute;
    background: rgba(0, 0, 0, 0.85);
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
}

.subscribe .container {
    position: relative;
    z-index: 1;
}

.subscribe .section-header h2 {
    color: #ffffff;
}

.subscribe .section-header::before {
    background: #ffffff;
}

.subscribe .subscribe-form {
    position: relative;
    max-width: 525px;
    width: 100%;
    margin: auto;
}

.subscribe .subscribe-form input[type="email"] {
    width: 100%;
    border: 1px solid #fff;
    border-radius: 5px;
    height: 50px;
    line-height: 24px;
    padding: 12px 30px;
    background-color: transparent;
    color: #ffffff;
    font-size: 16px;
    font-weight: 100;
}

.subscribe .subscribe-form input[type="email"]:focus {
    box-shadow: none;
    outline: 0 none;
}

@media only screen and (max-width: 479px) {
    .subscribe .subscribe-form input[type="email"] {
        text-align: center; 
    } 
}

input::-webkit-input-placeholder,
input:-moz-placeholder,
input::-moz-placeholder,
input:-ms-input-placeholder,
input::-ms-input-placeholder { 
    color: white; 
}

.subscribe .subscribe-form button {
    color: #6c1514;
    font-size: 22px;
    font-weight: 200;
    height: 50px;
    position: absolute;
    right: 0;
    top: 0;
    line-height: 1px;
    padding: 5px 30px 8px 30px;
    margin-right: -1px;
    border-radius: 5px;
    background: #ffffff;
    border: none;
    text-transform: capitalize;
    cursor: pointer;
    transition: all .3s;
}

.subscribe .subscribe-form button:hover {
    color: #ffffff;
    background: #fcdbb4;
}

.subscribe .subscribe-form button:focus {
    box-shadow: none;
    outline: 0 none;
}


@media only screen and (max-width: 479px) {
    .subscribe .subscribe-form button {
        position: static;
        margin-top: 15px;
        width: 100%; 
    } 
}

/* ================================================= */
/* ------------------ Footer Style ----------------- */
/* ================================================= */

.footer {
    position: relative;
    padding: 25px 0 25px 0;
    text-align: center;
    background: #ffffff;
}

.footer img {
    max-width: 200px;
    border-radius: 5px;
}</style>

<script setup>


</script>
