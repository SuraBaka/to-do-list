import React from "react";
import {View , Button, Text, StyleSheet} from 'react-native';

const TodoItem = React.memo(({todo, onUpdateStatus}) => {
    return (
        <View style = {styles.container}>
            <Text><Text style = {styles.title}>{todo.time}</Text></Text>
            <Text><Text style = {styles.title}>{todo.description}</Text></Text>
            <Text><Text style = {styles.title}>{todo.status}</Text></Text>
            <Button title ={todo.status==='Doing' ? 'Mark as Done ' : 'Mark as Doing'} onPress = {onUpdateStatus}/>
        </View>
    )
})

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 10,
    },
    title: {
        fontWeight: '600',
        fontSize: 18,
        marginBottom: 10
    },
    item :{
        padding: 15,
        marginVertical: 9,
        borderRadius: 9,
        backgroundColor: '#f2f2f2',
        shadowColor: '#000',
        shadowRadius: 5,
        shadowOpacity: 0.1,
        elevation: 3
    }
});

export default TodoItem