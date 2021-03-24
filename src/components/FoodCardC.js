import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CallIcon from "@material-ui/icons/Call";
import Grid from "@material-ui/core/Grid";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function FoodCardC({ foods }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.root}>
        <CardHeader title={foods.name} subheader={foods.howMany} />
        <CardMedia
          className={classes.media}
          image={foods.image}
          title={foods.name}
        />
        <CardContent>
          <Typography
            style={{ textAlign: "right" }}
            variant="h4"
            color="textSecondary"
            component="p">
            {foods.price}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <CallIcon />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more">
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Ingridients:</Typography>
            <Typography paragraph>
              ½ teaspoon crushed dried rosemary <br />
              1 teaspoon dried basil
              <br />
              1 (1 ounce) envelope dry onion soup mix
              <br />
              1 egg
              <br />
              1 teaspoon Worcestershire sauce
              <br />
              1 teaspoon soy sauce
              <br />
              ½ cup shredded Colby Jack or Cheddar cheese
              <br />
              ½ onion, finely chopped
              <br />
              1 ½ pounds lean ground beef
              <br />
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  );
}
