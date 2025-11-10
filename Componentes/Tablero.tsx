import React, { useState } from 'react';
import { TextInput, View, Text,  TouchableOpacity,  FlatList,} from "react-native";
import estilos from "../Estilos/Style"
import RenderItem from "../Page/RenderItem";

const tasks = [

]

export interface Task {
    title: string,
    done: boolean,
    date: Date
}

export default function Tablero() {
  const [text,setText]=useState('')
  const [tasks,setTasks]=useState< Task[] >([])
  const addTasks=()=>{
    const tmp=[...tasks]
    const newTasks={
        title:text,
        done:false,
        date:new Date()
    }
    tmp.push(newTasks)
    setTasks(tmp)
    setText('')
  }
  const markDone=(task:Task)=>{
    const tmp=[...tasks]
    const index = tmp.findIndex(el=>el.title===task.title)
    const todo = tmp[index]
    todo.done=!todo.done
    setTasks(tmp)
}
  const deleteFunction=(task:Task)=>{
    const tmp=[...tasks]
    const index = tmp.findIndex(el=>el.title===task.title)
    tmp.splice(index,1)
    setTasks(tmp)
    
  }
    return (
        <View style={estilos.container}>
            <Text 
                style={estilos.title}>  
                    Lista de tareas
            </Text>
            <View style={estilos.inputcontainer}>
                <TextInput 
                    placeholder="Escriba" 
                    style={estilos.textinput} 
                    value={text}
                    onChangeText={(t:string)=>setText(t)} 
                />
                <TouchableOpacity
                    onPress={addTasks} 
                    style={estilos.boton}>
                <Text>
                    Agregar
                </Text>
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
                     data={tasks}
                />
            </View>
        </View>
    )
}