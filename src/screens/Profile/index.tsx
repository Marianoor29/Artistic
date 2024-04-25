import React from 'react';
import {
  SafeAreaView,
  View,
  StatusBar,
  Text,
  FlatList,
} from 'react-native';
import styles from './styles';
import { Button, GalleryCard, Header, ScreenWrapper } from '../../components'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AppColors from '../../utils/AppColors';
import { logo, user, user1 } from '../../assets/images';
import { width } from '../../utils/Dimension';
import { Image } from 'react-native';
import { galleryData } from '../../utils/DummyData';
import CommonStyles from '../../utils/CommonStyles';

const Profile = ({ navigation }: any) => {
  const renderGalleryItem = ({item}: any) => {
    return(
      <GalleryCard
      uri={item.uri}
      title={item.title}
      price={item.price}
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
          <View style={styles.container} >
          <View>
          <Image
            source={{
              uri: "https://itisallaboutart.wordpress.com/wp-content/uploads/2018/02/screen-shot-2018-02-23-at-10-18-36-pm.png?w=375&h=243",
            }}
            style={styles.coverImageStyle}
          />
          <Image source={user} style={styles.profileImageStyle} />
          <View style={styles.editIconViewStyle}>
            <Button text='Edit Profile' buttonStyle={styles.editButtonStyle} textStyle={styles.editButtonText}/>
            </View>
          </View>  
          <View style={styles.infoView}>
          <View style={styles.UserNameView}>
          <Text style={styles.nameStyle} numberOfLines={1}>Maria Noor</Text>
          <Text style={styles.emailStyle}>maria@email.com</Text>
        </View>
        <Text style={styles.nameStyle} numberOfLines={1}>Followers 200</Text>
        </View>
        <View style={styles.galleryView}>
          <View style={styles.topGalleryView}>
            <Text style={styles.galleryText}>Gallery</Text>
            <Text style={styles.seeAllText}>See all</Text>
          </View>
         <FlatList
         data={galleryData}
         renderItem={renderGalleryItem}
          keyExtractor={(item, index) => String(index)}
          showsVerticalScrollIndicator={true}
         />
        </View>

          </View>          
      </ScreenWrapper>
  );
};

export default Profile;
