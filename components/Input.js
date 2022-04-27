
import {StyleSheet, TextInput} from "react-native";

const Input = (props) => {
    return (
        // "{...props}" means that wherever V use TextInput component V can set different set of properties for each. Like one TextInput component is taking oly numbers and other is avoiding capital letters. So V will attatch all these properties where these components are used and then these different props of different components will be applied accrodingly. Ex: In StartGameScreen.js and see "Input" component
        <TextInput {...props} style={{...styles.input, ...props.style}} />
    )
}

const styles = StyleSheet.create({
    input: {
        height: 30,
        borderBottomColor: "grey", 
        borderBottomWidth: 1, 
        marginVertical: 10
    }
})

export default Input;



























