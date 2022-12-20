var doublescore =document.getElementById('x').value;
// chargrade ;
function bh(){
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