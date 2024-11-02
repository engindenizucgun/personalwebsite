*{
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    box-sizing: border-box;

}
p {
    text-shadow: 2px 2px #000000;
  }

h1 {
    font-size: 24px;
    text-shadow: 3px 3px #000000;
  }
  
  body{
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;700&display=swap');

    body {
      background-color: #131316;
      color: #ffffff;
      font-family: 'Poppins', sans-serif;
      padding: 0;
      margin: 0;
    
    }
    
    section {
      display: grid;
      place-items: center;
      align-content: center;
      min-height: 100vh;
      
    
    }    
}
.clock{
    text-align: center;
    text-shadow: 2px 2px #000000;
    font-family: sans-serif;
    color: white;
    font-weight: bold;
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 25px;
}

.videolar{
    text-align: center;

}
.maneki{
    width: 25%;
    height: 25%;
    border-radius: 15px;
}
h5 {
    text-align: center;
}
    

html{
    scroll-behavior:smooth;
}

body {
    background: #080808;
    color: #fff;
    font-size: 20px;


}
#header{
    width: 100%;
    height: 100vh;
    /*background-image: url(images/yeniarkaplan.png);*/
    background-size: cover;
    background-position: center;
}
.container  {
    padding: 10px 10%;

}
nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap:wrap ;
}
.logo{
    width: 140px;
    
}
.hallo {
    font-size: 50px;
    color: #ef950f;
}
.hidden {
    opacity: 0;
    transition: all 5s;
  }
  
  .show {
    opacity: 1;
    transition: all 5s;
  }
nav ul li {
    display: inline-block;
    list-style: none;
    margin: 10px 20px;
}
nav ul li a{
    color: #fff;
    text-decoration: none;
    font-size: 18px;
    position: relative;

}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 1) 100%);
    pointer-events: none; /* Ensure it doesn't block clicks on the content */
}


.back-gif {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
}


nav ul li a::after{
    content: '';
    width: 0;
    height: 3px;
    background: #ffffff;
    position: absolute;
    left: 0;
    bottom: -6px;
    transition: 0.5s;

}
.header-text{
    margin-top: 35%;
    font-size: 35px;

}
.header-text h1{
        font-weight: normal;

    font-size: 100px;
    margin-top: -100px;
}
#about{
    padding: 80px 0;
    color: #fff;
}
.row{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.about-col-1{
    flex-basis: 35%;

}
.about-col-1 img{
    width: 100%;
    border-radius: 15px;
}
.about-col-2{
    flex-basis: 60%;

}
.sub-title{
    font-size: 30px;
    font-weight: 600;
    color: #fff;
    
}
.tab-titles{
    display: flex;
    margin: 20px 0 40px;

}
.tab-links{
    margin-right: 50px;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
    position: relative;
}
.tab-links::after{
    content: '';
    width: 0;
    height: 3px;
    background: #ffffff;
    position: absolute;
    left: 0;
    bottom: -8px;
    transition: 0.5s;
}
.tab-links.active-link::after{
    width: 50%;

}
.tab-contents ul li{
    list-style: none;
    margin: 10px 0;

}
.tab-contents ul li span{
    color: #ffffff;
    font-size: 14px;
}
.tab-contents{
    display: none;
}
.tab-contents.active-tab{
    display: block;
}

.contact-left{
    flex-basis: 35%;
}
.contact-right{
    flex-basis:60%;
}
.contact-left p{
    margin-top: 30px;
}
.contact-left p i{
    color: #ffffff;
    margin-right: 15px;
    font-size: 25px;
}
.social-icons{
    margin-top: 30px;
}
.social-icons a{
    text-decoration: none;
    font-size: 30px;
    margin-right: 15px;
    color: #fff;
    display: inline-block;
    transition: transform 0.5s;
}

.btn.btn2{
    display: inline-block;
    background: #fff;
}
.contact-right form{
    width: 100%;
}
form input, form textarea{
    width: 100%;
    border: 0;
    outline: none;
    background: #ffffff;
    padding: 15px;
    margin: 15px 0;
    color: #000000;
    font-size: 18px;
    border-radius: 6px;
}
form btn2{
    padding: 14px 60px;
    font-size: 18px;
    margin-top: 20px;
    cursor: pointer;
}
.copyright{
    width: 100%;
    text-align: center;
    padding: 25px 0;
    background: #393939;
    font-weight: 300;
    margin-top: 20px;
    font-size: 15px;
}

nav .fa-regular{
    display: none;
}
nav .fa-solid{
    display: none;
}

@media only screen and (max-width: 600px){

    .clock{
        text-align: center;
        text-shadow: 2px 2px #000000;
        font-family: sans-serif;
        color: white;
        font-weight: bold;
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 25px;
    }

    .back-video{
        display: none;
        
            
        }
    
    .header-text{
        margin-top: 100%;
        font-size: 16px;
    }
    .header-text h1{
        font-size: 30px;
    }
    nav .fa-regular{
        display: block;
        font-size: 25px;

    }
    nav .fa-solid{
        display: block;
        font-size: 25px;
        
    }
    nav ul{
        background: #000000;
        position: fixed;
        top: 0;
        right: -200px;
        width: 200px;
        height: 100vh;
        padding-top: 50px;
        z-index: 2;
        transition: right 0.5s;
    }
    nav ul li{
        display: block;
        margin: 25px;

    }
    nav ul .fa-regular{
        position: absolute;
        top: 25px;
        left: 25px;
        cursor: pointer;
    }
    nav ul .fa-solid{
        position: absolute;
        top: 25px;
        left: 25px;
        cursor: pointer;
    }
    .sub-title{
        font-size: 40px;
    }
    .about-col-1, .about-col-2{
        flex-basis: 100%;
    }
    .about-col-1{
        margin-bottom: 30px;
    }
    .about-col-2{
        font-size: 14px;
    }
    .tab-links{
        font-size: 16px;
        margin-right: 20px;

    }
    .contact-left, .contact-right{
        flex-basis: 100%;
    }
    .copyright{
        font-size: 14px;
    }
    

}
