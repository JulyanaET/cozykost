import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import BottomNavBar from '../components/BottomNavBar';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  MyKost: undefined;
  Favorite: undefined;
  // tambahkan jika ada tab lain seperti Chat, Profile, dll
};

const Favorite = () => {
  const [activeTab, setActiveTab] = useState('Favorite');
  const [activeSubTab, setActiveSubTab] = useState<'favorited' | 'viewed'>('favorited');
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleTabPress = (tabName: string) => {
    setActiveTab(tabName);
    navigation.navigate(tabName as keyof RootStackParamList);
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

        {/* Subtab */}
        <View style={styles.tabContainer}>
          <TouchableOpacity onPress={() => setActiveSubTab('favorited')} style={styles.tabButton}>
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

          <TouchableOpacity onPress={() => setActiveSubTab('viewed')} style={styles.tabButton}>
            <Text
              style={[
                styles.tabText,
                activeSubTab === 'viewed' && styles.activeTabText,
                { fontFamily: FONTS.MEDIUM },
              ]}
            >
              Pernah Dilihat
            </Text>
            {activeSubTab === 'viewed' && <View style={styles.activeLine} />}
          </TouchableOpacity>
        </View>

        {/* Konten list favorit bisa ditambahkan di sini */}
        <View style={{ flex: 1 }}>
          {/* Placeholder */}
        </View>
      </SafeAreaView>

      {/* Bottom Navigation */}
      <BottomNavBar activeTab={activeTab} onTabPress={handleTabPress} />
    </View>
  );
};

export default Favorite;

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
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#E0E0E0',
    marginBottom: 16,
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
    marginTop: 4,
    height: 2,
    backgroundColor: '#4CAF50',
    width: '100%',
  },
});
