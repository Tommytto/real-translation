import React, { Component } from "react";
import { TouchableOpacity, View, ImageBackground, Text } from "react-native";
import { RNCamera as Camera } from "react-native-camera";
import RNTextDetector from "react-native-text-detector";
import style, { screenHeight, screenWidth } from "./styles";
import {stringify} from 'query-string';

const PICTURE_OPTIONS = {
  quality: 1,
  fixOrientation: true,
  forceUpOrientation: true
};

export default class App extends React.Component {
  state = {
    loading: false,
    image: null,
    error: null,
    visionResp: []
  };

  reset(error = "OTHER") {
    this.setState(
        {
          loading: false,
          image: null,
          error
        },
        () => {
          // setTimeout(() => this.camera.startPreview(), 500);
        }
    );
  }

  takePicture = async camera => {
    if (this.state.image) {
      this.setState({image: null});
      return;
    }
    this.setState({
      loading: true
    });
    try {
      const data = await camera.takePictureAsync(PICTURE_OPTIONS);
      if (!data.uri) {
        throw "OTHER";
      }
      this.setState(
          {
            image: data.uri
          },
          () => {
            this.processImage(data.uri, {
              height: data.height,
              width: data.width
            });
          }
      );
    } catch (e) {
      console.warn(e);
      this.reset(e);
    }
  };

  translate = async(text) => {
    const apiKey = 'trnsl.1.1.20190521T151257Z.c9c0a65f9789f5d7.e6b27d05af308c18fbfb63e82134e89f82c35ab9';
    const lang = 'en-ru';
    const postData = {
      text,
      lang,
      key: apiKey
    };
    const data = await fetch('https://translate.yandex.net/api/v1.5/tr.json/translate?' + stringify(postData));
    const response = await data.json();
    return response.text;
  };

  processImage = async (uri, imageProperties) => {
    const visionResp = await RNTextDetector.detectFromUri(uri);
    if (!(visionResp && visionResp.length > 0)) {
      throw "UNMATCHED";
    }
    const text = visionResp.map((item) => item.text);
    const translated = await this.translate(text);
    this.setState({
      visionResp: this.mapVisionRespToScreen(visionResp, imageProperties, translated)
    });
  };

  mapVisionRespToScreen = (visionResp, imageProperties, translated) => {
    const IMAGE_TO_SCREEN_Y = screenHeight / imageProperties.height;
    const IMAGE_TO_SCREEN_X = screenWidth / imageProperties.width;

    return visionResp.map((item, i) => {
      return {
        ...item,
        text: translated[i],
        position: {
          width: item.bounding.width * IMAGE_TO_SCREEN_X + 20,
          left: item.bounding.left * IMAGE_TO_SCREEN_X - 20,
          height: item.bounding.height * IMAGE_TO_SCREEN_Y,
          top: item.bounding.top * IMAGE_TO_SCREEN_Y
        }
      };
    });
  };

  renderCaptureButton() {
    return <View style={style.buttonContainer}>
      <TouchableOpacity
          onPress={() => this.takePicture(this.camera)}
          style={style.button}
      />
    </View>;
  }

  renderCamera() {
    const {image} = this.state;
    if (image) {
      return  null;
    }
    return <Camera
        ref={cam => {
          this.camera = cam;
        }}
        key="camera"
        style={style.camera}
        notAuthorizedView={null}
        playSoundOnCapture
    >

    </Camera>;
  }

  renderImageBackground() {
    const {image} = this.state;
    if (!image) {
      return null;
    }
    return <ImageBackground
        source={{ uri: image }}
        style={style.imageBackground}
        key="image"
        resizeMode="cover"
    >
      {this.state.visionResp.map(item => {
        return (
            <TouchableOpacity
                style={[style.boundingRect, item.position]}
                key={item.text}
            ><Text>{item.text}</Text></TouchableOpacity>
        );
      })}
    </ImageBackground>
  }

  render() {
    return (
        <View style={style.screen}>
          {this.renderCaptureButton()}
          {this.renderCamera()}
          {this.renderImageBackground()}
        </View>
    );
  }
}
