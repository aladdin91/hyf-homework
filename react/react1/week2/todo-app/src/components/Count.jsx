import React, { useState, useEffect } from "react";

function CountSeconds() {
  let [count, setCount] = useState(0);

  useEffect(() => {
    const increment = setTimeout(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(increment);
  });

  return <div>You have used {count} seconds on this website</div>;
}
export default CountSeconds;
