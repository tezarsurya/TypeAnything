import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import CreateIcon from '@material-ui/icons/Create';
import ViewListIcon from '@material-ui/icons/ViewList';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles({
  root: {
    width: 'auto',
  },
});

export function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState('write');

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Home" value="home" icon={<HomeIcon />} />
      <BottomNavigationAction label="Write Something" value="write" icon={<CreateIcon />} />
      <BottomNavigationAction label="View Posts" value="view" icon={<ViewListIcon />} />
    </BottomNavigation>
  );
}