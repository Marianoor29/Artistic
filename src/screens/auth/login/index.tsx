import { View, Text, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import { BottomIcons, Button, InputField, ScreenWrapper } from '../../../components'
import AppColors from '../../../utils/AppColors'
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import LottieView from 'lottie-react-native';
import { facebook, google, linkedin } from '../../../assets/images'
import ScreenNames from '../../../navigation/routes'

type FormValues = {
  email: string,
  password: any,
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

const Login = ({ navigation }: any) => {
  const [securePassword, setSecurePassword] = useState(true)
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    mode: "all",
    defaultValues: {
      email: "john@doe.com",
      password: "12345678",
    },
    resolver: yupResolver(userSchema),
  });

  return (
    <ScreenWrapper
      scrollEnabled
      statusBarColor={AppColors.white}
      barStyle='dark-content'>
        <View style={styles.container}>
          <LottieView source={require('../../../assets/gif/login.json')} style={styles.animatedImageStyle} autoPlay loop />
          <Text style={styles.title}> Log in to your account</Text>
          <InputField
            placeholder='Enter a Name'
            control={control}
            name={"email"}
            keyboardType="email-address"
            icon={<AntDesign name={'user'} size={30} color={AppColors.blue} />}
            error={errors?.email?.message}
          />
          <InputField
            placeholder='Enter a Password'
            control={control}
            name={"password"}
            icon={<MaterialCommunityIcons name={'form-textbox-password'} size={30} color={AppColors.blue} />}
            error={errors?.password?.message}
            secureTextEntry={securePassword}
            rightSideIcon={securePassword ?
              <MaterialCommunityIcons name={'eye-outline'} size={30} color={AppColors.blue} /> :
              <MaterialCommunityIcons name={'eye-off'} size={30} color={AppColors.blue} />
            }
            onPressRightIcon={() => setSecurePassword(!securePassword)}
          />
          <Button
            onPress={handleSubmit(navigation.navigate(ScreenNames.HOME))}
            text={'Login'}
            disabled={!isValid}
          />

          <Text style={styles.signupText}> Don't have an account</Text>
          <BottomIcons
            icon1={facebook}
            icon2={google}
            icon3={linkedin}
          />
        </View>
    </ScreenWrapper>
  )
}

export default Login