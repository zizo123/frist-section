
// var userid = 10
// var usersystem =18
// if (userid == usersystem)
// {
// console.log('You Can add , update , delete');
// }
// else {
//     console.log('sorryyy');
// }

// var userid =10
// var usersystem= 10
// switch (userid){
//     case 16:
//      console.log('add')
//      break;
// default:
// console.log('not');
// }

// for ()
// {
//     console.log('hello');
// }
// var carton =``
// for ( var i=0; i<10; i++)
// {
//     carton += `<div class="col-md-4">
//     <div class="item">
//         <img class="w-100" src="1.jpg" alt="">
//     </div>`
// }

// document.getElementById('demo').innerHTML = carton
function insert(num){
    var myString = document.form.textview.value;
    var lastChar = myString[myString.length - 1];
    if (myString.length < 30) {
     if (!isNaN(lastChar) || lastChar == null || !isNaN(num)) {
      document.form.textview.value = myString + num;
     }else if(num != lastChar){
      document.form.textview.value = myString.replace(lastChar, num);
     }
    }
   }
   function equal(){
    var sum = document.form.textview.value;
    if (sum) {
     document.form.textview.value = eval(sum);
    }
   }
   function clean(){
    document.form.textview.value = '';
   }
   function back(){
    var exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0,exp.length - 1);
   }