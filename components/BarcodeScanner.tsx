import { View } from "./Themed"
import {Text} from '@gluestack-ui/themed';
import { StyleSheet,Button } from "react-native";
import React, {useState, useEffect} from "react";
import { BarcodeSettings, BarcodeType, Camera, CameraView} from "expo-camera/next"

interface BarcodeScannerProps{
    onSubmit: Function;
}

export const BarcodeScanner: React.FC<BarcodeScannerProps> = (barcodeScannerProps) => {
    const [hasPermission, setHasPermission] = useState(false);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        const getCameraPermissions = async()=>{
            const {status} = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === "granted");
        };

        getCameraPermissions();
    },[]);

    const handleBarCodeScanned = ({ type, data }:any) => {
        setScanned(true);
        barcodeScannerProps.onSubmit(data)
        
      };
    const barcodeTypes: BarcodeType[] = ["qr", "upc_a", "upc_e", "ean13", "ean8"]
    const barcodeScannerSettings: BarcodeSettings = {
        barcodeTypes: barcodeTypes
    }

    if(hasPermission === null){
        return <Text>Requesting for camera permission!</Text>;
    }
    if(hasPermission === false){
        return <Text>No access to camera</Text>;
    }
    
    return (
        <View style={styles.container}>
            <CameraView
                onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
                barcodeScannerSettings={barcodeScannerSettings}
                style={StyleSheet.absoluteFillObject}
            />
            {scanned && (
                <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
            )}
            <Text>Hello</Text>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "center",
      height:200
    },
});