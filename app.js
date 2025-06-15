
let input=document.querySelector("input");
let btn =document.querySelector("button");
let task=document.querySelector(".tasks");
let p =document.querySelector("p");

function addtask(){
   if(input.value === ''){
      alert('add your task');
    }else
    {
       let newitem = document.createElement("div");
       newitem.classList.add("item");
       newitem.innerHTML=  `
                        <p> ${input.value} </p>
                         <div class="item-btn">
                           
                           <i class="fa-solid fa-trash"></i>
                         </div>`
                         task.appendChild(newitem);
                         input.value=''; 
                         saveData()
    }
}
  
btn.addEventListener("click",addtask);
   
 
input.addEventListener("keydown",(e)=>{
  if(e.key === 'Enter'){
    addtask();
  }
});  



 


 
//to delete the task 

task.addEventListener("click",(e)=>{
  if(e.target.classList.contains("fa-trash")){
    e.target.parentElement.parentElement.remove();
    saveData()
  }
 
})


// task.addEventListener("click",(e)=>{
//    if(e.target.classList.contains("checkbox")){
//     const taskcheck=e.target.parentElement;
//     taskcheck.classList.toggle("checked");
//     saveData()
//   }
  
// })

task.addEventListener("click",(e)=>{
  if(e.target.tagName === "p" || e.target.closest("p")){
    let targetpara=e.target.tagName === "p"?e.target:e.target.closest("p")
    targetpara.classList.toggle("checked");
    saveData()
  }
})


function saveData(){
  localStorage.setItem("tasks",task.innerHTML);

}

function  showData(){
  task.innerHTML=localStorage.getItem("tasks")
}

showData()