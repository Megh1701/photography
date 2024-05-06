
document.addEventListener("DOMContentLoaded",function(){
    const imageContainer=document.querySelector(".images");
    const preview=document.querySelector(".preview");
    const minimap=document.querySelector(".minimap");

function getElementTop(element){
    let top = 0;
    while(element){
        top +=element.offsetTop;
        element =element.offsetParent;
    }
    return top;
}

const imagesStart = getElementTop(imageContainer);
const imagesEnd = imagesStart+imageContainer.offsetHeight;
const viewportHeight = window.innerHeight;
const previewHeight = preview.offsetHeight;
const previewMaxTranslate = (minimap.offsetHeight - previewHeight)*5.25;

function handleScroll(){
    const scrollPosition = window.scrollY;
    const scrollRange = imagesEnd-imagesStart-viewportHeight;
    const previewScrollRange = Math.min(previewMaxTranslate, scrollRange);

if(scrollPosition >= imagesStart && scrollPosition <= imagesEnd-viewportHeight)
{
let scrollFraction=(scrollPosition-imagesStart)/scrollRange;
let previewTranslateY=scrollFraction*previewScrollRange;

preview.style.transform =`translateX(-50%) translateY(${previewTranslateY}px)`;
const images=document.querySelector(".movepls")
const images2=document.querySelector(".movepls2")
let imagtransition=50+previewTranslateY;

images.animate({
    objectPosition:`0% ${imagtransition*1}% `

},{duration:1000});
images2.animate({
    objectPosition:`0% ${100+imagtransition*1}% `

},{duration:1000});
console.log(previewTranslateY)

}
else if(scrollPosition<imagesStart){
    preview.style.transform="translateX(-50%) translateY(0%)";
    image.style.objectPosition = "0% 100%";
}
else{
    preview.style.transform=`translateX(-50%) translateY(${previewMaxTranslate}px)`;
    image.style.objectPosition = "0% 100%";
}
}

window.addEventListener("scroll",handleScroll);

const togglePoint =window.innerHeight*3.5;
const wrapper =document.querySelector(".main-wrap");

function checkScroll(){
    if(window.scrollY >= togglePoint){
        wrapper.classList.add("light-theme");
    }
    else{
        wrapper.classList.remove("light-theme");
    }
}

window.addEventListener("scroll",checkScroll);


});

