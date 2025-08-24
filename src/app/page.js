import Image from "next/image";
import Banner from "./component/Banner";
import HighLight from "./component/HighLight";
import NewArrived from "./component/NewArrived";

export default function Home() {
  return (
    <div className="">
      <Banner></Banner>
      <NewArrived></NewArrived>
      <HighLight></HighLight>
    </div>
  );
}
