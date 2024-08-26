import React from 'react';
import { View, Text, TextInput, Clipboard, TouchableOpacity, StyleSheet } from 'react-native';

interface FrameInputProps {
  isInput: boolean;
  label: string;
  placeholder?: string;
  value: string;
  onChangeText?: (text: string) => void;
}

const FrameInput: React.FC<FrameInputProps> = ({ isInput, label, placeholder, value, onChangeText }) => {

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      {isInput ? (
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
        />
      ) : (
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={value}
          editable={false}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    width: '90%',
    alignSelf: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    borderRadius: 10, // Rounded corners
    backgroundColor: 'transparent',
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
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  copyButtonText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default FrameInput;
