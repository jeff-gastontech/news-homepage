import React from 'react';
import logo from './logo.svg';
import './App.css';
import Box from "@mui/material/Box";
import ResponsiveAppBar from "./ResponsiveAppBar";
import {
    Button,
    Divider, Drawer,
    Link,
    List,
    ListItem,
    ListItemButton, ListItemText,
    Paper,
    Typography,
    useMediaQuery,
    useTheme
} from "@mui/material";
import {Link as RouterLink, NavLink} from "react-router-dom";
import Grid from '@mui/material/Unstable_Grid2';
import Container from "@mui/material/Container";
import Logo from "./assets/images/logo.svg";
import MainImage from "./assets/images/image-web-3-desktop.jpg";
import ComputerImage from "./assets/images/image-retro-pcs.jpg";
import KeyboardImage from "./assets/images/image-top-laptops.jpg";
import ControllerImage from "./assets/images/image-gaming-growth.jpg";
import IconButton from "@mui/material/IconButton";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const activeClassName = "Active-Link";

type Anchor = 'right';

function checkIfActive(active: boolean) {
    return active ? activeClassName : "Link";
}

function App() {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));

    const [state, setState] = React.useState({
        right: false,
    });

    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setState({ ...state, [anchor]: open });
            };

    const list = (anchor: Anchor) => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <ListItem>
                    <Box sx={{marginLeft: "auto"}}>
                        <IconButton onClick={toggleDrawer('right', false)}>
                            <CloseIcon />
                        </IconButton>
                    </Box>
                </ListItem>
                {['Home', 'New', 'Popular', 'Trending', 'Categories'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <Box component={"main"} sx={{padding: "20px"}} display="flex">
            <Grid container xs={12} flexGrow={1} spacing={2}>
                <Grid container xs={12} spacing={0} alignItems="center">
                    <Grid xs={7}>
                        <img src={Logo}/>
                    </Grid>

                    {matches ? (<React.Fragment>
                        <Grid xs={1} textAlign="end">
                            <NavLink end to={"/"} className={({isActive}) => checkIfActive(isActive)}>Home</NavLink>
                        </Grid>
                        <Grid xs={1} textAlign="end">
                            <NavLink to={"/new"} className={({isActive}) => checkIfActive(isActive)}>New</NavLink>
                        </Grid>
                        <Grid xs={1} textAlign="end">
                            <NavLink to={"/popular"} className={({isActive}) => checkIfActive(isActive)}>Popular</NavLink>
                        </Grid>
                        <Grid xs={1} textAlign="end">
                            <NavLink to={"/trending"} className={({isActive}) => checkIfActive(isActive)}>Trending</NavLink>
                        </Grid>
                        <Grid xs={1} textAlign="end" paddingRight={0}>
                            <NavLink to={"/categories"} className={({isActive}) => checkIfActive(isActive)}>Categories</NavLink>
                        </Grid>
                    </React.Fragment>) : (
                        <React.Fragment>
                            <Grid xs={5} textAlign="end">
                                <IconButton onClick={toggleDrawer('right', true)}>
                                    <MenuIcon />
                                </IconButton>
                            </Grid>
                            <Drawer
                                anchor={'right'}
                                open={state['right']}
                                onClose={toggleDrawer('right', false)}
                            >
                                {list('right')}
                            </Drawer>
                        </React.Fragment>
                    )}

                </Grid>
                <Grid container xs={12} md={8} spacing={0} flexGrow={1}>
                    <Grid xs={12} sx={{paddingTop: 0}}>
                        <img style={{width: "100%", height: "100%"}} src={MainImage}/>
                    </Grid>
                    <Grid container xs={12} style={matches ? {} : {padding: 0}}>
                        <Grid xs={12} md={6} >
                            <Typography variant="h1" sx={{fontWeight: "bold", color: "black"}}>
                                The Bright Future of Web 3.0?
                            </Typography>
                        </Grid>
                        <Grid container xs={12} md={6} sx={{padding:0}}>
                            <Grid xs={12} className="Regular-Text">
                                <Typography variant="h5">
                                    We dive into the next evolution of the web that claims to put the power of the platforms
                                    back into the hands of the people.
                                    But is it really fulfilling its promise?
                                </Typography>
                            </Grid>
                            <Grid xs={12} >
                                <Button variant="contained" className={matches ? "Button" : "Button-Full"}>
                                    Read more
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container xs={12} md={4} spacing={0}>
                    <Paper id="articles" className="New-Articles">
                        <Grid xs={12} paddingTop={"8px"} paddingLeft={"8px"}>
                            <Typography variant="h3" className={"New-Article-Heading"}>
                                New
                            </Typography>
                        </Grid>
                        <Grid container xs={12} paddingLeft={"8px"} paddingRight={"8px"}>
                            <Grid xs={12}>
                                <Typography variant="h5">
                                    <a className={"New-Article-Link"} href="#">Hydrogen VS Electric Cars</a>
                                </Typography>
                                <Typography variant="body2" color="grey.500">
                                    Will hydrogen-fueled cars ever catch up to EVs?
                                </Typography>
                            </Grid>
                            <Grid xs={12} paddingTop={"8px"} paddingBottom={"8px"}>
                                <Divider variant="middle" color="#9e9e9e"/>
                            </Grid>
                            <Grid xs={12}>
                                <Typography variant="h5">
                                    <a className={"New-Article-Link"} href="#">
                                        The Downsides of AI Artistry
                                    </a>
                                </Typography>
                                <Typography variant="body2" color="grey.500">
                                    What are the possible adverse effects of on-demand AI image generation?
                                </Typography>
                            </Grid>
                            <Grid xs={12} paddingTop={"8px"} paddingBottom={"8px"}>
                                <Divider variant="middle" color="#9e9e9e"/>
                            </Grid>
                            <Grid xs={12}>
                                <Typography variant="h5">
                                    <a className={"New-Article-Link"} href="#">
                                        Is VC Funding Drying Up?
                                    </a>
                                </Typography>
                                <Typography variant="body2" color="grey.500">
                                    Private funding by VC firms is down 50% YOY. We take a look at what that means.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid container xs={12} >
                    <Grid container xs={12} md={4} flexGrow={1}>
                        <Grid xs={4}>
                            <img style={{width: "100%"}} src={ComputerImage}/>
                        </Grid>
                        <Grid container xs={8}>
                            <Grid xs={12}><Typography variant="h2" color="grey.500">01</Typography></Grid>
                            <Grid xs={12}><Typography variant="h5" fontWeight="bolder">Reviving Retro
                                PCs</Typography></Grid>
                            <Grid xs={12}><Typography variant="h5" fontWeight="bold" color="grey.500">What happens when
                                old PCs are given modern upgrades?</Typography></Grid>
                        </Grid>
                    </Grid>
                    <Grid container xs={12} md={4}>
                        <Grid xs={4}>
                            <img style={{width: "100%"}}  src={KeyboardImage}/>
                        </Grid>
                        <Grid container xs={8}>
                            <Grid xs={12}><Typography variant="h2" color="grey.500">02</Typography>
                            </Grid>
                            <Grid xs={12}><Typography variant="h5" fontWeight="bolder">Top 10 Laptops of
                                2022</Typography>
                            </Grid>
                            <Grid xs={12}><Typography variant="h5" fontWeight="bold" color="grey.500">Our best picks for
                                various needs and budgets.</Typography></Grid>
                        </Grid>
                    </Grid>
                    <Grid container xs={12} md={4}>
                        <Grid xs={4}>
                            <img  style={{width: "100%"}}  src={ControllerImage}/>
                        </Grid>
                        <Grid container xs={8}>
                            <Grid xs={12}><Typography variant="h2" color="grey.500">03</Typography>
                            </Grid>
                            <Grid xs={12}><Typography variant="h5" fontWeight="bolder">The Growth of Gaming</Typography>
                            </Grid>
                            <Grid xs={12}><Typography variant="h5" fontWeight="bold" color="grey.500">How the pandemic
                                has sparked fresh opportunities.</Typography></Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}

export default App;
