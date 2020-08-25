import React from 'react'
import './TextGrid.css'

const texto = 'Você pode contar com Ronaldo Setsuo Kageyama para defender seus direitos: Divórcio, ação de alimentos / revisional / exoneração / execução, união estável, guarda compartilhada / alternada / unilateral, adoção, regulamentação de visitas, investigação de paternidade, inventário, interdição.';
export default () => {
    return (
        <div className="grid-text">
            <h1 className="sobre-titulo">Sobre</h1>
            <p>{texto}</p>
        </div>
    )
}