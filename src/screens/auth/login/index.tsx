import { View, Text, StatusBar, SafeAreaView } from 'react-native'
import React from 'react'
import styles from './styles'
import { Button, InputField } from '../../../components'
import { useDispatch } from 'react-redux'
import { setAppLoader } from '../../../redux/slice/config/configSlice'
import { setIsLoggedIn } from '../../../redux/slice/user/userSlice'
import AppColors from '../../../utils/AppColors'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { computedTypesResolver } from '@hookform/resolvers/computed-types';

type FormValues = {
  email: string,
}

const userSchema = yup.object().shape({
  email: yup
  .string()
  .required("Email is required")
  .email("Email format is invalid."),
});

const Login = ({navigation} : any) => {
  const dispatch = useDispatch();
 const{
  control,
  handleSubmit,
  formState: {errors, isValid},
 } = useForm<FormValues>({
   mode: 'all',
   defaultValues:{
    email: 'maria@gmail.com'
   },
   resolver: yupResolver(userSchema)
 })
  const logInMethod = () => {
    dispatch(setAppLoader(true));
    console.log('app loader true')
    setTimeout(() =>{
      dispatch(setIsLoggedIn(true))
      console.log('logged in true')
      dispatch(setAppLoader(false))
      console.log('app loader false')
    },600)
  }
  // const onChangeName = () => {
  //   return(
  //     setName(name)
  //   )
  // }
  return (
    <>
    <StatusBar barStyle="dark-content" backgroundColor={AppColors.white} />
    <SafeAreaView style={styles.SafeAreaView}>
      <View style={styles.container}>
      <Text> Log in to your account</Text>
      <InputField
      placeholder='Enter a Name'
      control={control}
      name={"email"}
      keyboardType="email-address"
      icon={ <AntDesign name={'user'} size={30} color={AppColors.blue} />}
      error={errors?.email?.message}
      />
      <Button
            onPress={handleSubmit(logInMethod)}
            text={'Login'}
            disabled={!isValid}
          />
     </View>
      </SafeAreaView>
    </>
  )
}

export default Login