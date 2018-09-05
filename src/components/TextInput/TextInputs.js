import React from 'react';
import { View, Text, StyleSheet,TextInput, Button } from 'react-native';

const textInputs = (props) => (
    <View style={styles.inputContainer} >
        <TextInput
        placeholder="An Awesome place"
        style={styles.placeInput}
        value={props.value} onChangeText={props.changeText}
        />
        <Button title="Add"
        style={styles.placeButton} onPress={props.PressButton} />
    </View>
);

const styles = StyleSheet.create({
    inputContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    placeInput: {
        width: "70%"
    },
    placeButton: {
        width: "30%"
    }
});

export default textInputs;


