import React, { ReactNode } from 'react';
import { StyleSheet, Text, View, Linking, TextStyle, ViewStyle } from 'react-native';
import { useTheme } from '../../themes/ThemeContext';
import { themes } from '../../themes/themes';
import { useRTL } from '../../i18n/RTLContext';

interface CardProps {
  dominantTitle?: string;
  title?: string;
  content?: string;
  links?: { text: string; url: string }[];
  children?: ReactNode;
  dominantTitleStyles?: TextStyle;
  titleStyles?: TextStyle;
  contentStyles?: TextStyle;
}

const Card: React.FC<CardProps> = ({ dominantTitle, title, content, links, children, dominantTitleStyles, titleStyles, contentStyles }) => {
  const { theme } = useTheme();
  const colors = themes[theme];
  const {isRTL} = useRTL();
  const renderContent = () => {
    if (!content) return null;

    if (!links || links.length === 0) {
      return <Text style={[styles(colors, isRTL).content, contentStyles]}>{content}</Text>;
    }

    const splitContent = content.split(/(\[link\d+\])/g);

    return (
      <Text style={styles(colors, isRTL).content}>
        {splitContent.map((part, index) => {
          const match = part.match(/\[link(\d+)\]/);
          if (match) {
            const linkIndex = parseInt(match[1], 10) - 1;
            const link = links[linkIndex];
            if (link) {
              return (
                <Text
                  key={index}
                  style={styles(colors, isRTL).link}
                  onPress={() => Linking.openURL(link.url)}
                >
                  {link.text}
                </Text>
              );
            }
          }
          return part;
        })}
      </Text>
    );
  };

  return (
    <View style={styles(colors, isRTL).card}>
      {dominantTitle && <Text style={[styles(colors, isRTL).dominantTitle, dominantTitleStyles]}>{dominantTitle}</Text>}
      {title && <Text style={[styles(colors, isRTL).title, titleStyles]}>{title}</Text>}
      {renderContent()}
      {children && <View style={styles(colors, isRTL).childrenContainer}>{children}</View>}
    </View>
  );
};


const styles = (colors: any, isRTL: boolean) =>
  StyleSheet.create({
  card: {
    paddingLeft: 16,
    paddingRight: 16,
    marginVertical: 10,
  } as ViewStyle,
  dominantTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 8,
    textAlign: isRTL ? 'right': 'left',
  } as TextStyle,
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: colors.text,
    textAlign: isRTL ? 'right': 'left',
  } as TextStyle,
  content: {
    fontSize: 14,
    color: colors.text,
    lineHeight: 20,
    textAlign: isRTL ? 'right': 'left',
  } as TextStyle,
  link: {
    color: colors.mainLightPurple,
    textDecorationLine: 'underline',
  } as TextStyle,
  childrenContainer: {
    marginTop: -10,
    marginLeft: -16,
    marginRight: -16,
  } as ViewStyle,
});

export default Card;

