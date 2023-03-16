const imgArray =[
    "./images/news-1.png",
    "./images/news-2.png",
    "./images/news-3.png",
];

let imgIndex =0;
let img = document.getElementById("image");

setInterval(()=>{
    if(imgIndex===imgArray.length){
        imgIndex=0;
    }
    
    img.setAttribute("src",imgArray[imgIndex]);

    imgIndex++;
    
},1000);