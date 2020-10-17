import React from "react";
// import { Logo } from "components/header/header.styles";

const Header: React.FC = () => {
  return (
    <nav>
      <div>
        container
        {/* <Logo>logo</Logo> */}
        <div>
          <button>SERIES</button>
          <button>MOVIES</button>
          <button>KIDS</button>
          <button>SCHEDULE</button>
          <button>search</button>
        </div>
        <div>
          user
          <button>Registration</button>
          <button>Login</button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
