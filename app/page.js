import Addtransaction from "@/components/add transaction/addtransaction";
import Balance from "@/components/balance/balance";
import Header from "@/components/header/header";
import Income from "@/components/incomeexpense/incomeexpense";
import Transaction from "@/components/transaction/transaction";

export default function Home() {
  return (
<div>
  <Header></Header>
  <Balance></Balance>
  <Income></Income>
  <Transaction></Transaction>
  <Addtransaction></Addtransaction>
</div>
  );
}
