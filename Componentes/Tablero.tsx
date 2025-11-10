import React from "react";
import { TextInput, View, Text,  TouchableOpacity,  FlatList,} from "react-native";
import estilos from "../Estilos/Style"
import RenderItem from "../Page/RenderItem";

const task = [
    {
        title: 'Comer',
        done: true,
        date: new Date()
    },
    {
        title: 'Dormir',
        done: false,
        date: new Date()
    },
    {
        title: 'Sacar la basura',
        done: false,
        date: new Date()
    }
]

export interface Task {
    title: string,
    done: boolean,
    date: Date
}

export default function Tablero() {
  const markDone=()=>{console.log('marcado hecho')}
  const deleteFunction=()=>{console.log('marcado borrado')}
    return (
        <View style={estilos.container}>
            <Text style={estilos.title}>Lista de tareas</Text>
            <View style={estilos.inputcontainer}>
                <TextInput placeholder="Escriba" style={estilos.textinput} />
                <TouchableOpacity style={estilos.boton}>
                    <Text>Agregar</Text>
                </TouchableOpacity>
            </View>

            <View>
                <FlatList
                    renderItem={({item})=>
                    <RenderItem
                    item={item}
                    markDone={markDone}
                    deleteFunction={deleteFunction}
                    />
                    }  
                     data={task}
                />
            </View>
        </View>
    )
}