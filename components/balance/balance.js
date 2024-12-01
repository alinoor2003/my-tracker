"use client";
import { meraStore } from "@/store/store"
import { Provider, useSelector } from "react-redux"

export default function Page(){
    return <Provider store={meraStore}>
        <Balance></Balance>
    </Provider>
}



function Balance(){

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

let total = Math.abs(totalPositive - (-totalNegative));

    return <div>
          <h3 className="Balance">Current Balance</h3>
          <h2>${+total}.00</h2>
    </div>
}