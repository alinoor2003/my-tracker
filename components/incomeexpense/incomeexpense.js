"use client";

import { meraStore } from "@/store/store";
import { Provider, useSelector } from "react-redux";

export default function Page(){
  return <Provider store={meraStore}>
    <Income></Income>
  </Provider>
}


function Income(){


  let data = useSelector((store)=>{
    return store.userWalaSlice.users;
  });

  let totalPositive = 0;
  let totalNegative = 0;
  data.forEach((iten)=>{
    // total += +iten.price;
    if (+iten.price >= 0) {
      totalPositive += +iten.price;
    } else {
      totalNegative += +iten.price;
    }
  })

    return <div>
 
 <div className=' d-flex justify-content-center text-center  rounded-2 '>
          <div className='px-5 py-2 'style={{ backgroundColor: "#fff", boxShadow: '2px 4px 6px rgba(0, 0, 0, 0.3)'}}>
            <span> <b>INCOME</b></span>
            <h4 className="money-plus" style={{color:"#0dcaf0"}}>${totalPositive}.00</h4>
          </div>

      
          <div className='px-5 py-2 ' style={{ backgroundColor: "#fff" , boxShadow: '2px 4px 6px rgba(0, 0, 0, 0.3)'}}>
            <span><b>EXPENSE</b></span>
            <h4 className="money-minus" style={{color:"#ffc107"}}>${Math.abs(totalNegative)}.00</h4>
          </div>
          </div>
    </div>
}