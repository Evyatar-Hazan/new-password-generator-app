import React from 'react';
import { View, Text, TextInput, Clipboard, TouchableOpacity, StyleSheet } from 'react-native';

interface FrameInputProps {
  isInput: boolean;
  label: string;
  placeholder?: string;
  value: string;
  onChangeText?: (text: string) => void;
  strengthType?: 'veryWeak' | 'weak' | 'medium' | 'strong' | 'veryStrong';
}

const FrameInput: React.FC<FrameInputProps> = ({ isInput, label, placeholder, value, onChangeText, strengthType }) => {
  const handleCopy = () => {
    Clipboard.setString(value);
  };

  const getProgressStyle = () => {
    let width = '0%';
    let color = 'transparent';

    switch (strengthType) {
      case 'veryWeak':
        width = '20%';
        color = 'red';
        break;
      case 'weak':
        width = '40%';
        color = 'red';
        break;
      case 'medium':
        width = '60%';
        color = 'orange';
        break;
      case 'strong':
        width = '80%';
        color = 'orange';
        break;
      case 'veryStrong':
        width = '100%';
        color = 'green';
        break;
    }

    return { width, backgroundColor: color };
  };

  const progressBarStyle = getProgressStyle();

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
        <>
          <View style={styles.textWithCopyContainer}>
            <Text style={styles.fixedText}>{value}</Text>
            <TouchableOpacity style={styles.copyButton} onPress={handleCopy}>
              <Text style={styles.copyButtonText}>Copy</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.progressBarContainer}>
            <View style={[styles.progressBar, progressBarStyle]} />
          </View>
        </>
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
    borderRadius: 10,
    backgroundColor: 'transparent',
  },
  textWithCopyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
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
  progressBarContainer: {
    height: 6,
    width: '100%',
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    marginTop: 5,
  },
  progressBar: {
    height: '100%',
    borderRadius: 5,
  },
});

export default FrameInput;
