var myhttp = new XMLHttpRequest()
myhttp.open(`GET`,`https://newsapi.org/v2/top-headlines?country=eg&category=business&apiKey=69e7c68c085f465da6e1a350121ce07a`)
myhttp.send()
var container 
myhttp.addEventListener(`readystatechange`, function(){

    if(myhttp.readyState ==4){
        var myrespos =JSON.parse(myhttp.response)
        container =myrespos.articles
        display()
        // console.log(container);
    }
})


function display(){
var cartoon =`` 

for( var i=0 ; i<container.length ;i++) {

    container[i].urlToImage!==null? 


cartoon += ` <div class="col-md-4 p-3">
<div class="post">
<h2>${container[i].title.split('').splice(0,3).join('')}</h2> 
</div>
<div class="caption">
    <p>${container[i].description}</p>
    <img class='w-100' src=${container[i].urlToImage}></img>
    <a href ='${container[i].url}' class='btn btn-outline-danger'>More</a>
</div>
</div>
`:''
}
document.getElementById('showId').innerHTML =cartoon
}