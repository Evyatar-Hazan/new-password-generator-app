import React, { useRef, useState } from 'react';
import {
  Animated,
  StyleSheet,
  View,
  LayoutChangeEvent,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useTheme } from '../../themes/ThemeContext';
import { themes } from '../../themes/themes';

interface scrollBarProps {
  children: React.ReactNode[];
}

const scrollBar: React.FC<scrollBarProps> = ({ children }) => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const [contentHeight, setContentHeight] = useState(1);
  const [containerHeight, setContainerHeight] = useState(1);
  const { theme } = useTheme();
  const colors = themes[theme];

  const handleContentSizeChange = (width: number, height: number) => {
    setContentHeight(height);
  };

  const handleLayout = (event: LayoutChangeEvent) => {
    setContainerHeight(event.nativeEvent.layout.height);
  };

  const minScrollBarHeight = 40;

  const scrollBarHeight = scrollY.interpolate({
    inputRange: [0, Math.max(contentHeight - containerHeight, 1)],
    outputRange: [minScrollBarHeight, containerHeight],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles(colors).container} onLayout={handleLayout}>
      <Animated.ScrollView
        style={styles(colors).scrollView}
        contentContainerStyle={styles(colors).scrollViewContent}
        showsVerticalScrollIndicator={false}
        onContentSizeChange={handleContentSizeChange}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
      >
        {children}
      </Animated.ScrollView>
      <View style={styles(colors).scrollBarContainer}>
        <Animated.View
          style={[
            styles(colors).scrollBar,
            {
              height: scrollBarHeight,
            },
          ]}
        >
          <LinearGradient
            colors={[colors.mainLightPurple, colors.mainPurple]}
            style={styles(colors).gradient}
          />
        </Animated.View>
      </View>
    </View>
  );
};

const styles = (colors: any) =>
  StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 32,
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    paddingRight: 16,
  },
  scrollBarContainer: {
    width: 8,
    borderRadius: 4,
    overflow: 'hidden',
  },
  scrollBar: {
    width: '100%',
    borderRadius: 4,
    overflow: 'hidden',
  },
  gradient: {
    flex: 1,
  },
});

export default scrollBar;
