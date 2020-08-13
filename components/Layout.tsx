import React from "react";
import { AppBar, makeStyles, Typography, Container, Button, BottomNavigation, BottomNavigationAction, Fab, Toolbar } from "@material-ui/core";
import Link from 'next/link';
import { useRouter } from 'next/router';
import CreateIcon from '@material-ui/icons/Create';
import ViewListIcon from '@material-ui/icons/ViewList';
import HomeIcon from '@material-ui/icons/Home';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { ScrollTop } from "./ScrollTop";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 0
  },
  container: {
    paddingTop: theme.spacing(1)
  },
  link: {
    color: '#fff',
    textDecoration: "none"
  },
  appBarContainer: {
    position: 'sticky'
  },
  appbar: {
    display: 'flex',
    flexDirection: 'row',
    padding: theme.spacing(1),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3)
  },
  title: {
    flexGrow: 1
  },
  navButton: {
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  },
  bottomNav: {
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    },
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    position: 'fixed',
    bottom: 0
  }
}));

export const Layout = (props) => {
  const classes = useStyles();
  const router = useRouter();
  const [value, setValue] = React.useState(router.pathname);

  return (
    <div className={classes.root}>
      <div id="back-to-top-anchor" />
      <AppBar className={classes.appBarContainer}>
        <Container className={classes.appbar} maxWidth="md">
          <Typography className={classes.title} variant="h5">
            <Link href='/'>
              <a className={classes.link}>TypeAnything</a>
            </Link>
          </Typography>
          <Button
            className={classes.navButton}
            color="inherit"
            onClick={() => { router.push('/posts') }}
          >
            <a className={classes.link}>View Posts</a>
          </Button>
          <Button
            className={classes.navButton}
            color="inherit"
            onClick={() => { router.push('/write') }}
          >
            <a className={classes.link}>Write Something</a>
          </Button>
        </Container>
      </AppBar>
      <Container className={classes.container} maxWidth="md">
        {props.children}
      </Container>
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
      <BottomNavigation
        className={classes.bottomNav}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          router.push(newValue);
        }}
        showLabels
      >
        <BottomNavigationAction value="/" label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction value="/write" label="Write" icon={<CreateIcon />} />
        <BottomNavigationAction value="/posts" label="Posts" icon={<ViewListIcon />} />
      </BottomNavigation>
    </div >
  );
}