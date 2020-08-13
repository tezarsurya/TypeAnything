import { makeStyles } from "@material-ui/core/styles";
import { useScrollTrigger, Zoom } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  scrollTopButton: {
    position: 'fixed',
    bottom: theme.spacing(3),
    right: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      bottom: theme.spacing(9)
    }
  },
}));

export const ScrollTop = (props) => {
  const { children, window } = props;
  const classes = useStyles();

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.scrollTopButton}>
        {children}
      </div>
    </Zoom>
  );
}