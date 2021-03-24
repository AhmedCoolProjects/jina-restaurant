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
import clsx from "clsx";
import { Divider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  card: {
    display: "flex",
    height: 400,
  },
  cardDetails: {
    flex: 1,
    padding: 15,
  },
  cardMedia: {
    width: 380,
  },
}));

export default function ChefWordC(props) {
  const classes = useStyles();
  const { post } = props;

  return (
    <Grid item className={clsx("chef_word", classes.root)}>
      <CardActionArea>
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                {post.title}
              </Typography>
              <Divider />
              <Typography style={{ padding: 20 }} variant="subtitle1" paragraph>
                {post.description}
              </Typography>
              <Typography
                style={{ textAlign: "right" }}
                variant="subtitle1"
                color="textSecondary">
                {post.date}
              </Typography>
            </CardContent>
          </div>
          <Hidden xsDown>
            <CardMedia
              className={classes.cardMedia}
              image={post.image}
              title={post.imageTitle}
            />
          </Hidden>
        </Card>
      </CardActionArea>
    </Grid>
  );
}

ChefWordC.propTypes = {
  post: PropTypes.object,
};
