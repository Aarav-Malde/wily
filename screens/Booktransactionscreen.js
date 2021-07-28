import { BarCodeScanner } from 'expo-barcode-scanner';
import React from 'react';
import { Text, View , TouchableOpacity, StyleSheet, TextInput, Image} from 'react-native';
export default class Booktransactionscreen extends React.Component{
constructor(){
    super();
    this.state={
            hasCameraPermission: "",
            scanned: false,
            scannedbookID: "",
            scannedstudentID: "",
            buttonState: "normal",

    }
}
handleBarcodeScanned=async({type,data})=>{
    if(this.state.buttonState=="bookID"){
        this.setState({
            scanned: true,
            scannedbookID: data,
            buttonState: "normal",
        
        })
    }
    else if(this.state.buttonState=="studentID"){
        this.setState({
            scanned: true,
            scannedstudentID: data,
            buttonState: "normal",
        
        })
    }

}
getPermissions=(ID)=>{
    this.setState({
        hasCameraPermission: true,
        buttonState: ID,
        scanned: false,

    })
}
render(){
    var hasCameraPermission=this.state.hasCameraPermission;
    var scanned = this.state.scanned;
    var buttonState = this.state.buttonState;
    if(buttonState != "normal" && hasCameraPermission){
        return(
            <BarCodeScanner onBarCodeScanned={scanned ? undefined: this.handleBarcodeScanned} 
            style={StyleSheet.absoluteFillObject}>

            </BarCodeScanner>
        );
    }
    else if(buttonState=="normal"){
            return(
                <View style={s.container}>
                    <View>
                     <Image source ={require("../assets/booklogo.jpg")} styles={{width: 200, height: 200}}></Image>   
                    </View>
                    <View style={s.inputView}>
                        <TextInput style={s.inputBox} placeholder={"bookID"} value= {this.state.scannedbookID}> </TextInput>
                        <TouchableOpacity style={s.scanButton} onPress={()=>{
                            this.getPermissions("bookID")
                        }}>
                        <Text style={s.buttonText}>Scan</Text>
                    </TouchableOpacity>
                    </View>

                    <View style={s.inputView}>
                        <TextInput style={s.inputBox} placeholder={"studentID"} value= {this.state.scannedstudentID}> </TextInput>
                        <TouchableOpacity style={s.scanButton} onPress={()=>{
                            this.getPermissions("studentID")
                        }}>
                        <Text style={s.buttonText}>Scan</Text>
                    </TouchableOpacity>
                    </View>                 
                </View>
                
            )
    }


}
}


    const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    displayText:{
      fontSize: 15,
      textDecorationLine: 'underline'
    },
    scanButton:{
      backgroundColor: '#2196F3',
      padding: 10,
      margin: 10
    },
    buttonText:{
      fontSize: 15,
      textAlign: 'center',
      marginTop: 10
    },
    inputView:{
      flexDirection: 'row',
      margin: 20
    },
    inputBox:{
      width: 200,
      height: 40,
      borderWidth: 1.5,
      borderRightWidth: 0,
      fontSize: 20
    },
    scanButton:{
      backgroundColor: '#66BB6A',
      width: 50,
      borderWidth: 1.5,
      borderLeftWidth: 0
    }
  });

