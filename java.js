// var imgContainer =document.getElementById('ImageID')
// var imgchange = document.querySelectorAll('.img-change')
// for( var i=0 ; i<imgchange.length ; i++){
//     imgchange[i].addEventListener('click',function (e){
//         // console.log(e.target.getAttribute('src'));
//         var imageSrc=e.target.getAttribute('src')
//         imgContainer.setAttribute('src',imageSrc)
//     })
// }
// {/* <div class="containerImage">
// <img class="w-100" src="iamge/hans-leuzinger-dB8BBD3V61o-unsplash.jpg" id="ImageID" alt="">
// <img class="img-change w-25" src="iamge/pavithra-salla-10REOQm0Xzc-unsplash.jpg" alt="">
// <img class="img-change w-25" src="iamge/pavithra-salla-QS_pChQcql4-unsplash.jpg" alt="">
// <img class="img-change w-25" src="iamge/thiva-xHFaTSIqOdA-unsplash.jpg" alt="">
// </div> */}

var containerBox= document.getElementById('containerBox')
var imgbox=document.getElementById('imgBox')
var imagesList=Array.from(document.querySelectorAll('.col-md-4 img'))
var prevBtn=document.getElementById('prevBtn')
var closeBtn=document.getElementById('closeBtn')
var nextBtn=document.getElementById('nextBtn')
var currentIndex;


for (var i =0; i<imagesList.length; i++){
    imagesList[i].addEventListener('click',function(e) {
        console.log("hello");
        containerBox.classList.remove('d-none') 
        currentIndex=imagesList.indexOf(e.target)
        var currentImgSrc=e.target.getAttribute('src')
        imgbox.style.backgroundImage = `url(${currentImgSrc})`

    })
}

function nextslide() {
    currentIndex++
    currentIndex>= imagesList.length?currentIndex=0:''
    console.log(imagesList[currentIndex].getAttribute('src'));
    var newImgSrc =imagesList[currentIndex].getAttribute('src')
    imgBox.style.backgroundImage = `url(${newImgSrc})`

}
nextBtn.addEventListener('click' ,nextslide)
// function prevSlide(){
//     currentIndex--
//     currentIndex ==0?currentIndex = imagesList.length -1:''
//     console.log(imagesList[currentIndex].getAttribute('src'));
//     var newImgSrc =imagesList[currentIndex].getAttribute('src')
//     imgBox.style.backgroundImage = `url(${newImgSrc})`

// }
// prevBtn.addEventListener('click' ,prevSlide)
