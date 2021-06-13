import React from "react";

import DualInfoRight from "./DualinfoRight";
import DualInfoLeft from "./DualInfoLeft";

export default function DualinfoblockService() {
  return (
    <section className="my-4 p3">
      <DualInfoRight imgSrc="https://images.pexels.com/photos/7775642/pexels-photo-7775642.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
      <DualInfoLeft imgSrc="https://images.pexels.com/photos/7775641/pexels-photo-7775641.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
      <DualInfoRight imgSrc="https://images.pexels.com/photos/7775639/pexels-photo-7775639.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
      <DualInfoLeft imgSrc="https://images.pexels.com/photos/5054776/pexels-photo-5054776.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
    </section>
  );
}
