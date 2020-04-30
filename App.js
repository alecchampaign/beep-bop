import React, {useState} from 'react';
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
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import AntIcon from 'react-native-vector-icons/AntDesign';

const App: () => React$Node = () => {
  // console.error(AntIcon);
  const [selected, setSelected] = useState('home');
  const [selectedVideo, setSelectedVideo] = useState(2);
  const videos = [
    {
      url:
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
      description: 'For bigger meltdowns #chromcast',
      user: 'john_doe',
    },
    {
      url:
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
      description: 'Cars',
      user: 'jane_doe',
    },
    {
      url:
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      description: 'This is a description #description #bunnies',
      user: 'test_user',
    },
  ];
  const homeView = (
    <View style={styles.media}>
      <Video
        source={{
          uri: videos[selectedVideo].url,
        }}
        resizeMode="cover"
        style={styles.backgroundVideo}
        repeat={true}
      />
      <View style={styles.videoDescription}>
        <Text style={styles.videoText}>{'@' + videos[selectedVideo].user}</Text>
        <Text style={styles.videoText}>
          {videos[selectedVideo].description}
        </Text>
      </View>
    </View>
  );
  const userView = (
    <View style={styles.media}>
      <Text>Test</Text>
    </View>
  );
  const views = {home: homeView, user: userView};

  return (
    <>
      <StatusBar translucent={true} backgroundColor="transparent" />
      <SafeAreaView style={styles.media}>
        {views[selected]}
        <View style={styles.navbar}>
          <TouchableOpacity
            style={styles.navBtn}
            onPress={() => setSelected('home')}>
            <MaterialIcon
              name={selected === 'home' ? 'home' : 'home-outline'}
              color="white"
              size={35}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.navBtn}>
            <AntIcon name="pluscircleo" color="white" size={35} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navBtn}
            onPress={() => setSelected('user')}>
            <FontAwesomeIcon
              name={selected === 'user' ? 'user' : 'user-o'}
              color="white"
              size={35}
            />
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
  videoDescription: {
    position: 'absolute',
    bottom: 0,
    margin: 10,
    marginBottom: 20,
  },
  videoText: {
    color: 'white',
  },
});

export default App;
