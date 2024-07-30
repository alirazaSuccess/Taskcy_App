/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ActivityIndicator, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import Google from '../assets/Google.jpg';
import Apple from '../assets/Apple.jpg';
const Signin = (props) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    if (email && password) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        props.navigation.navigate('Main');
      }, 2000);
    } else {
      Alert.alert('Error', 'Please fill in all fields.');
    }
  };
  return (
    <View
      style={styles.container}>
      <View>
        <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:20,marginRight:80}}>
          <Text onPress={() => props.navigation.navigate('GetStarted')}>
          <Icon style={{fontSize: 40, color: 'black'}} name="arrow-left" />
          </Text>
          <Text style={styles.heading01}>
            Sign In
          </Text>
        </View>
        <Text style={styles.heading02}>
          Welcome Back
        </Text>
        <Text style={styles.heading03}>
          Please Inter your email address and password for login
        </Text>
      </View>
      <View style={styles.form}>
        <TextInput
          placeholder="  Enter  your Email"
          placeholderTextColor={'black'}
          style={styles.Input}
          value={email}
          onChangeText={setEmail} />
        <TextInput
          placeholder="  Enter your Password"
          placeholderTextColor={'black'}
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
          style={styles.Input} />
          <Text style={{color:'black',fontSize:20,marginVertical:10,fontWeight:'400'}}>Forgot Password?</Text>
        <View style={{ width: '100%', alignItems: 'center' }}>
          <TouchableOpacity onPress={handleSubmit} style={styles.button}>
          {loading ? (
              <ActivityIndicator color="white" size={35} />
            ) : (
              <Text style={{
                textAlign: 'center',
                fontSize: 25,
                fontWeight: 'bold',
                color: 'white',
              }}>
                Sign in
              </Text>
            )}
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.heading04}>Signin With</Text>
          <View style={styles.icons}>
            <Image source={Apple} />
            <Image source={Google} />
          </View>
          <Text style={styles.heading04}>Not Register Yet? <Text onPress={() => props.navigation.navigate('SignUp')} style={styles.signUp}>
            Signup
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
    color: 'black',
  },
  heading01: {
    textAlign: 'center',
    color: 'black',
    fontSize: 30,
    fontWeight: '400',
    marginBottom: 20,

  },
  heading02: {
    marginLeft: 30,
    textAlign: 'left',
    color: 'black',
    fontSize: 30,
    fontWeight: '500',
    margin: 9,

  },
  heading03: {
    marginLeft: 30,
    textAlign: 'left',
    color: 'silver',
    fontSize: 18,
    fontWeight: '400',
    margin: 9,

  },
  heading04: {
    marginLeft: 30,
    textAlign: 'center',
    color: 'silver',
    fontSize: 22,
    fontWeight: '400',
    margin: 9,

  },
  form: {
    height: 120,
    marginTop: 30,
    alignItems: 'center',
  },
  Text: {
    color: 'black',
    fontSize: 40,
    fontWeight: '800',
    textAlign: 'center',
  },
  Input: {
    marginTop: 20,
    fontSize: 20,
    width: '90%',
    height: 70,
    color: 'black',
    borderWidth: 2,
    borderRadius: 20,
    borderColor: 'black',
  },
  button: {
    backgroundColor: '#756EF3',
    padding: 15,
    width: '90%',
    marginTop: 10,
    borderRadius: 20,
  },

  icons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  signUp: {
    color: '#756EF3',
    fontfamily: 'Poppins',
    fontsize: '14px',
    fontweight: 600,
    lineheight: '14px',
    textalign: 'right',

  },
});
export default Signin;
