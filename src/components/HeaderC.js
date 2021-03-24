import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { Avatar, IconButton } from "@material-ui/core";
import google from "../assets/google.svg";
import twitter from "../assets/twitter.svg";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: "flex-end",
    overflowX: "auto",
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

export default function HeaderC(props) {
  const classes = useStyles();
  const { title } = props;

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}>
          {title}
        </Typography>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}>
        <Link
          target="blank_"
          color="inherit"
          href="https://mail.google.com/mail/?view=cm&fs=1&to=jinacoolprojects@gmail.com">
          <IconButton color="inherit">
            <Avatar style={{ width: "1.5em", height: "1.5em" }} src={google} />
          </IconButton>
        </Link>
        <Link
          target="blank_"
          color="inherit"
          href="https://www.linkedin.com/in/bargady-ahmed-082b30177">
          <IconButton color="inherit">
            <Avatar
              style={{ width: "1.5em", height: "1.5em" }}
              src={linkedin}
            />
          </IconButton>
        </Link>
        <Link
          target="blank_"
          color="inherit"
          href="https://twitter.com/AhmedBargady?s=09">
          <IconButton color="inherit">
            <Avatar style={{ width: "1.5em", height: "1.5em" }} src={twitter} />
          </IconButton>
        </Link>
        <Link
          target="blank_"
          color="inherit"
          href="https://github.com/AhmedCoolProjects">
          <IconButton color="inherit">
            <Avatar style={{ width: "1.5em", height: "1.5em" }} src={github} />
          </IconButton>
        </Link>
      </Toolbar>
    </React.Fragment>
  );
}

HeaderC.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};
