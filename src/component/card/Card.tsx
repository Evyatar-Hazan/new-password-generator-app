import React, { ReactNode } from 'react';
import { StyleSheet, Text, View, Linking, TextStyle, ViewStyle } from 'react-native';

interface CardProps {
  dominantTitle?: string;
  title?: string;
  content?: string;
  links?: { text: string; url: string }[];
  children?: ReactNode;
}

const Card: React.FC<CardProps> = ({ dominantTitle, title, content, links, children }) => {
  const renderContent = () => {
    if (!content) return null;

    if (!links || links.length === 0) {
      return <Text style={styles.content}>{content}</Text>;
    }

    const splitContent = content.split(/(\[link\d+\])/g);

    return (
      <Text style={styles.content}>
        {splitContent.map((part, index) => {
          const match = part.match(/\[link(\d+)\]/);
          if (match) {
            const linkIndex = parseInt(match[1], 10) - 1;
            const link = links[linkIndex];
            if (link) {
              return (
                <Text
                  key={index}
                  style={styles.link}
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
    <View style={styles.card}>
      {dominantTitle && <Text style={styles.dominantTitle}>{dominantTitle}</Text>}
      {title && <Text style={styles.title}>{title}</Text>}
      {renderContent()}
      {children && <View style={styles.childrenContainer}>{children}</View>}
    </View>
  );
};


const styles = StyleSheet.create({
  card: {
    paddingLeft: 16,
    paddingRight: 16,
    marginVertical: 10,
  } as ViewStyle,
  dominantTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  } as TextStyle,
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  } as TextStyle,
  content: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
    textAlign: "justify",
  } as TextStyle,
  link: {
    color: '#B88AE8',
    textDecorationLine: 'underline',
  } as TextStyle,
  childrenContainer: {
    marginTop: -10,
    marginLeft: -16,
    marginRight: -16,
  } as ViewStyle,
});

export default Card;

