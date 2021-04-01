import React from 'react';
import { StyleSheet, SafeAreaView} from 'react-native';

import Header from './src/components/shared/header/index';
import TasksContainer from './src/components/tasksEpic/TasksContainer';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <TasksContainer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop : Platform.OS === "android" ? 0 : 25,
    paddingLeft: 20,
    paddingRight: 20
  }

});