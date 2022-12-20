var doublescore =document.getElementById('x').value;
// chargrade ;
function bh()
{
if (doublescore>=95){
    document.getElementById('y').innerHTML = "a";

}
else if ( doublescore>=80){
    document.getElementById('y').innerHTML  = "b";

}
else if ( doublescore>=70){
    document.getElementById('y').innerHTML  = "c";

}
else if ( doublescore>=60){
    document.getElementById('y').innerHTML  = "d";


}
else if ( doublescore>=50){
    document.getElementById('y').innerHTML  = "f";


}
else {
    document.getElementById('y').innerHTML  = "faild";
}
}
for(var i=0 ; i<10 ; i++){
        cartoon +=`<div class="col-md-4">
        <div class="item">
            <img class="w-100" src="assets/img/2.jpg" alt="">
            <div class="caption p-2">
                <h3>Article 1</h3>
                <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, rem.</p>
                <button class="btn btn-outline-danger w-100">Add To Cart</button>
            </div>
        </div>
    </div>`
        // console.log(cartoon);
    }
    document.getElementById('demo').innerHTML = cartoon
    