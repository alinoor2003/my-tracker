"use client";
import "./tt.css";
import { removeUser } from "@/store/slices/user";
import { meraStore } from "@/store/store";
import { Provider, useDispatch, useSelector } from "react-redux";

export default function Page(){
  return <Provider store={meraStore}>
    <Transaction></Transaction>
  </Provider>
}


 function Transaction(){
let dispatch = useDispatch();
let data = useSelector((store)=>{
  return store.userWalaSlice.users;
});


    return <div>
          <div id="transaction">
    <b className="tvt">Transaction History</b>

          {   data.map(function(user, i){
                    return <div id="mnm"> 

                            <button  onClick={()=>{

                                dispatch( removeUser(i) );

                            }}>X</button>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;

                <b>{user.name}</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <b>{user.price}</b>    
                </div>
                })}
        

  </div>
    </div>
}