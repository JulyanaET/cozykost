import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
} from 'react-native';
import BottomNavBar from '../components/BottomNavBar';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  MyKost: undefined;
  Favorite: undefined;
  Profile: undefined;
  Setting: undefined;
  EditProfile: undefined; 
  Viewed: undefined; // Tambahkan layar Viewed
};

const Viewed = () => {
  const [activeTab, setActiveTab] = useState('Favorite');
  const [activeSubTab, setActiveSubTab] = useState<'favorited' | 'viewed'>('viewed');
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleTabPress = (tabName: string) => {
    setActiveTab(tabName);
    navigation.navigate(tabName as keyof RootStackParamList);
  };

  const handleSubTabPress = (tab: 'favorited' | 'viewed') => {
    setActiveSubTab(tab);
    if (tab === 'favorited') {
      navigation.navigate('Favorite'); // ✅ Navigasi balik ke Favorite
    }
  };

  const FONTS = {
    REGULAR: 'Geist-Regular',
    MEDIUM: 'Geist-Medium',
    BOLD: 'Geist-Bold',
    SEMIBOLD: 'Geist-SemiBold',
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.content}>
        {/* Header */}
        <Text style={[styles.header, { fontFamily: FONTS.BOLD }]}>Favorit</Text>

        {/* Subtabs */}
        <View style={styles.tabContainer}>
          <TouchableOpacity onPress={() => handleSubTabPress('favorited')} style={styles.tabButton}>
            <Text
              style={[
                styles.tabText,
                activeSubTab === 'favorited' && styles.activeTabText,
                { fontFamily: FONTS.MEDIUM },
              ]}
            >
              Difavoritkan
            </Text>
            {activeSubTab === 'favorited' && <View style={styles.activeLine} />}
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleSubTabPress('Viewed')} style={styles.tabButton}>
            <Text
              style={[
                styles.tabText,
                activeSubTab === 'Viewed' && styles.activeTabText,
                { fontFamily: FONTS.MEDIUM },
              ]}
            >
              Pernah Dilihat
            </Text>
            {activeSubTab === 'Viewed' && <View style={styles.activeLine} />}
          </TouchableOpacity>
        </View>

        {/* Empty State */}
        <View style={styles.emptyContainer}>
          <Image
            source={require('../../assets/empty-history.png')}
            style={styles.image}
            resizeMode="contain"
          />
          <Text style={[styles.emptyTitle, { fontFamily: FONTS.SEMIBOLD }]}>
            Belum ada riwayat properti terbaru
          </Text>
          <Text style={[styles.emptyDesc, { fontFamily: FONTS.REGULAR }]}>
            Riwayat properti yang pernah Anda lihat akan ditampilkan di sini
          </Text>

          <TouchableOpacity style={styles.searchButton}>
            <Text style={[styles.searchButtonText, { fontFamily: FONTS.MEDIUM }]}>
              Cari Kost
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <BottomNavBar activeTab={activeTab} onTabPress={handleTabPress} />
    </View>
  );
};

export default Viewed;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    padding: 24,
  },
  header: {
    fontSize: 24,
    marginBottom: 24,
  },
  tabContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#E0E0E0',
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: 8,
  },
  tabText: {
    fontSize: 14,
    color: '#999',
  },
  activeTabText: {
    color: '#4CAF50',
  },
  activeLine: {
    height: 2,
    backgroundColor: '#4CAF50',
    marginTop: 4,
    width: '100%',
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  image: {
    width: 160,
    height: 160,
    marginBottom: 24,
  },
  emptyTitle: {
    fontSize: 16,
    marginBottom: 8,
    textAlign: 'center',
  },
  emptyDesc: {
    fontSize: 14,
    color: '#555555',
    textAlign: 'center',
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  searchButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
  searchButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});
