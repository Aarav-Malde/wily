import { BarCodeScanner } from 'expo-barcode-scanner';
import React from 'react';
import { Text, View , TouchableOpacity, StyleSheet} from 'react-native';
export default class Booktransactionscreen extends React.Component{
constructor(){
    super();
    this.state={
            hasCameraPermission: "",
            scanned: false,
            scannedData: "",
            buttonState: "normal",

    }
}
handleBarcodeScanned=async({type,data})=>{
this.setState({
    scanned: true,
    scannedData: data,
    buttonState: "normal",

})
}
getPermissions=()=>{
    this.setState({
        hasCameraPermission: true,
        buttonState: "click",
        scanned: false,
        
    })
}
render(){
    var hasCameraPermission=this.state.hasCameraPermission;
    var scanned = this.state.scanned;
    var buttonState = this.state.buttonState;
    if(buttonState=="click" && hasCameraPermission){
        return(
            <BarCodeScanner onBarCodeScanned={scanned ? undefined: this.handleBarcodeScanned} 
            style={StyleSheet.absoluteFillObject}>

            </BarCodeScanner>
        );
    }
    else if(buttonState=="normal"){
            return(
                <View style={s.container}>
                    <Text style={s.displayText}>{hasCameraPermission === true? this.setState.scannedData: "Request Camera Permissions"}</Text>
                    <TouchableOpacity style={s.scanButton} onPress={this.getPermissions}>
                        <Text style={s.buttonText}>Scanned QR Code</Text>
                    </TouchableOpacity>
                </View>
                
            )
    }


}
}

const s = StyleSheet.create({
    container: {
        flex:1,
         justifyContent: 'center', 
         alignItems: 'center',
    },
    displayText: {
            fontSize: 15,
    },
    scanButton: {
            backgroundColor: "red",
            padding: 10,
            margin: 10,

    },
    buttonText: {
        fontSize: 20,

    }
})

