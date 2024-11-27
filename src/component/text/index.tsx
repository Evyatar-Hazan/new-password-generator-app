import React from "react";
import { StyleSheet, Text, TextStyle, View, ViewStyle, StyleProp } from "react-native";

// SubText Component
const SubText = React.memo<{ text: string; style?: StyleProp<TextStyle> }>(({ text, style }) => {
    return <Text style={[styles.subText, style]}>{text}</Text>;
});

// TitleText Component
const TitleText = React.memo<{ text: string; style?: StyleProp<TextStyle> }>(({ text, style }) => {
    return (
        <Text style={[styles.titleText, style]} numberOfLines={2} ellipsizeMode="tail">
            {text}
        </Text>
    );
});

// LinkText Component
const LinkText = React.memo<{ text: string; onPress: () => void; style?: StyleProp<TextStyle> }>(({ text, onPress, style }) => {
    return (
        <Text
            style={[styles.linkText, style]}
            onPress={onPress}
            accessible
            accessibilityLabel={`Link: ${text}`}
        >
            {text}
        </Text>
    );
});

// TextBox Component
const TextBox: React.FC<{
    title?: string;
    subText?: string;
    gapReduction?: number;
    style?: StyleProp<ViewStyle>;
    titleStyle?: StyleProp<TextStyle>;
    subTextStyle?: StyleProp<TextStyle>;
    linkStyle?: StyleProp<TextStyle>;
    onPress?: () => void;
    linkText?: string;
    children?: React.ReactNode;
}> = ({
    title = "",
    subText = "",
    gapReduction = 0,
    style,
    titleStyle,
    subTextStyle,
    linkStyle,
    onPress = () => {},
    linkText,
    children,
}) => {
    const adjustedGap = Math.max(0, 10 - gapReduction);

    return (
        <View style={[styles.textBox, style]}>
            {title.trim() && <TitleText text={title} style={[{ marginBottom: adjustedGap }, titleStyle]} />}
            {subText.trim() && (
                <View>
                    <SubText text={subText} style={[{ marginTop: adjustedGap }, subTextStyle]} />
                </View>
            )}
            {linkText && (
                <LinkText
                    text={linkText}
                    onPress={onPress}
                    style={[styles.linkTextInline, linkStyle]}
                />
            )}
            {children}
        </View>
    );
};

// Styles
const styles = StyleSheet.create({
    subText: {
        fontSize: 16,
        color: "#555",
        textAlign: "justify",
    },
    titleText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#333",
    },
    textBox: {
        paddingTop: 10,
    },
    linkText: {
        fontSize: 16,
        color: "#6200EE",
    },
    linkTextInline: {
        marginTop: 5,
        textDecorationLine: "underline",
    },
});

export default TextBox;
