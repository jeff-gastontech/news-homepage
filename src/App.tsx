import React from 'react';
import logo from './logo.svg';
import './App.css';
import Box from "@mui/material/Box";
import ResponsiveAppBar from "./ResponsiveAppBar";
import {Button, Divider, Link, Paper, Typography} from "@mui/material";
import {Link as RouterLink, NavLink} from "react-router-dom";
import Grid from '@mui/material/Unstable_Grid2';
import Container from "@mui/material/Container";
import Logo from "./assets/images/logo.svg";
import MainImage from "./assets/images/image-web-3-desktop.jpg";
import ComputerImage from "./assets/images/image-retro-pcs.jpg";
import KeyboardImage from "./assets/images/image-top-laptops.jpg";
import ControllerImage from "./assets/images/image-gaming-growth.jpg";

const activeClassName = "Active-Link";

function checkIfActive(active: boolean) {
    return active ? activeClassName : "Link";
}

function App() {
    return (
        <Box component={"main"} sx={{padding: "20px"}} flexGrow={1} maxWidth="80%" maxHeight="80%" margin="auto">
            <Grid container spacing={2} alignItems="center">
                <Grid xs={7}>
                    <img src={Logo}/>
                </Grid>
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
            </Grid>
            <Grid container spacing={2} justifyContent="space-between">
                <Grid container xs={8} paddingTop={0}>
                    <Grid xs={12} paddingRight={"20px"}>
                        <img src={MainImage}/>
                    </Grid>
                    <Grid xs={6}>
                        <Typography variant="h1" sx={{fontWeight: "bold", color: "black"}}>
                            The Bright Future of Web 3.0?
                        </Typography>
                    </Grid>
                    <Grid container xs={6}>
                        <Grid xs={12} className="Regular-Text">
                            <Typography variant="h5">
                                We dive into the next evolution of the web that claims to put the power of the platforms
                                back into the hands of the people.
                                But is it really fulfilling its promise?
                            </Typography>
                        </Grid>
                        <Grid xs={12}>
                            <Button variant="contained" className="Button">
                                Read more
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container xs={4}>
                    <Paper className="New-Articles">
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
                <Grid container xs={12} spacing={2} paddingTop={8}>
                    <Grid container xs={4}>
                        <Grid xs={3}>
                            <img src={ComputerImage}/>
                        </Grid>
                        <Grid container xs={8}>
                            <Grid xs={12}><Typography variant="h2" color="grey.500">01</Typography></Grid>
                            <Grid xs={12}><Typography variant="h5" fontWeight="bolder">Reviving Retro
                                PCs</Typography></Grid>
                            <Grid xs={12}><Typography variant="h5" fontWeight="bold" color="grey.500">What happens when
                                old PCs are given modern upgrades?</Typography></Grid>
                        </Grid>
                    </Grid>
                    <Grid container xs={4}>
                        <Grid xs={3}>
                            <img src={KeyboardImage}/>
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
                    <Grid container xs={4}>
                        <Grid xs={3}>
                            <img src={ControllerImage}/>
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
