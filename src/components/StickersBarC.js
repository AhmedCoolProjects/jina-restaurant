import React from "react";
import { Avatar, makeStyles } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import table from "../assets/romantic-dinner.svg";
import Typography from "@material-ui/core/Typography";
import food from "../assets/food.svg";
import likes from "../assets/like.svg";
import delivery from "../assets/delivery-time.svg";
import chef from "../assets/chef.svg";

const stickers = [
  {
    image: likes,
    nbr: "1325",
    title: "Likes",
  },
  {
    image: food,
    nbr: "25",
    title: "Meals",
  },
  {
    image: table,
    nbr: "45",
    title: "Tables",
  },
  {
    image: chef,
    nbr: "5",
    title: "Our Chiefs",
  },
  {
    image: delivery,
    nbr: "7/7",
    title: "Our Delivery",
  },
];
const useStyles = makeStyles((theme) => ({
  toolbarSecondary: {
    justifyContent: "space-between",
    overflowX: "auto",
    marginBottom: theme.spacing(4),
    width: "90%",
    marginLeft: "5%",
    paddingLeft: "5vw",
    paddingRight: "5vw",
  },
}));
function StickersBarC() {
  const classes = useStyles();
  return (
    <Toolbar
      component="nav"
      variant="dense"
      className={classes.toolbarSecondary}>
      {stickers.map((item, index) => (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: 5,
            marginRight: 5,
          }}>
          <Avatar
            key={index}
            src={item.image}
            style={{
              width: "4em",
              height: "4em",

              flexShrink: 0,
            }}
          />
          <Typography
            component="strong"
            variant="h5"
            color="inherit"
            align="center"
            style={{ textAlign: "center" }}
            noWrap>
            {item.nbr}
          </Typography>
          <sub style={{ textAlign: "center" }}>{item.title}</sub>
        </div>
      ))}
    </Toolbar>
  );
}

export default StickersBarC;
