var imgtag = document.getElementById("slideshow");
var imgarr= ["../assets/design_template_img1.jpg","../assets/design_template_img2.jpg","../assets/design_template_img3.jpg","../assets/design_template_img4.jpg","../assets/design_template_img5.jpg"];
var i = 0;
function slideshow_auto(){
    imgtag.setAttribute("src", imgarr[i]);
    i++;
    if(i==imgarr.length) i=0;
}
setInterval(slideshow_auto,3000);

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
setInterval(slideshow_auto2,3000);