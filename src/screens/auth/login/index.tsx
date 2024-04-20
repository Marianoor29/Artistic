import { View, Text, StatusBar, SafeAreaView } from 'react-native'
import React from 'react'
import styles from './styles'
import { Button } from '../../../components'
import { useDispatch } from 'react-redux'
import { setAppLoader } from '../../../redux/slice/config/configSlice'
import { setIsLoggedIn } from '../../../redux/slice/user/userSlice'
import AppColors from '../../../utils/AppColors'

const Login = ({navigation} : any) => {
  const dispatch = useDispatch();

  const logInMethod = () => {
    dispatch(setAppLoader(true));
    setTimeout(() =>{
      dispatch(setIsLoggedIn(true))
      dispatch(setAppLoader(false))
    },600)
  }
  return (
    <>
    <StatusBar barStyle="dark-content" backgroundColor={AppColors.white} />
    <SafeAreaView style={styles.SafeAreaView}>
      <View style={styles.container}>
      <Text>Login</Text>
      <Button
            onPress={() => logInMethod}
            text={'Go To Profile'}
          />
     </View>
      </SafeAreaView>
    </>
  )
}

export default Login