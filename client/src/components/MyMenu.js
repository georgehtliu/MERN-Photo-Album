import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";
import MenuBookIcon from "@material-ui/icons/MenuBook";

const MyMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Menu &nbsp;
        <MenuBookIcon />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <Link to="/gallery">My Gallery</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/hashtags">Search by Hashtag</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/signin">Logout</Link>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default MyMenu;
