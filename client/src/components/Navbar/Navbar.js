import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import {AppBar, Typography, Toolbar, Button, Avatar} from "@material-ui/core/";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import decode from "jwt-decode";
import useStyles from "./styles";

const Navbar = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const classes = useStyles();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  useEffect(() => {
    const token = user?.token;

    // when token expire delete
    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) {
         logOut();
      }
    }

    setUser(JSON.parse(localStorage.getItem("profile")))
  }, [location])

  const logOut = () => {
    dispatch( { type: "LOGOUT" } );
    navigate("/");
    setUser(null);
  }

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">

    <div className={classes.brandContainer}>
        <Link to="/" style={{ textDecoration: 'none' }}>
         <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
        </Link>
      <img className={classes.image} src="/memories.png" alt="icon" height="60" />
    </div>
    <Toolbar>
      {user ? (
          <div className={classes.profile}>
            <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}> {user.result.name.charAt(0)} </Avatar>
            <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
            <Button className={classes.logout} variant="contained" color="secondary" onClick = {logOut}>Logout</Button>
          </div>
      ) : (
          <div>
          <Button component={Link} to="/auth" variant="contained" color="primary"> Sign in </Button>
          </div>
      )}
    </Toolbar>
  </AppBar>
  );
}

export default Navbar
