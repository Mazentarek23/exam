let w =$(".nav-tab").outerWidth();
$(".all-nav").css("left",`-${w}px`)

$(".bars").on("click",function(){
    let w =$(".nav-tab").outerWidth();
    let left =$(".all-nav").css("left")
   
    if (left=="0px")
    {
        $(".all-nav").animate({left:`-${w}px`},800)
        document.getElementById("bars").classList.remove("fa-xmark")
        document.getElementById("bars").classList.add("fa-bars")
    }
else{
    $(".all-nav").animate({left:0},800)
   document.getElementById("bars").classList.add("fa-xmark")
   document.getElementById("bars").classList.remove("fa-bars")

}
    
})

// end of nav


function index(){
let arr =[]
var x= new XMLHttpRequest()
x.open("get",`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
x.send()
x.addEventListener("readystatechange",function (){
    if (x.readyState==4&&x.status==200){
        arr=JSON.parse(x.response).meals
        
         indexData()
    }
})

function indexData() {
    let temp=``
    for (let i=0;i<20;i++)
    {
        temp +=`<div class="mael col-3 position-relative">
        <div  >
            <div class="anim position-relative" >
             <div class="image">
              <img src=" ${arr[i].strMealThumb}"  class="w-100 rounded-2" alt="">
             
              <div class="layerr rounded-2 d-flex align-items-center">
               
               <span class="h2 text-black ms-1">
                ${arr[i].strMeal}
               </span>

              </div>
             </div>
            </div>
         
          </div>
           
    </div>`
    }
    
    document.getElementById("card1").innerHTML=temp
    
}

}

// end index data
// www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata
function searchInputValue() {
    let value=document.getElementById("name").value

    getSearchDataName(value)
}

function searchInputValueLetter() {
    let value2=document.getElementById("letter").value

    getSearchDataletter(value2)
}



   function search() {
    window.open("../pages/search.html","_self")
   }


function getSearchDataName(name) {
 
    let arr1 =[]
var v= new XMLHttpRequest()
v.open("get",`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
v.send()
v.addEventListener("readystatechange",function (){
    if (v.readyState==4&&v.status==200){
        arr1=JSON.parse(v.response).meals
        
        SearchDataName()
          
         
    }
})

function SearchDataName() {
        let temp1=``
        for (let i=0;i<arr1.length;i++)
        {
            temp1 +=`<div class="mael col-3 position-relative">
            <div  >
                <div class="anim position-relative" >
                 <div class="image">
                  <img src=" ${arr1[i].strMealThumb}"  class="w-100 rounded-2" alt="">
                 
                  <div class="layerr rounded-2 d-flex align-items-center">
                   
                   <span class="h2 text-black ms-1">
                    ${arr1[i].strMeal}
                   </span>
    
                  </div>
                 </div>
                </div>
             
              </div>
               
        </div>`
        }
        console.log(temp1);
        document.getElementById("card2").innerHTML=temp1
        
    }


}



// letter



function getSearchDataletter(letter) {
    let arr1 =[]
var v= new XMLHttpRequest()
v.open("get",`https://www.themealdb.com/api/json/v1/1/search.php?s=${letter}`)
v.send()
v.addEventListener("readystatechange",function (){
    if (v.readyState==4&&v.status==200){
        arr1=JSON.parse(v.response).meals
        
        SearchDataletter()
          
         
    }
})

function SearchDataletter() {
        let temp1=``
        for (let i=0;i<arr1.length;i++)
        {
            temp1 +=`<div class="mael col-3 position-relative">
            <div  >
                <div class="anim position-relative" >
                 <div class="image">
                  <img src=" ${arr1[i].strMealThumb}"  class="w-100 rounded-2" alt="">
                 
                  <div class="layerr rounded-2 d-flex align-items-center">
                   
                   <span class="h2 text-black ms-1">
                    ${arr1[i].strMeal}
                   </span>
    
                  </div>
                 </div>
                </div>
             
              </div>
               
        </div>`
        }
     
        document.getElementById("card2").innerHTML=temp1
        
    }



}



// categories
function categoriesopen() {
    window.open("../pages/categories.html","_self")
}



  
let arr3 =[]
var o= new XMLHttpRequest()
o.open("get",`https://www.themealdb.com/api/json/v1/1/categories.php`)
o.send()
o.addEventListener("readystatechange",function (){
    if (o.readyState==4&&o.status==200){
        arr3=JSON.parse(o.response).categories
        
         
          
        categoriesData()
    }
})

function categoriesData() {
    let temp=``
    for (let i=0;i<arr3.length;i++)
    {
        temp +=`<div class="mael col-3 position-relative"> 
        <div  >
        <div class="anim position-relative">
         <div class="image">
          <img src="${arr3[i].strCategoryThumb}"  class="w-100 rounded-2" alt="">
         
          <div class="layerr rounded-2 d-flex flex-column align-items-center">
           
           <span class="h2 text-black ms-1">
           ${arr3[i].strCategory}
           </span>
           <p class="text-center">${arr3[i].strCategoryDescription}</p>

          </div>
         </div>
        </div>
     
      </div>
      </div>`
    }
    
    document.getElementById("card3").innerHTML=temp
    
}




// area
function areao(){
    window.open("../pages/area.html","_self")
}

let arr4 =[]
var q= new XMLHttpRequest()
q.open("get",`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
q.send()
q.addEventListener("readystatechange",function (){
    if (q.readyState==4&&q.status==200){
        arr4=JSON.parse(q.response).meals
        
       
          
        area()
    }
})

function area() {
    let temp2=``
    for (let i=0;i<arr4.length;i++)
    {
        temp2 +=`<div class="col-md-3">
        <div  class="rounded-2 text-center cursor-pointer">
                <i class="fa-solid fa-house-laptop fa-4x text-white"></i>
                <h3 class="text-white"  >${arr4[i].strArea}</h3>
        </div>
    </div>`
    }
    
    document.getElementById("card4").innerHTML=temp2
    
}

//ingredients
function contacts(){
    window.open("../pages/contact_us.html","_self")
}

function meals55() {
    window.open("../pages/meals.html")
    
}
//////////////////////





function ingredientsopen(){
    window.open("../pages/ingredients.html","_self")
}

let arr5 =[]
var u= new XMLHttpRequest()
u.open("get",`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
u.send()
u.addEventListener("readystatechange",function (){
    if (u.readyState==4&&u.status==200){
        arr5=JSON.parse(u.response).meals
        
       
          
        ingredients()
    }
})

function ingredients() {
    let temp=``
    
    for (let i=0;i<20;i++)
    {

        temp +=` <div class="col-md-3 cursor-pointer" onclick="ingredientsmeals('${arr5[i].strIngredient}');meals55()" >
        <div  class="rounded-2 text-center cursor-pointer">
                <i class="fa-solid fa-drumstick-bite fa-4x text-white"></i>
                <h3 class="text-white">${arr5[i].strIngredient}</h3>
                <p class="text-white">${(arr5[i].strDescription).slice(0,110)}</p>
        </div>
</div>`
    }

    document.getElementById("card5").innerHTML=temp
    
}





function ingredientsmeals(x){
   
    let arr6 =[]
var r= new XMLHttpRequest()
r.open("get",`https://www.themealdb.com/api/json/v1/1/filter.php?i=${x}`)
r.send()
r.addEventListener("readystatechange",function (){
    if (r.readyState==4&&r.status==200){
        arr6=JSON.parse(r.response).meals
           
        display()
    }
})


function display() {
    let temp5=``
    for (let i=0;i<arr6.length;i++)
    {
        temp5 +=`<div class="mael col-3 position-relative"> 
        <div  >
        <div class="anim position-relative">
         <div class="image">
          <img src="${arr6[i].strMealThumb}"  class="w-100 rounded-2" alt="">
         
          <div class="layerr rounded-2 d-flex flex-column align-items-center">
           
           <span class="h2 text-black ms-1">
           ${arr6[i].strMeal}
           </span>
           

          </div>
         </div>
        </div>
     
      </div>
      </div>`
    }
console.log(temp5);
  
  document.getElementById("c").innerHTML=temp5
}


 
}
//////////////////////////////////////////////////////////////