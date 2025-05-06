import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Modal,
  FlatList,
} from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const EditProfile = () => {
  const [gender, setGender] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [city, setCity] = useState('');
  const [status, setStatus] = useState('');
  const [education, setEducation] = useState('');
  const [emergencyPhone, setEmergencyPhone] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [currentPicker, setCurrentPicker] = useState('');
  const [options, setOptions] = useState<string[]>([]);
  const navigation = useNavigation(); // Gunakan navigation untuk kembali ke layar sebelumnya

  const openPicker = (pickerType: string, pickerOptions: string[]) => {
    setCurrentPicker(pickerType);
    setOptions(pickerOptions);
    setModalVisible(true);
  };

  const handleSelect = (value: string) => {
    if (currentPicker === 'gender') {
      setGender(value);
    } else if (currentPicker === 'city') {
      setCity(value);
    } else if (currentPicker === 'status') {
      setStatus(value);
    } else if (currentPicker === 'education') {
      setEducation(value);
    }
    setModalVisible(false);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}> {/* Tombol Back */}
          {/* <Icon name="arrow-left" size={24} color="#fff" /> */}
        </TouchableOpacity>
        <Text style={styles.headerText}>Edit Profile</Text>
        <View style={{ width: 24 }} /> {/* Placeholder for alignment */}
      </View>

      {/* Profile Picture */}
      <View style={styles.profilePictureContainer}>
        <View style={styles.profilePicture} />
        <Text style={styles.uploadText}>Upload Foto Profil</Text>
      </View>

      {/* Form */}
      <View style={styles.form}>
        <Text style={styles.label}>
          Nama Lengkap<Text style={styles.required}>*</Text>
        </Text>
        <TextInput style={styles.input} placeholder="Masukkan nama lengkap" />

        <Text style={styles.label}>
          Jenis Kelamin<Text style={styles.required}>*</Text>
        </Text>
        <TouchableOpacity
          style={styles.dropdown}
          onPress={() => openPicker('gender', ['Laki-laki', 'Perempuan'])}>
          <Text style={styles.dropdownText}>
            {gender || 'Pilih jenis kelamin'}
          </Text>
        </TouchableOpacity>

        <Text style={styles.label}>
          Tanggal Lahir<Text style={styles.required}>*</Text>
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Masukkan tanggal lahir"
          value={birthDate}
          onChangeText={setBirthDate}
        />

        <Text style={styles.label}>Kota Asal</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukkan kota asal"
          value={city}
          onChangeText={setCity}
        />

        <Text style={styles.label}>Status</Text>
        <TouchableOpacity
          style={styles.dropdown}
          onPress={() => openPicker('status', ['Pelajar', 'Pekerja'])}>
          <Text style={styles.dropdownText}>{status || 'Pilih status'}</Text>
        </TouchableOpacity>

        <Text style={styles.label}>Pendidikan Terakhir</Text>
        <TouchableOpacity
          style={styles.dropdown}
          onPress={() =>
            openPicker('education', ['SMA', 'Diploma', 'Sarjana'])
          }>
          <Text style={styles.dropdownText}>
            {education || 'Pilih pendidikan terakhir'}
          </Text>
        </TouchableOpacity>

        <Text style={styles.label}>No. Handphone Darurat</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukkan nomor handphone darurat"
          value={emergencyPhone}
          onChangeText={setEmergencyPhone}
        />
      </View>

      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Simpan</Text>
      </TouchableOpacity>

      {/* Modal for Dropdown */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <FlatList
              data={options}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.modalItem}
                  onPress={() => handleSelect(item)}>
                  <Text style={styles.modalItemText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#3F51B5',
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  profilePictureContainer: {
    alignItems: 'center',
    marginVertical: 16,
  },
  profilePicture: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#E0E0E0',
  },
  uploadText: {
    marginTop: 8,
    color: '#757575',
  },
  form: {
    paddingHorizontal: 16,
  },
  label: {
    fontSize: 14,
    color: '#212121',
    marginBottom: 4,
  },
  required: {
    color: 'red',
  },
  input: {
    borderWidth: 1,
    borderColor: '#BDBDBD',
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: '#BDBDBD',
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
    justifyContent: 'center',
  },
  dropdownText: {
    color: '#757575',
  },
  saveButton: {
    backgroundColor: '#4CAF50',
    padding: 16,
    alignItems: 'center',
    margin: 16,
    borderRadius: 4,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    marginHorizontal: 32,
    borderRadius: 8,
    padding: 16,
  },
  modalItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  modalItemText: {
    fontSize: 16,
    color: '#212121',
  },
});

export default EditProfile;