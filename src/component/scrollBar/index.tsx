import React, { useRef, useState } from 'react';
import {
  Animated,
  StyleSheet,
  View,
  LayoutChangeEvent,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface scrollBarProps {
  children: React.ReactNode[];
}

const scrollBar: React.FC<scrollBarProps> = ({ children }) => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const [contentHeight, setContentHeight] = useState(1);
  const [containerHeight, setContainerHeight] = useState(1);

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
    <View style={styles.container} onLayout={handleLayout}>
      <Animated.ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
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
      <View style={styles.scrollBarContainer}>
        <Animated.View
          style={[
            styles.scrollBar,
            {
              height: scrollBarHeight,
            },
          ]}
        >
          <LinearGradient
            colors={['#B88AE8', '#8A2BE2']}
            style={styles.gradient}
          />
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
