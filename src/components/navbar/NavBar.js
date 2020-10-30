import React, { useState } from "react";
import NavMessage from "./NavMessage";

const Navbar = (props) => {
  const [count, setCount] = useState(0);
  function counter(message) {
    setCount((message.match(/not/g) || []).length);
  }
  return (
    <div>
      <h2>
        This will become the Navbar {props.name} but 'not' count is {count}
      </h2>
      <NavMessage countHandler={counter} />
      {props.children}
    </div>
  );
};

export default Navbar;
