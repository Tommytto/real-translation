// @flow
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

import { RNCamera } from 'react-native-camera';
import { inject, observer } from 'mobx-react';
import injectService from '../../../../logic/hocs/injectService';
import compose from '../../../../helpers/compose';

type TProps = {};

type TState = {
    [string]: any
};

const landmarkSize = 2;

class TextRecognizer<UpperProps> extends React.Component<UpperProps, TState> {
    config = {
        flash: 'off',
        zoom: 0,
        autoFocus: 'on',
        depth: 0,
        type: 'back',
        whiteBalance: 'auto',
        ratio: '16:9',
        recordOptions: {
            mute: false,
            maxDuration: 5,
            quality: RNCamera.Constants.VideoQuality['288p']
        },
        isRecording: false,
        canDetectFaces: false,
        canDetectBarcode: false
    };
    recognized = [];
    camera: Object = null;
    state = {
        textBlocks: [],
        canDetectText: false
    };

    fontSizeWidth = 0.3;
    fontSizeHeight = 1;

    componentWillUnmount() {
        this.props.translationService.addTranslations(this.recognized);
    }

    toggle = (value: string) => () => this.setState((prevState) => ({ [value]: !prevState[value] }));

    renderTextBlocks = () => {
        return (
            <View style={styles.facesContainer} pointerEvents="none">
                {this.state.textBlocks.map(this.renderTextBlock)}
            </View>
        );
    };

    renderTextBlock = ({ bounds, value, fontSize }: Object) => (
        <React.Fragment key={value + bounds.origin.x}>
            <View
                style={[
                    styles.text,
                    {
                        ...bounds.size,
                        width: bounds.size.width + 80,
                        left: bounds.origin.x,
                        top: bounds.origin.y
                    }
                ]}
            >
                <Text numberOfLines={1} style={[styles.textBlock, { fontSize }]}>
                    {value}
                </Text>
            </View>
        </React.Fragment>
    );
    getFontSize({ text, width, height }: Object) {
        const letters = text.split('');
        const widthOnLetter = width / letters.length;
        const heightOnLetter = height;
        const fontSizeOnWidth = widthOnLetter / this.fontSizeWidth;
        const fontSizeOnHeight = height;
        return Math.floor(Math.min(fontSizeOnHeight, fontSizeOnWidth) - 5);
    }
    textRecognized = async (object: Object) => {
        const { textRecognitionService } = this.props;
        const { textBlocks } = object;
        const texts = textBlocks.reduce((result, item) => {
            result.push(...item.components.map((item) => item.value));
            return result;
        }, []);
        const translated = await textRecognitionService.translate(texts);
        const translationList = translated.map((translation, i) => [
            {
                lang: 'en',
                value: texts[i]
            },
            {
                lang: 'ru',
                value: translation
            }
        ]);
        this.recognized.push(...translationList);
        const textLines = textBlocks
            .reduce((result, item) => {
                result.push(...item.components);
                return result;
            }, [])
            .map((item, i) => ({
                ...item,
                value: translated[i],
                fontSize: this.getFontSize({
                    text: translated[i],
                    width: item.bounds.size.width,
                    height: item.bounds.size.height
                })
            }));
        this.setState({ textBlocks: textLines });
    };

    renderCamera() {
        const { canDetectText } = this.state;
        return (
            <RNCamera
                ref={(ref) => {
                    this.camera = ref;
                }}
                style={{
                    flex: 1
                }}
                type={this.config.type}
                whiteBalance={this.config.whiteBalance}
                ratio={this.config.ratio}
                focusDepth={this.config.depth}
                trackingEnabled
                permissionDialogTitle="Permission to use camera"
                permissionDialogMessage="We need your permission to use your camera phone"
                onTextRecognized={canDetectText ? this.textRecognized : null}
            >
                <View
                    style={{
                        flex: 1
                    }}
                >
                    <View
                        style={{
                            backgroundColor: 'transparent',
                            flexDirection: 'row',
                            justifyContent: 'flex-end'
                        }}
                    >
                        <TouchableOpacity onPress={this.handlePressDetect} style={styles.flipButton}>
                            <Text style={styles.flipText}>{!canDetectText ? 'Detect Text' : 'Detecting Text'}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {!!canDetectText && this.renderTextBlocks()}
            </RNCamera>
        );
    }

    handlePressDetect = () => {
        const lastDetected = this.state.canDetectText;
        this.setState({
            canDetectText: !lastDetected
        });
        if (!this.state.canDetectText && lastDetected) {
            const filtered = this.props.textRecognitionService.filterTranslationList(this.recognized);
            this.props.translationService.addTranslations(filtered);
        }
    };

    render() {
        return <View style={styles.container}>{this.renderCamera()}</View>;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        backgroundColor: '#000'
    },
    flipButton: {
        flex: 0.3,
        height: 40,
        marginHorizontal: 2,
        marginBottom: 10,
        marginTop: 10,
        borderRadius: 8,
        borderColor: 'white',
        borderWidth: 1,
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    flipText: {
        color: 'white',
        fontSize: 15
    },
    zoomText: {
        position: 'absolute',
        bottom: 70,
        zIndex: 2,
        left: 2
    },
    picButton: {
        backgroundColor: 'darkseagreen'
    },
    facesContainer: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        top: 0
    },
    face: {
        padding: 10,
        borderWidth: 2,
        borderRadius: 2,
        position: 'absolute',
        borderColor: '#FFD700',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    landmark: {
        width: landmarkSize,
        height: landmarkSize,
        position: 'absolute',
        backgroundColor: 'red'
    },
    faceText: {
        color: '#FFD700',
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10,
        backgroundColor: 'transparent'
    },
    text: {
        padding: 10,
        backgroundColor: 'white',
        position: 'absolute',
        justifyContent: 'center'
    },
    textBlock: {
        position: 'absolute',
        textAlign: 'center',
        backgroundColor: 'transparent'
    }
});

export default compose(
    injectService('translationService'),
    injectService('textRecognitionService'),
    observer
)(TextRecognizer);
