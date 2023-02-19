setInterval(
  function(){
    let a=new Date();
    let minutes=a.getMinutes();
    let hours=a.getHours();
    let seconds=a.getSeconds();
    if(minutes<10)
    {
          document.getElementById("minute").innerHTML=`0${minutes}`

        }
        else{
          document.getElementById("minute").innerHTML=`${minutes}`

        }
        if(seconds<10)
        {
          document.getElementById("second").innerHTML=`0${seconds}`
        }
        else{
          document.getElementById("second").innerHTML=`${seconds}`
        }
        if(hours>12){
         document.getElementById("hour").innerHTML=`${hours-12}`
         }
        
       else{
        if(hours<10)
        {
        document.getElementById("hour").innerHTML=`0${hours}`
          
        }
        else{
        document.getElementById("hour").innerHTML=`${hours}`

        }
        
       }
      
        if(hours<12){

          document.getElementById("am-pm").innerHTML="AM";
        }
        else{
          document.getElementById("am-pm").innerHTML="PM"

        }
        hr_rotation = 30 * hours + minutes / 2; //converting current time
        min_rotation = 6 * minutes;
        sec_rotation = 6 * seconds;
      
        analoghour.style.transform = `rotate(${hr_rotation}deg)`;
        analogminute.style.transform = `rotate(${min_rotation}deg)`;
        analogsecond.style.transform = `rotate(${sec_rotation}deg)`;

   
    }
    ,1000)
   let toanalog=()=>{
    let btn=document.getElementById("maincontainer")
    let btn2=document.getElementById("maincontainer2")
    let a=btn.style.display
    

      btn.style.display="none"
   
   btn2.style.display="block"
    console.log(a)
   };
   let todigital=()=>{
    let btn2=document.getElementById("maincontainer")
    let btn=document.getElementById("maincontainer2")
    let a=btn.style.display
    

      btn.style.display="none"
   
   btn2.style.display="block"
    console.log(a)
   };
