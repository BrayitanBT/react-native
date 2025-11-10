import estilos from "../Estilos/Style"
import {  View, Text,  TouchableOpacity} from "react-native";

import {Task} from "../Componentes/Tablero";
interface ItemProps{
    item:Task,
    markDone:(task:Task)=>void,
    deleteFunction:(task:Task)=>void
}
export default function RenderItem({ item,markDone,deleteFunction }: ItemProps) {
    return(
        <View>
            <TouchableOpacity onPress={()=>markDone(item)}>
                <Text style={item.done ? estilos.textDone : estilos.text}>{item.title}</Text>
                <Text>{item.date.toDateString()}</Text>
            </TouchableOpacity>
            {
                item.done && 
                (<TouchableOpacity 
                style = {estilos.removeBoton}
                onPress={()=>deleteFunction(item)}>
                    
                    <Text style = {estilos.removeText}>Eliminar </Text>
                </TouchableOpacity>)
            }
        </View>
    )
}

