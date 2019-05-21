/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, PermissionsAndroid, TouchableOpacity, NativeModules, Dimensions, PixelRatio} from 'react-native';
import {RNCamera} from 'react-native-camera';
import RNTextDetector from "react-native-text-detector";

type Props = {};
export default class App extends Component<Props> {
    camera = null;
    // componentDidMount() {
    //   requestCameraPermission()
    // }
    state = {
        height: 3000,
        width: 4000,
        visionResp: []
    };
    detectText = async () => {
        try {
            const options = {
                quality: 0.8,
                base64: true,
                skipProcessing: true,
            };
            const data = await this.camera.takePictureAsync(options);
            console.log(data);
            const visionResp = await RNTextDetector.detectFromUri(data.uri);
            console.log('visionResp', visionResp);
            this.setState({
                visionResp
            })
        } catch (e) {
            console.warn(e);
        }
    };

    render() {
        const {visionResp} = this.state;
        const { width, height } = Dimensions.get('window');
        console.log(PixelRatio.getPixelSizeForLayoutSize(width));
        return (
            <View style={styles.container}>
                {visionResp.map(({bounding: {height, width, left, top}}, id) => {
                    console.log(width);
                    const style = {
                        borderWidth: 2,
                        borderColor: '#d6d7da',
                        width,
                        height,
                        left,
                        top,
                        position: "absolute",
                        zIndex: 9999
                    };
                    return <View key={id} style={style}/>
                })}
                <RNCamera
                    ref={ref => {
                        this.camera = ref;
                    }}
                    style={styles.preview}
                    type={RNCamera.Constants.Type.back}
                    androidCameraPermissionOptions={{
                        title: 'Permission to use camera',
                        message: 'We need your permission to use your camera',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                    }}
                    androidRecordAudioPermissionOptions={{
                        title: 'Permission to use audio recording',
                        message: 'We need your permission to use your audio',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                    }}
                    onGoogleVisionBarcodesDetected={({barcodes}) => {
                        console.log(barcodes);
                    }}
                />
                <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center'}}>
                    <TouchableOpacity onPress={this.detectText.bind(this)} style={styles.capture}>
                        <Text style={{fontSize: 14}}> SNAP </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    takePicture = async function () {
        if (this.camera) {
            const options = {quality: 0.5, base64: true};
            const data = await this.camera.takePictureAsync(options);
            console.log(data.uri);
        }
    };
}

const styles = StyleSheet.create({
    test: {
        backgroundColor: 'red',
        position: "absolute",
        left: 10,
        top: 40,
        zIndex: 99999
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
    },
});
