import React,{Component} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link, animateScroll as scroll } from "react-scroll";

import {
    EmailIcon,
    FacebookIcon,
    FacebookMessengerIcon,
    LinkedinIcon,
    WhatsappIcon,
  } from "react-share";
import './Header.css'

const useStyles = makeStyles({
    root: {
      /*border: 0,
      borderColor: 'pink',
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)',
      color: '#ffffff',
      height: 30,*/
      fontSize: '17px',
      padding: '0 30px',
    },
  });

export default () => {
    const classes = useStyles();

    return (
        <div className="Header">
            <div className="btn-header">
                <Link to="bio" smooth={true} duration={1000}><Button className={classes.root}>Sobre</Button></Link>
                <Link to="ramo" smooth={true} duration={1000}><Button className={classes.root}>Ramo</Button></Link>
                <Link to="contato" smooth={true} duration={1000}><Button className={classes.root}>Contato</Button></Link>
            </div>
            <div className="icons-header">
                <a onClick={() => window.open("https://www.facebook.com/wellz.tkn")}><FacebookIcon size='31px'/></a>
                <a onClick={() => window.open("https://www.linkedin.com/in/wellington-hiroshi-takano/")}><LinkedinIcon size='31px'/></a>
                <a onClick={() => window.open("https://wa.me/5518996221772")}><WhatsappIcon size='31px'/></a>
                <a onClick={() => window.open("https://www.instagram.com/tuumi__/")}><ion-icon name="logo-instagram" size='large'></ion-icon></a>
            </div>
        </div>
    )
}