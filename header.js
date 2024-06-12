let header = document.getElementById("header-comp");
header.innerHTML = `
<div id="sh">
        <button class="bap" onclick="build()">🔨</button> &nbsp;
        <button class="bap" onclick="bag()">🎒</button>&nbsp;
        <button class="bap" onclick="map()">🧭</button>&nbsp;
        <button class="bap" onclick="mainPlace()">🏠</button>
    </div>
    
    <style>
        .bap{
            font-family: 'Kanit', sans-serif;
            font-size: 17px;
            color:aliceblue;
            background-color: rgba(240, 248, 255, 0);
            border-style: none;
            direction:rtl;
            unicode-bidi: embed;
            
        }
    
        .bap:hover{
            background-color: rgba(50, 245, 144, 0.551);
            font-size: 18px;
        }
    
        #sh{
            direction:rtl;
            unicode-bidi: embed;
      }
        .sw{font-size: 30px;}
    </style>`

function map(){
    window.location.href="../map/map.html"
}

function mainPlace(){
    window.location.href="../mainPlace/mainplace.html"
}

function bag(){
    window.location.href="../bag/bag.html";
}

function build(){
    window.location.href="../bulid/bulid.html"
}