import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/AntDesign';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar translucent={true} backgroundColor="transparent" />
      <SafeAreaView style={styles.media}>
        <View style={styles.media}>
          <Video
            source={{
              uri:
                'http://mirrors.standaloneinstaller.com/video-sample/jellyfish-25-mbps-hd-hevc.mp4',
            }}
            resizeMode="cover"
            style={styles.backgroundVideo}
            repeat={true}
          />
        </View>
        <View style={styles.navbar}>
          <TouchableOpacity style={styles.navBtn}>
            <Icon name="home" color="white" size={35} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.navBtn}>
            <Icon name="pluscircleo" color="white" size={35} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.navBtn}>
            <Icon name="user" color="white" size={35} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  media: {
    backgroundColor: 'black',
    flex: 15,
  },
  text: {
    color: 'white',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  navbar: {
    flex: 1.1,
    borderTopWidth: 2,
    borderTopColor: '#1c1c1c',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
  },
  navBtn: {
    borderBottomWidth: 2,
  },
});

export default App;
