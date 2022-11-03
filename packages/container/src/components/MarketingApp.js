import React, { useRef, useEffect } from "react";
import { mount } from "marketing/MarketingApp";
const MarketingApp = () => {
  const ref = useRef(null);
  useEffect(() => {
    console.log("ref?.current", ref?.current);
    mount(ref?.current);
  }, []);
  return <div ref={ref}>MarketingApp</div>;
};

export default MarketingApp;
