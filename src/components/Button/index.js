import React from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native'

function CustomButton(props) {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            style={props.customStyle}>
            <Text style={[{ color: props.textColor }, { alignSelf: 'center' }]}>{props.title}</Text>
            {/* <Button
                title={props.title}
                color={props.color}
            /> */}
        </TouchableOpacity>
    );
}

CustomButton.defaultProps = {
    title: "Submit"
}
export default CustomButton;