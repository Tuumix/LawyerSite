import React from 'react'
import {slide as Menu} from 'react-burger-menu'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link, animateScroll as scroll } from "react-scroll";
import './Header.css'
import {
  FacebookIcon,
  WhatsappIcon,
} from "react-share";
const useStyles = makeStyles({
    btn: {
      /*border: 0,
      borderColor: 'pink',
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)',
      color: '#ffffff',
      height: 30,*/
      color: '#f39c12',
      fontSize: '14px',
      padding: '0 30px',
      '&:hover':{
        color: '#2d3436',
        'background-color': '#f39c12'
      }
    },
  });

export default () => {
    const classes = useStyles();

    return (
        <div className="Header">
              <ul className="btn-header">
                  <Link to="bio" smooth={true} duration={1000}><Button className={classes.btn} size='small'>Sobre</Button></Link>
                  <Link to="contato" smooth={true} duration={1000}><Button className={classes.btn} size='small'>Contato</Button></Link>
              </ul>
              
              {/* <Menu isOpen={false}>
                <a onClick={() => window.open("https://www.facebook.com/wellz.tkn")}><FacebookIcon size='28px'/></a>
                <a onClick={() => window.open("https://wa.me/5518996221772")}><WhatsappIcon size='28px'/></a>
              </Menu> */}
              <ul className="icons-header">
                  <a onClick={() => window.open("https://www.facebook.com/wellz.tkn")}><FacebookIcon size='28px'/></a>
                  <a onClick={() => window.open("https://wa.me/5518996221772")}><WhatsappIcon size='28px'/></a>
              </ul>
        </div>
    )
}