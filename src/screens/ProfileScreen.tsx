import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BottomNavBar from '../components/BottomNavBar';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  MyKost: undefined;
  Favorite: undefined;
  Profile: undefined;
  Setting: undefined;
  EditProfile: undefined; // Tambahkan layar Edit Profile
};

const Profile = () => {
  const [activeTab, setActiveTab] = useState('Profile');
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleTabPress = (tabName: string) => {
    setActiveTab(tabName);
    navigation.navigate(tabName as keyof RootStackParamList); // Navigasi ke layar berdasarkan tabName
  };

  const handleSettingPress = () => {
    navigation.navigate('Setting'); // Navigasi ke layar Setting
  };

  const handleEditProfilePress = () => {
    navigation.navigate('EditProfile'); // Navigasi ke layar Edit Profile
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <View style={styles.profilePictureLarge} />
          <Text style={styles.userNameLarge}>User</Text>
          <Text style={styles.userPhoneLarge}>08123456789</Text>
          <TouchableOpacity onPress={handleEditProfilePress}>
            <Text style={styles.editProfileText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Menu List */}
      <ScrollView style={styles.menuList}>
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="file-document-outline" size={24} color="#212121" />
          <Text style={styles.menuText}>Riwayat Pengajuan Sewa</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Icon name="home-outline" size={24} color="#212121" />
          <Text style={styles.menuText}>Riwayat kos terdahulu</Text>
          <View style={styles.newBadge}>
            <Text style={styles.badgeText}>Baru</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Icon name="receipt-outline" size={24} color="#212121" />
          <Text style={styles.menuText}>Riwayat transaksi</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Icon name="star-outline" size={24} color="#212121" />
          <Text style={styles.menuText}>CozyKost Poin</Text>
          <View style={styles.newBadge}>
            <Text style={styles.badgeText}>Baru</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Icon name="ticket-outline" size={24} color="#212121" />
          <Text style={styles.menuText}>Voucher saya</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Icon name="briefcase-outline" size={24} color="#212121" />
          <Text style={styles.menuText}>Barang & jasa</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Icon name="account-check-outline" size={24} color="#212121" />
          <Text style={styles.menuText}>Verifikasi akun</Text>
          <Text style={styles.notVerifiedText}>Not Verified</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={handleSettingPress}>
          <Icon name="cog-outline" size={24} color="#212121" />
          <Text style={styles.menuText}>Pengaturan</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Bottom Navigation */}
      <BottomNavBar activeTab={activeTab} onTabPress={handleTabPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#3F51B5',
    paddingBottom: 32,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    alignItems: 'center',
  },
  headerContent: {
    alignItems: 'center',
    marginTop: 16,
  },
  profilePictureLarge: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#E0E0E0',
    marginBottom: 8,
    marginTop: 40,
  },
  userNameLarge: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  userPhoneLarge: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 8,
  },
  editProfileText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  menuList: {
    flex: 1,
    paddingHorizontal: 16,
    marginTop: 16,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  menuText: {
    fontSize: 16,
    color: '#212121',
    marginLeft: 16,
    flex: 1,
  },
  newBadge: {
    backgroundColor: '#FF9800',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  notVerifiedText: {
    color: '#757575',
    fontSize: 12,
  },
});

export default Profile;