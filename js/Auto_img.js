var imgtag = document.getElementById("slideshow");
var imgarr= ["../assets/design_template_img1.jpg","../assets/design_template_img2.jpg","../assets/design_template_img3.jpg","../assets/design_template_img4.jpg","../assets/design_template_img5.jpg"];
var i = 0;
function slideshow_auto(){
    imgtag.setAttribute("src", imgarr[i]);
    i++;
    if(i==imgarr.length) i=0;
}
setInterval(slideshow_auto,2000);

var imgtag1 = document.getElementById("slideshow1");
var imgarr1= ["../assets/design_template_img1.1.jpg","../assets/design_template_img1.2.jpg","../assets/design_template_img1.3.jpg","../assets/design_template_img1.4.jpg"];
var n = 0;
function slideshow_auto1(){
    imgtag1.setAttribute("src", imgarr1[n]);
    n++;
    if(n==imgarr1.length) n=0;
}
setInterval(slideshow_auto1,3000);

var imgtag2 = document.getElementById("slideshow2");
var imgarr2= ["../assets/design_template_img2.1.jpg","../assets/design_template_img2.2.jpg","../assets/design_template_img2.3.jpg","../assets/design_template_img2.4.jpg"];
var m = 0;
function slideshow_auto2(){
    imgtag2.setAttribute("src", imgarr2[m]);
    m++;
    if(m==imgarr2.length) m=0;
}
setInterval(slideshow_auto2,2000);

var imgtag3 = document.getElementById("slideshow3");
var imgarr3= ["../assets/design_template_img3.2.jpg","../assets/design_template_img3.1.jpg","../assets/design_template_img3.3.jpg","../assets/design_template_img3.4.jpg"];
var t = 0;
function slideshow_auto3(){
    imgtag3.setAttribute("src", imgarr3[t]);
    t++;
    if(t==imgarr3.length) t=0;
}
setInterval(slideshow_auto3,2000);

var imgtag4 = document.getElementById("slideshow4");
var imgarr4= ["../assets/design_template_img4.1.jpg","../assets/design_template_img4.2.jpg","../assets/design_template_img4.3.jpg","../assets/design_template_img4.4.jpg"];
var a = 0;
function slideshow_auto4(){
    imgtag4.setAttribute("src", imgarr4[a]);
    a++;
    if(a==imgarr4.length) a=0;
}
setInterval(slideshow_auto4,2000);

var imgtag5 = document.getElementById("slideshow5");
var imgarr5= ["../assets/design_template_img5.1.jpg","../assets/design_template_img5.2.jpg","../assets/design_template_img5.3.jpg","../assets/design_template_img5.4.jpg"];
var p = 0;
function slideshow_auto4(){
    imgtag5.setAttribute("src", imgarr5[p]);
    p++;
    if(p==imgarr5.length) p=0;
}
setInterval(slideshow_auto5,2000);