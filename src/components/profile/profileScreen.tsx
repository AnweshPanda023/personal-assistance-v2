import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ProfileScreen() {
  const insets = useSafeAreaInsets();

  const MenuButton = ({ title }: { title: string }) => (
    <TouchableOpacity style={styles.menuButton}>
      <Text style={styles.menuText}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      {/* Header */}
      <Text style={styles.headerText}>👤 Profile</Text>

      {/* Profile Section */}
      <View style={styles.profileSection}>
        <View style={styles.profileImage} />
        <Text style={styles.userName}>User X</Text>
        <Text style={styles.userEmail}>MY BIo</Text>
      </View>

      {/* Menu Buttons */}
      <View style={styles.menuContainer}>
        <MenuButton title="⚙️ Settings" />
        <MenuButton title="✏️ Edit Profile" />
        <MenuButton title="📘 Learn More" />
        <MenuButton title="📞 Contact Us" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  profileSection: {
    alignItems: "center",
    marginBottom: 30,
  },
  profileImage: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: "#ccc",
    marginBottom: 10,
  },
  userName: {
    fontSize: 18,
    fontWeight: "600",
  },
  userEmail: {
    fontSize: 14,
    color: "gray",
  },
  menuContainer: {
    gap: 15,
  },
  menuButton: {
    backgroundColor: "#f2f2f2",
    padding: 16,
    borderRadius: 12,
  },
  menuText: {
    fontSize: 16,
  },
});
