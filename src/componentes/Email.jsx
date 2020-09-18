import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styles from './Email.css'

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
    textfield:{
        margin: '1em 0'
    },
  });
export default () => {
    const [remetente, setRemetente] = useState('');
    const [titulo, setTitulo] = useState('');
    const [texto, setTexto] = useState('');
    const margin = {
        margin: '1em 0'
    };

    function enviar(){
    }

    return (
        <form className="Grid-Email">
            <div className="header-grid">
                <h1 style={{color: '#2d3436', fontSize: '30px'}}>Contato</h1>
            </div>
            <div className="input-grid">
                <TextField style={margin} InputLabelProps={{color: 'white'}} id="standard-basic" label="Nome" size="small" onChange={e => setRemetente(e.target.value)}/>
                <TextField style={margin} id="standard-basic" label="Email" size="small" onChange={e => setRemetente(e.target.value)}/>
                <TextField style={margin} className={useStyles.input} id="standard-basic" label="Standard" size="small" label="Titulo" onChange={e => setTitulo(e.target.value)}/>
                <textarea style={{width:'100%', height: '150px'}} onChange={e => setTexto(e.target.value)}></textarea>
            </div>
            <Button style={margin} onClick={enviar}>Enviar</Button>
        </form>
    )
}