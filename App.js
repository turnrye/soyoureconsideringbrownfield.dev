import React, { useState } from 'react';
import { StyleSheet, FlatList, Text } from 'react-native';
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
  
  const keyExtractor = item => item.prompt;

  return (
    <PaperProvider>
        <Appbar.Header>
          <Appbar.Content
            title="What Stranger Things character is your brownfield app?"
          />
        </Appbar.Header>
        <Text style={styles.introText}>
          Depending on how you answer, your brownfield might be anywhere from monsterous to an epic fit.
        </Text>
        <FlatList data={data} keyExtractor={keyExtractor} renderItem={renderItem} ListFooterComponent={<Recommendation score={score} />} />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  introText: {
    marginHorizontal: 16,
    marginTop: 16,
    fontSize: 24
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
