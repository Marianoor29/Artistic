import { View, Text, StatusBar, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import { Button, InputField } from '../../../components'
import { useDispatch } from 'react-redux'
import { setAppLoader } from '../../../redux/slice/config/configSlice'
import { setIsLoggedIn } from '../../../redux/slice/user/userSlice'
import AppColors from '../../../utils/AppColors'
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
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
  password: yup
  .string()
  .required("Password is required")
  .min(6, "Password should be atleast 6 characters long"),
});

const Login = ({navigation} : any) => {
  const dispatch = useDispatch();
  const [securePassword, setSecurePassword]= useState(true)
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "all",
    defaultValues: {
      email: "john@doe.com",
      password: "12345678",
    },
    resolver: yupResolver(userSchema),
  });
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

  return (
    <>
    <StatusBar barStyle="dark-content" backgroundColor={AppColors.white} />
    <SafeAreaView style={styles.SafeAreaView}>
      <View style={styles.container}>
      <Text style={styles.title}> Log in to your account</Text>
      <InputField
      placeholder='Enter a Name'
      control={control}
      name={"email"}
      keyboardType="email-address"
      icon={ <AntDesign name={'user'} size={30} color={AppColors.blue} />}
      error={errors?.email?.message}
      />
       <InputField
      placeholder='Enter a Password'
      control={control}
      name={"password"}
      icon={ <MaterialCommunityIcons name={'form-textbox-password'} size={30} color={AppColors.blue} />}
      error={errors?.password?.message}
      secureTextEntry={securePassword}
      rightSideIcon={securePassword ? 
        <MaterialCommunityIcons name={'eye-outline'} size={30} color={AppColors.blue} /> :
        <MaterialCommunityIcons name={'eye-off'} size={30} color={AppColors.blue} /> 
      }
      onPressRightIcon={() => setSecurePassword(!securePassword)}
      />
      <Button
            onPress={handleSubmit(navigation.navigate('home'))}
            text={'Login'}
            disabled={!isValid}
          />

<Text style={styles.signupText}> You don't have account</Text>
     </View>
      </SafeAreaView>
    </>
  )
}

export default Login