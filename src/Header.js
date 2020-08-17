import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography} from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableDrawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import ListItemIcon from '@material-ui/core/ListItemIcon';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    list: {
        width: 250,
      },
  }));

const Header = () =>  {
    const classes = useStyles();
    const [drawerOpen, setDrawer] = React.useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setDrawer(open);
      };

    const list = () => {
        return (
            <div
                className={classes.list}
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
            >
                <List>
                    <ListItem button key={"Home"}>
                        <ListItemIcon><HomeRoundedIcon /></ListItemIcon>
                        <ListItemText primary={"Home"} />
                    </ListItem>

                    <ListItem button key={"Edit"}>
                        <ListItemIcon><EditRoundedIcon /></ListItemIcon>
                        <ListItemText primary={"Edit"} />
                    </ListItem>
                </List>
            </div>
        )
        
    }

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton 
                    edge="start" 
                    className={classes.menuButton} 
                    color="inherit" 
                    aria-label="menu"
                    onClick={toggleDrawer(true)}
                >
                    <MenuIcon />
                </IconButton>
                <SwipeableDrawer 
                    open={drawerOpen} 
                    onOpen={toggleDrawer(true)} 
                    onClose={toggleDrawer(false)}
                >
                    {list()}
                </SwipeableDrawer>

                <Typography className="classes.title" variant="h5" component="h1">Flash</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header