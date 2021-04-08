import React from 'react'
import { Text, View, Button } from 'react-native'
import { Fragment, useState } from 'react';
import Style from './Style'

export default (props)=>{

    const [numero, setNumero] = useState(props.valor)
    const calcula = ()=>{
        setNumero(numero + 1)
    }



    return (
      <Fragment>
        <Text style={Style.titulo}>LUNCH BAG</Text>

        <Text> Valor total: ${numero}</Text>

        <Button title="Buy" onPress={calcula}/>       
      </Fragment>
    );
};