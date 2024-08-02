import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Clipboard, TouchableOpacity } from 'react-native';

interface FrameInputProps {
  isInput: boolean;
  label: string;
  placeholder?: string;
  value: string;
  onChangeText?: (text: string) => void;
}

const FrameInput: React.FC<FrameInputProps> = ({ isInput, label, placeholder, value, onChangeText }) => {
  const copyToClipboard = () => {
    Clipboard.setString(value);
    // You might want to provide feedback to the user, such as a toast or alert.
  };

  return (
    <View style={styles.frameContainer}>
      <Text style={styles.label}>{label}</Text>
      {isInput ? (
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
        />
      ) : (
        <View style={styles.textWithCopyContainer}>
          <Text style={styles.fixedText}>{value}</Text>
          <TouchableOpacity onPress={copyToClipboard} style={styles.copyButton}>
            <Text style={styles.copyButtonText}>Copy</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  frameContainer: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    width: '80%',
    alignSelf: 'center',
    backgroundColor: '#f9f9f9', // Add background color for the frame
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  textWithCopyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  fixedText: {
    fontSize: 16,
    flex: 1,
  },
  copyButton: {
    marginLeft: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#007BFF', // Change this color as needed
    borderRadius: 5,
  },
  copyButtonText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default FrameInput;
