// import React ,{useState,useEffect} from 'react'

// const Clock = () => {

//    const[days,setDays] = useState()
//    const[hours,setHours] = useState()
//    const[minutes,setMinutes] = useState()
//    const[seconds,setSeconds] = useState()

//     let interval ;
//     const destination = new Date('December 31, 2021 00:00:00').getTime();
 
 
//     interval  = setInterval(()=>{
//         const now = new Date().getTime();
//         const distance = destination - now;
//         const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//         const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//         const seconds = Math.floor((distance % (1000 * 60)) / 1000);
//         if(distance < 0){
//             clearInterval(interval.current);
//         }
//         else{
//             setDays(days);
//             setHours(hours);
//             setMinutes(minutes);
//             setSeconds(seconds);

//         }
//     },1000)

 

//   return <div className="clock__wraper d-flex align-items-center gap-3">
    
//     <div className="clock__data d-flex align-items-center gap-3">
//         <div className="text-center">
//             <h1 className="text-white fs-3">10</h1>
//             <h5 className="text-white fs-6">Days</h5>
//         </div>
//         <span className="text-white fs-3">:</span>
//         </div>
    
//     <div className="clock__data d-flex align-items-center gap-3">
//         <div className="text-center">
//             <h1 className="text-white fs-3 mb-2">10</h1>
//             <h5 className="text-white fs-6">Hours</h5>
//         </div>
//         <span className="text-white fs-3 mb-2">:</span>
//         </div>

//         <div className="clock__data d-flex align-items-center gap-3">
//         <div className="text-center">
//             <h1 className="text-white fs-3 mb-2">10</h1>
//             <h5 className="text-white fs-6">Minutes</h5>
//         </div>
//         <span className="text-white fs-3 mb-2">:</span>
//         </div>
//         <div className="clock__data d-flex align-items-center gap-3">
//         <div className="text-center">
//             <h1 className="text-white fs-3 mb-2">10</h1>
//             <h5 className="text-white fs-6">Seconds</h5>
//         </div>
//         </div>

//   </div>
// }

// export default Clock