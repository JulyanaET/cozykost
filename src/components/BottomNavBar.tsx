import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

interface BottomNavBarProps {
  activeTab: string;
  onTabPress: (tabName: string) => void;
}

const BottomNavBar = ({ activeTab, onTabPress }: BottomNavBarProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.tabItem}
        onPress={() => onTabPress('Home')}>
        <FontAwesome6
          name="house"
          size={20}
          color={activeTab === 'Home' ? '#5CB85C' : '#999'}
          solid={activeTab === 'Home'}
        />
        <Text
          style={[
            styles.tabLabel,
            { color: activeTab === 'Home' ? '#5CB85C' : '#999' },
          ]}>
          Home
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tabItem}
        onPress={() => onTabPress('Saved')}>
        <FontAwesome6
          name="bookmark"
          size={20}
          color={activeTab === 'Saved' ? '#5CB85C' : '#999'}
          solid={activeTab === 'Saved'}
        />
        <Text
          style={[
            styles.tabLabel,
            { color: activeTab === 'Saved' ? '#5CB85C' : '#999' },
          ]}>
          Saved
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tabItem}
        onPress={() => onTabPress('MyKost')}>
        <FontAwesome6
          name="building"
          size={20}
          color={activeTab === 'MyKost' ? '#5CB85C' : '#999'}
          solid={activeTab === 'MyKost'}
        />
        <Text
          style={[
            styles.tabLabel,
            { color: activeTab === 'MyKost' ? '#5CB85C' : '#999' },
          ]}>
          MyKost
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tabItem}
        onPress={() => onTabPress('Profile')}>
        <FontAwesome6
          name="user"
          size={20}
          color={activeTab === 'Profile' ? '#5CB85C' : '#999'}
          solid={activeTab === 'Profile'}
        />
        <Text
          style={[
            styles.tabLabel,
            { color: activeTab === 'Profile' ? '#5CB85C' : '#999' },
          ]}>
          Profile
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingBottom: 8,
  },
  tabItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabLabel: {
    fontSize: 12,
    marginTop: 4,
  },
});

export default BottomNavBar;
