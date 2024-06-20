import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

// material-ui
import { makeStyles } from "@mui/styles";
import { List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

// project imports

// style constant
const useStyles = makeStyles((theme) => ({
  listIcon: {
    minWidth: "auto",
    //marginRight: theme.spacing(2),
  },
}));

const MenuList = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleClick = (event, path) => {
    event.preventDefault();
    if (path === "util-calculator") {
      navigate("/utils/util-calculator");
    }
    else if (path === "util-product") {
      navigate("/utils/util-product");
    }
    else if (path === "util-timeline") {
      navigate("/utils/util-timeline");
    }
    else if (path === "util-userlist") {
      navigate("/utils/util-userlist");
    }
    else if (path === "util-grouplist") {
      navigate("/utils/util-grouplist");
    }
    else if (path === "util-productDescription") {
      navigate("/utils/util-productDescription");
    
    } else if (!sessionStorage.getItem("token")) {
      navigate("/login");
    } else {
      navigate(path);
    }
  };

  // get designation from session storage
  const designation = sessionStorage.getItem("designation");

  // set options based on designation
  const options = [];
  if (designation === "admin") {
    options.push({ name: "Calculator", path: "util-calculator" });
    options.push({ name: "Product", path: "util-product" });
    options.push({ name: "Delivery Status", path: "util-timeline" });
    options.push({ name: "Cart page", path: "util-productDescription" });
    options.push({ name: "Users List", path: "util-userlist" });
    options.push({ name: "Groups List", path: "util-grouplist" });
    options.push({ name: "Logout", path: "util-logout" });
  } else if (designation === "manager") {
    options.push({ name: "Calculator", path: "util-calculator" });
    options.push({ name: "Product", path: "util-product" });
    options.push({ name: "Delivery Status", path: "util-timeline" });
    options.push({ name: "Logout", path: "util-logout" });
  } else if (designation === "employee") {
    options.push({ name: "Calculator", path: "util-calculator" });
    options.push({ name: "Product", path: "util-product" });
    options.push({ name: "Logout", path: "util-logout" });
  }

  return (
    <List>
      {options.map((option, index) => (
        <ListItemButton
          key={index}
          component="a"
          href={option.path}
          onClick={(event) => handleClick(event, option.path)}
        >
          <ListItemIcon className={classes.listIcon}>{option.icon}</ListItemIcon>
          <ListItemText primary={option.name} />
        </ListItemButton>
      ))}
    </List>
  );
};

MenuList.propTypes = {
  window: PropTypes.func,
};

export default MenuList;
