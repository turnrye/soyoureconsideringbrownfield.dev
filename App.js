import React, { useState } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import Question from './Question.js';
import Recommendation from './Recommendation.js';
import data from './data.js';
import { Provider as PaperProvider } from 'react-native-paper';
import { Appbar } from 'react-native-paper';

export default function App() {
  const [score, setScore] = useState(0);
  const addToScore = (value) => {
    setScore(score + value);
  };
  const renderItem = ({ item }) => (<Question answers={item.answers} addToScore={addToScore}>{item.prompt}</Question>);
  
  return (
    <PaperProvider>
        <Appbar.Header>
          <Appbar.Content
            title="What brownfield fit are you?"
          />
        </Appbar.Header>
        <FlatList data={data} renderItem={renderItem} ListFooterComponent={<Recommendation score={score} />} />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
