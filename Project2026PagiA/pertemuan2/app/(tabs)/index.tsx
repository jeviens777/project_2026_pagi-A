import { View, Text, Image, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      
      <Image
        source={require('../../assets/images/roblox .png')}
        style={styles.profilePic}
      />

      <Text style={styles.name}>Indri Amalia</Text>
      <Text style={styles.nim}>NIM: 243303621204</Text>
      <Text style={styles.jurusan}>Jurusan: Sistem Informasi</Text>

      <View style={styles.bioCard}>
        <Text style={styles.bioText}>
          Terus belajar dan jangan takut mencoba, karena setiap usaha adalah langkah menuju kesuksesan
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5e9ff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  profilePic: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 3,
    borderColor: '#a855f7',
    marginBottom: 15,
  },

  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4c1d95',
  },

  nim: {
    fontSize: 16,
    color: '#6b21a8',
    marginBottom: 5,
  },

  jurusan: {
    fontSize: 16,
    color: '#6b21a8',
    marginBottom: 20,
  },

  bioCard: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 20,
    width: '100%',
  },

  bioText: {
    textAlign: 'center',
    fontStyle: 'italic',
    color: '#444',
  },
});