"use client";
import "./add.css";
import { createUser } from "@/store/slices/user";
import { meraStore } from "@/store/store";
import { useForm } from "react-hook-form";
import { Provider, useDispatch } from "react-redux";

export default function Page(){
  return <Provider store={meraStore}>
    <Addtransaction></Addtransaction>
  </Provider>
}




function Addtransaction(){

  let {register, handleSubmit,formState:{errors}} = useForm();
  let dispatch = useDispatch();
  const saveuser = (user)=>{
   dispatch(createUser(user));
    // console.log(user);
    }




return <div className="pop">
           <div id="transaction">
            <br></br>
    <b className="tvt">Add New Transaction</b>
  </div>
<br></br>
  <div className="inyu">
    <form onSubmit={handleSubmit(saveuser)}>
    <b className="mm">Description</b>
    
    <input  {...register('name',{required: true})} className="nunu" placeholder="Detail OF Transaction" type="text" />
    { errors.name  ? <div className="error">This field is required</div> : null}
    <b className="mm">Transaction Amount</b>
    <input
     {...register('price',{required: true})}
      className="nunu"
      placeholder="Dollar Value OF Transaction"
      type="number"
    />
     { errors.price  ? <div className="error">Transaction amount is required</div> : null}
    <br></br>
    <button id="butt">Add Transaction</button>
    </form>
  </div>
</div>

}