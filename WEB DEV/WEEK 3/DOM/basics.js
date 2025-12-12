// dom is a method to access the html objects in js and to make changes dynamically
//SELECT WITH ID
let element_by_id=document.getElementById("heading"); // ye h1 ki value return krta hai
console.dir(element_by_id);
 
//Select with class  => agar multiple elements ko same elements ke andar dalna chate hai toh hum class use krte hai
//it gives an html collection which is similar to an array
let element_by_classname= document.getElementsByClassName("nw");
console.dir(element_by_classname);

//QUERY SELECTOR
let firstel =  document.querySelector(".nw") // for first element , in id we always use queryselector
console.dir(firstel);
let allelements= document.querySelectorAll(".nw") // for all element
console.dir(allelements);
//for id = #id , for class = .class
                                    //PROPERTIES

                                    //1. tagname = return tag for element node ex = button, p , h1
                                    //2.innerText = return the text contents of the element and all its children
                                    


