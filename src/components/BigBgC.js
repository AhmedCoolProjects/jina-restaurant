import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import CardBlogC from "./CardBlogC";

const findUs = {
  title: "Find Us",
  date: "Nr 542 Madinat Al Wahda, Laayoune",
  description:
    "Order, Get or Check a table online for 15 minutes to get it ready for you as you want and any time you want. We have even Delivery for you so you can get your delicious food any place you are from 8:00pm until 12:00am 7j/7j",
  image:
    "https://visainfodesk.com/wp-content/uploads/2019/08/After-viewing-so-many-mouth-watering-videos-of-CZN-Burak.xx&oh=2e7b7175356e59623e8c59d3c8e6c733&oe=5DAB0912.jpeg",
  imageText: "Image Text",
};
const useStyles = makeStyles((theme) => ({
  mainFeaturedCard: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    height: 550,
    backgroundImage:
      "url(https://www.lifeismorocco.com/wp-content/uploads/2019/10/Kabana-Marrakech-rooftop-restaurant-bar-@LIFEismorocco_cover.jpg)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)",
  },
  mainFeaturedCardContent: {
    position: "relative",
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}));

export default function BigBgC(props) {
  const classes = useStyles();
  const { post } = props;

  return (
    <Paper
      className={classes.mainFeaturedCard}
      style={{ backgroundImage: `url(${post.image})` }}>
      {/* Increase the priority of the hero background image */}
      {
        <img
          style={{ display: "none" }}
          src={post.image}
          alt={post.imageText}
        />
      }
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={6}>
          <div className={classes.mainFeaturedCardContent}>
            <Typography
              component="h1"
              variant="h2"
              color="inherit"
              gutterBottom>
              {post.title}
            </Typography>
            <Typography
              style={{ marginLeft: 15 }}
              variant="h5"
              color="inherit"
              paragraph>
              {post.description}
            </Typography>
            <Typography
              style={{ marginLeft: 15 }}
              variant="h5"
              color="inherit"
              paragraph>
              {post.description2}
            </Typography>
            <Link
              style={{ marginLeft: 15, fontSize: 20, fontWeight: "700" }}
              variant="subtitle1"
              href="#">
              {post.linkText}
            </Link>
          </div>
        </Grid>
      </Grid>
      <div className="jjjj">
        <CardBlogC post={findUs} />
      </div>
    </Paper>
  );
}

BigBgC.propTypes = {
  post: PropTypes.object,
};
