import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import Video from 'react-native-video';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import AntIcon from 'react-native-vector-icons/AntDesign';

const App: () => React$Node = () => {
  const [selected, setSelected] = useState('home');
  const [selectedVideo, setSelectedVideo] = useState(0);
  const videos = [
    {
      url:
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
      description: 'For bigger meltdowns #chromcast',
      user: 'john_doe',
      likes: 50,
      commentCount: 20,
    },
    {
      url:
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
      description: 'Cars',
      user: 'jane_doe',
      likes: 8,
      commentCount: 2,
    },
    {
      url:
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      description: 'This is a description #description #bunnies',
      user: 'test_user',
      likes: 154,
      commentCount: 120,
    },
  ];

  const onSwipeUp = () => {
    if (selectedVideo < videos.length - 1) setSelectedVideo(selectedVideo + 1);
    else setSelectedVideo(0);
  };

  const onSwipeDown = () => {
    if (selectedVideo > 0) setSelectedVideo(selectedVideo - 1);
    else setSelectedVideo(videos.length - 1);
  };

  const homeView = (
    <GestureRecognizer
      style={styles.media}
      onSwipeUp={onSwipeUp}
      onSwipeDown={onSwipeDown}>
      <Video
        source={{
          uri: videos[selectedVideo].url,
        }}
        resizeMode="cover"
        style={styles.backgroundVideo}
        repeat={true}
      />
      <View style={styles.videoDescription}>
        <View>
          <View styles={styles.stats}>
            <AntIcon name="heart" color="white" size={50} />
            <Text style={styles.statText}>{videos[selectedVideo].likes}</Text>
          </View>
          <View styles={styles.stats}>
            <FontAwesomeIcon name="commenting" color="white" size={50} />
            <Text style={styles.statText}>
              {videos[selectedVideo].commentCount}
            </Text>
          </View>
        </View>
        <View style={{alignSelf: 'flex-start'}}>
          <Text style={styles.videoText}>
            {'@' + videos[selectedVideo].user}
          </Text>
          <Text style={styles.videoText}>
            {videos[selectedVideo].description}
          </Text>
        </View>
      </View>
    </GestureRecognizer>
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
    marginBottom: 20,
    justifyContent: 'space-around',
    width: '100%',
    alignItems: 'flex-end',
    padding: 12,
  },
  videoText: {
    color: 'white',
  },
  statText: {
    color: 'white',
    textAlign: 'center',
  },
  stats: {},
});

export default App;
