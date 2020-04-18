import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Video from 'react-native-video';

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
            }} // Can be a URL or a local file.
            resizeMode="cover"
            style={styles.backgroundVideo}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  media: {
    backgroundColor: 'black',
    flex: 1,
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
});

export default App;
