

export default function hamburgerMenu(panel){

   let transit;

   document.addEventListener("click",e=>{
    
         if(e.target.matches(panel)||e.target.matches(".hamburger-box")||e.target.matches(".hamburger-inner")){


                 transit=getComputedStyle(document.documentElement).getPropertyValue("--transition");
        
                 if(transit==="-100%"){
        
                      document.documentElement.style.setProperty("--transition","0%");
                      document.querySelector(".panel-btn").classList.toggle("is-active")
                }
                  if(transit==="0%"){
                    
                     document.documentElement.style.setProperty("--transition","-100%");
                     document.querySelector(".panel-btn").classList.toggle("is-active")
                }
         }
    
   

    })
}




