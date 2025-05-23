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

const FONTS = {
  REGULAR: 'Geist-Regular',
  MEDIUM: 'Geist-Medium',
  BOLD: 'Geist-Bold',
  SEMIBOLD: 'Geist-SemiBold',
};

const SignUpScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    navigation.navigate('SuccessSignUp');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome6 name="chevron-left" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Daftar</Text>

      <Input
        label="Nama Lengkap"
        value={name}
        onChangeText={setName}
        placeholder="Masukkan nama lengkap"
      />

      <Input
        label="Nomor Handphone"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
        placeholder="Masukkan nomor handphone"
      />

      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        placeholder="Masukkan email"
      />

      <Input
        label="Password"
        value={password}
        onChangeText={setPassword}
        placeholder="Masukkan password"
        isPassword={true}
      />

      <Button title="Daftar" onPress={handleSignUp} />

      <View style={styles.footer}>
        <Text style={styles.footerText}>Sudah punya akun CozyKost? </Text>
        <TextLink
          text="Login Sekarang"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
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
    fontFamily: FONTS.BOLD,
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
    fontFamily: FONTS.REGULAR,
    color: '#000000',
  },
});

export default SignUpScreen;
