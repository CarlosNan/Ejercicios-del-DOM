export function reloj(iniciaR,detenerR){
    let hora1;
    let hora;
    
    
        document.addEventListener("click",e=>{
    
            if(e.target.matches(iniciaR)){
                
                document.querySelector(".dReloj").disabled=false;
                document.querySelector(".iReloj").disabled=true;
                hora=setInterval(()=>{ 
               hora1= new Date().toLocaleTimeString()
               document.querySelector("#reloj").innerHTML=`<h2>${hora1}</h2>`
               
            
        },1000);
              
            }
            if(e.target.matches(detenerR)){
                document.querySelector(".iReloj").disabled=false;
               
                clearInterval(hora);
                document.querySelector("#reloj").innerHTML=`<h2></h2>`
            }

        })
}

export function alarm(iniciarA,detenerA){
    let audioTempo;
    let $audio=document.createElement("audio"); 
    document.querySelector(".section").appendChild($audio);
    $audio.setAttribute("src","audio/audio.mp3");
    $audio.setAttribute("class","audio");


    document.addEventListener("click",e=>{
         if(e.target.matches(iniciarA)){

             document.querySelector(".iAlarma").disabled=true;
             document.querySelector(".dAlarma").disabled=false;
             audioTempo=setTimeout(()=>{

                 $audio.play();
            
                },1000);

     }

});    


       document.addEventListener("click",e=>{

        if(e.target.matches(detenerA)){
console.log("e")
            clearTimeout(audioTempo);
            $audio.pause();
            $audio.currentTime=0;
           
            document.querySelector(".iAlarma").disabled=false;



        
        }

   });    

}
