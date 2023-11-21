import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import BalanceIcon from "@mui/icons-material/Balance";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonIcon from "@mui/icons-material/Person";

import "../../sass/layout/_topBar.scss";

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="topbar__phone">
        <PhoneIcon className="topbar__phone__icon" sx={{ color: "#fff" }} />
        <div className="topbar__phone__text">+994 70 562 12 69</div>
      </div>
      <div className="topbar__more">
        <select className="topbar__more__langOptions">
          <option value="AZ">AZ</option>
          <option value="EN">EN</option>
        </select>
        <BalanceIcon className="topbar__more__balance" sx={{ color: "#fff" }} />
        <FavoriteBorderIcon
          className="topbar__more__heart"
          sx={{ color: "#fff" }}
        />
        <div className="topbar__more__account">
          <PersonIcon
            className="topbar__more__account__icon"
            sx={{ color: "#fff" }}
          />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
