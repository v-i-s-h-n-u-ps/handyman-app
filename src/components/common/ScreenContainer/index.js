import React, { useState, useCallback, Children } from 'react';

import {
  ScrollView, View, Platform,
  KeyboardAvoidingView, StyleSheet,
  RefreshControl
} from 'react-native';

import Footer from '../Footer';

const ScreenContainer = props => {

  const { children, style = {}, showsVerticalScrollIndicator } = props;

  const [refreshing, setRefreshing] = useState(false);

  const wait = timeout => {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    });
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const childrenWithProps = Children.map(children, child =>
    React.isValidElement(child)
      ? React.cloneElement(child, { refreshing, setRefreshing })
      : child
  );

  return (
    <ScrollView
      style={{ ...style }}
      contentContainerStyle={styles.flexGrow}
      showsVerticalScrollIndicator={showsVerticalScrollIndicator}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
        style={styles.flex}
      >
        <View style={styles.flex}>
          {childrenWithProps}
        </View>
        <Footer />
      </KeyboardAvoidingView >
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  flex: {
    flex: 1
  },
  flexGrow: {
    flexGrow: 1
  }
})

export default ScreenContainer