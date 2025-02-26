import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation/Navigator";

type LoginScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, "Login">;
};

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    if (email.trim() === "" || password.trim() === "") {
      Alert.alert("Error", "Please enter email and password.");
      return;
    }
    navigation.replace("Home");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MAS RideShare</Text>
      <Text style={styles.subtitle}>Login to Continue</Text>

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Email Address"
        placeholderTextColor="#A0A0A0"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#A0A0A0"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {/* Sign In Button */}
      <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
        <Text style={styles.signInText}>Sign In</Text>
      </TouchableOpacity>

      {/* Google Sign In */}
      <TouchableOpacity style={styles.googleButton}>
        <Text style={styles.googleText}>Sign in with Google</Text>
      </TouchableOpacity>

      {/* Links */}
      <Text style={styles.bottomText}>
        Don't have an account?{" "}
        <Text style={styles.linkText} onPress={() => navigation.navigate("SignUp")}>
          Register
        </Text>
      </Text>
      <Text style={styles.bottomText}>
        Forgot Password?{" "}
        <Text
          style={styles.linkText}
          onPress={() => Alert.alert("Reset Password", "Password reset flow not implemented yet.")}
        >
          Reset
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: "gray",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    padding: 12,
    borderWidth: 1,
    borderColor: "#A0A0A0",
    borderRadius: 8,
    marginBottom: 15,
    fontSize: 16,
  },
  signInButton: {
    backgroundColor: "#4CAF50",
    padding: 12,
    width: "100%",
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 15,
  },
  signInText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  googleButton: {
    width: "100%",
    padding: 12,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 20,
  },
  googleText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  bottomText: {
    fontSize: 14,
    color: "gray",
    marginTop: 10,
  },
  linkText: {
    color: "#4CAF50",
    fontWeight: "bold",
  },
});

export default LoginScreen;
