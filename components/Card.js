
import {View, StyleSheet} from "react-native";

const Card = (props) => {
    return (
        // Here V R merging all the new styles which will come from the parent into the current element and this will alsi override the styles which are passed with the styles present here
        <View style={{...styles.card, ...props.style}} >{props.children}</View>   
    );
}

const styles = StyleSheet.create({
    card: { 
        elevation: 6,
        shadowColor:"black",
        shadowRadius: 6,
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        backgroundColor: "white",
        padding: 20, 
        borderRadius: 10
    }
})

export default Card;





























