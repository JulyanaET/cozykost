import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Input from '../components/Input';
import Button from '../components/Button';
import TextLink from '../components/TextLink';

const LoginScreen = ({navigation}) => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome6 name="chevron-left" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Login Pencari Kost</Text>

      <Input
        label="Nomor Handphone"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
        placeholder="Masukkan nomor handphone"
      />

      <Input
        label="Password"
        value={password}
        onChangeText={setPassword}
        placeholder="Masukkan password"
        isPassword={true}
      />

      <Button title="Login" onPress={() => {}} />

      <View style={styles.footer}>
        <Text style={styles.footerText}>Belum punya akun CozyKost? </Text>
        <TextLink
          text="Daftar Sekarang"
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>

      <TextLink
        text="Lupa Password?"
        style={styles.forgotPassword}
        onPress={() => {}}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  header: {
    marginTop: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#000000',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  footerText: {
    fontSize: 14,
    color: '#000000',
  },
  forgotPassword: {
    alignItems: 'center',
    marginTop: 16,
    alignSelf: 'center',
  },
});

export default LoginScreen;
