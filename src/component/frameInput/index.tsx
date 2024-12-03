import React from 'react';
import Clipboard from '@react-native-clipboard/clipboard';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../../themes/ThemeContext';
import { themes } from '../../themes/themes';
import { useRTL } from '../../i18n/RTLContext';

interface FrameInputProps {
  isInput: boolean;
  label: string;
  placeholder?: string;
  value: string;
  onChangeText?: (text: string) => void;
  strengthType?: 'veryWeak' | 'weak' | 'medium' | 'strong' | 'veryStrong';
}

const FrameInput: React.FC<FrameInputProps> = ({ isInput, label, placeholder, value, onChangeText, strengthType }) => {
  const { theme } = useTheme();
  const colors = themes[theme];
  const {isRTL} = useRTL();
  const handleCopy = () => {
    Clipboard.setString(value);
  };

  const getProgressStyle = () => {
    let width = 0; 
    let color = 'transparent';
  
    switch (strengthType) {
      case 'veryWeak':
        width = 20;
        color = colors.veryWeak;
        break;
      case 'weak':
        width = 40;
        color = colors.weak;
        break;
      case 'medium':
        width = 60;
        color = colors.medium;
        break;
      case 'strong':
        width = 80;
        color = colors.strong;
        break;
      case 'veryStrong':
        width = 100;
        color = colors.veryStrong;
        break;
    }
  
    return { width: `${width}%`, backgroundColor: color }; 
  };
  

  const progressBarStyle = getProgressStyle();

  return (
    <View style={styles(colors, isRTL).container}>
      <Text style={styles(colors, isRTL).label}>{label}</Text>
      {isInput ? (
        <TextInput
          style={styles(colors, isRTL).input}
          placeholder={placeholder}
          placeholderTextColor={colors.text}
          value={value}
          onChangeText={onChangeText}
        />
      ) : (
        <>
          <View style={styles(colors, isRTL).textWithCopyContainer}>
            <Text style={styles(colors, isRTL).fixedText}>{value}</Text>
            <TouchableOpacity style={styles(colors, isRTL).copyButton} onPress={handleCopy}>
              <Text style={styles(colors, isRTL).copyButtonText}>Copy</Text>
            </TouchableOpacity>
          </View>
          <View style={styles(colors, isRTL).progressBarContainer}>
            <View style={[styles(colors, isRTL).progressBar, progressBarStyle]} />
          </View>
        </>
      )}
    </View>
  );
};

const styles = (colors: any, isRTL: boolean) =>
  StyleSheet.create({
  container: {
    marginBottom: 20,
    width: '90%',
    alignSelf: 'center',
    color: colors.text,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold',
    textAlign: isRTL ? 'right': 'left',
    color: colors.text,
  },
  input: {
    borderColor: colors.mainLightPurple,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'transparent',
    color: colors.text,
    textAlign: isRTL ? 'right': 'left',

  },
  textWithCopyContainer: {
    flexDirection: isRTL ? 'row-reverse' : 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: colors.mainLightPurple,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    color: colors.text,
  },
  fixedText: {
    fontSize: 16,
    flex: 1,
    color: colors.text,
    textAlign: isRTL ? 'right' : 'left',
  },
  copyButton: {
    marginLeft: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
    color: colors.text,
  },
  copyButtonText: {
    color: colors.text,
    fontSize: 14,
  },
  progressBarContainer: {
    height: 6,
    width: '100%',
    backgroundColor: colors.background,
    borderRadius: 5,
    marginTop: 5,
  },
  progressBar: {
    height: '100%',
    borderRadius: 5,
    alignSelf: isRTL ? 'flex-end' : 'flex-start',
  },  
});

export default FrameInput;
