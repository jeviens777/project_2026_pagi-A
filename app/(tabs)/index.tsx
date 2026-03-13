import { Image, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/profile.jpg")}
        style={styles.profile}
      />

      <Text style={styles.name}>ᴊᴇᴠɪᴇɴs ᴘᴀʀᴀᴅɪsᴀ ғɪɴɪᴇ ᴀᴅᴇɴᴀ</Text>
      <Text style={styles.info}>NIM: 243303621213</Text>
      <Text style={styles.info}>Jurusan: sɪsᴛᴇᴍ ɪɴғᴏʀᴍᴀsɪ</Text>

      <View style={styles.quoteBox}>
        <Text style={styles.quote}>
          {`"you did your best, and your best does not have to be perfect."`}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f79eeb",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  profile: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 4,
    borderColor: "#ac2a78",
    marginBottom: 20,
  },

  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#b75aa1",
  },

  info: {
    fontSize: 16,
    color: "#b75aa1",
    marginTop: 5,
  },

  quoteBox: {
    marginTop: 30,
    backgroundColor: "#F2F2F2",
    padding: 20,
    borderRadius: 20,
  },

  quote: {
    fontSize: 14,
    textAlign: "center",
    color: "#ed7daa",
    fontStyle: "italic",
  },
});
