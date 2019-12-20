import * as React from 'react';
import { View, Text, Image, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import { NavigationInjectedProps } from "react-navigation";
import { NativeModules } from "react-native";

import { connect } from 'react-redux';
import { ConnectState } from 'models/connect';
import GlobalStyles, { FaceStyles } from 'styles/index.css';
import Header from 'components/Header';

// 图片引入
import bgPage from 'assets/images/bg-page.png';
import faceImgCard from 'assets/images/face-img-card.png';
import faceIconOr from 'assets/images/face-icon-or.png';
import faceImgFinger from 'assets/images/face-img-finger.png';

export interface FaceProps extends NavigationInjectedProps {
}

class Face extends React.Component<FaceProps> {
  
  componentDidMount() {
    NativeModules.FingerModule.registFinger((a, b, c, d) => {
      console.warn(a,b,c,d);
    }, () => {});
  }
  render() {
    const { navigation } = this.props;
    return (
      <ImageBackground source={bgPage} style={GlobalStyles.container}>
        <Header replace={navigation.replace} title="认证" allowBack={true} backPage="Home" titleRight="0502监室  |  2019年12月3日 星期二    15:20" />
        <View style={FaceStyles.content}>
          <Image source={faceImgCard}/>
          <Image source={faceIconOr}/>
          <Image source={faceImgFinger}/>
        </View>
      </ImageBackground>
    )
  }
}

export default connect()(Face);
