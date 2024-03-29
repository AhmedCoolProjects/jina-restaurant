import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Hidden from "@material-ui/core/Hidden";
import { Divider } from "@material-ui/core";

const useStyles = makeStyles({
  card: {
    display: "flex",
    height: 400,
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 380,
  },
});

export default function CardBlogC(props) {
  const classes = useStyles();
  const { post } = props;

  return (
    <Grid item>
      <CardActionArea component="a">
        <Card className={classes.card}>
          <Hidden xsDown>
            <CardMedia
              className={classes.cardMedia}
              image={post.image}
              title={post.imageTitle}
            />
          </Hidden>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                {post.title}
              </Typography>
              <Divider />
              <Typography
                style={{ textAlign: "right" }}
                variant="subtitle1"
                color="textSecondary">
                {post.date}
              </Typography>
              <Typography style={{ padding: 20 }} variant="subtitle1" paragraph>
                {post.description}
              </Typography>
            </CardContent>
          </div>
        </Card>
      </CardActionArea>
    </Grid>
  );
}

CardBlogC.propTypes = {
  post: PropTypes.object,
};
