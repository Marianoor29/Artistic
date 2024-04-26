import React from 'react';
import {
  View,
  FlatList,
  Text,
} from 'react-native';
import styles from './styles';
import { CreatePost, Header, PopularArtist, Post, ScreenWrapper } from '../../components';
import AppColors from '../../utils/AppColors';
import { logo, postPicture, user } from '../../assets/images';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { width } from '../../utils/Dimension';
import { artistData, postData } from '../../utils/DummyData';


const Home = ({ navigation }: any) => {
  const renderItems =({item}: any) => {
    return(
      <PopularArtist
      // key={item.key}
      source={item.source}
      artistName={item.artistName}
    />
    )
  }
  return (
    <ScreenWrapper
      scrollEnabled
      statusBarColor={AppColors.blue}
      barStyle='light-content'
      headerUnScrollable={() => (
        <Header
          source={logo}
          icon1={<AntDesign name='search1' size={width(6)} color={AppColors.white} />}
          icon2={<AntDesign name='bells' size={width(6)} color={AppColors.white} />}
          firstIcon={<Ionicons name='filter' size={width(6)} color={AppColors.white} />}
        />
      )}>
      <View style={styles.container}>
        <View style={styles.sellerView}>
          <View style={styles.topTitleView}>
        <Text style={styles.topTitle}>Top Sellers</Text>
        </View>
        <View style={styles.topproductView}>
        <Text style={styles.topproductTitle}>Top Products</Text>
        </View>
            </View>
            <FlatList
           horizontal
              data={artistData}
              renderItem={renderItems}
              keyExtractor={(item, index) => String(index)}
              showsHorizontalScrollIndicator={true}
              contentContainerStyle={styles.statusRawContainer}
            />
       <CreatePost />
        {postData.map((item, key) => {
          return  (
            <Post
              key={item.key}
              source={item.source}
              postPicture={item.postPicture}
              Price={item.Price}
              caption={item.caption}
              userName={item.userName}
              time={item.time}
            />
          )
        })}

      </View>
    </ScreenWrapper>
  );
};


export default Home;
