import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './Email.css'

const useStyles = makeStyles({
    input: {
      /*border: 0,
      borderColor: 'pink',
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)',
      color: '#ffffff',
      height: 30,*/
      color: '#f39c12',
      fontSize: '20px',
      padding: '0 30px',
    },
  });

export default () => {
    return (
        <div className="Grid-Email">
            <div className="Input-Emails">
                <TextField className={useStyles.root} id="standard-basic" label="Email" size="large" in/>
                <TextField id="standard-basic" label="Standard" size="large"/>
                <textarea></textarea>
            </div>
        </div>
    )
}