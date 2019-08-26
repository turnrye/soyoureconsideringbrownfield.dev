import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Card } from 'react-native-paper';

export default function Question(props) {
  const [selection, setSelection] = useState(null);
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;
  const handleSelection = (newSelection, index) => {
    let modifier = newSelection.score;
    if(selection !== null) {
      modifier = newSelection.score - props.answers[selection].score;
    }
    props.addToScore(modifier);
    setSelection(index);
  }
  return (
    <Card style={[styles.card, {
      backgroundColor: `rgba(${r}, ${g}, ${b}, 0.2)`
}]}>
        <Card.Content>
            <Text style={styles.question}>{props.children}</Text>
            <View style={styles.container}>
            {props.answers.map((answer, index) => <Button onPress={() => handleSelection(answer, index)} style={[styles.dimensions, styles.surface, (selection === index) ? styles.selected : null ]}>{answer.text}
  </Button>)}</View>
        </Card.Content>
    </Card>
  );
}


const styles = StyleSheet.create({
    card: {
        margin: 16
    },
    question: {
        flex: 1,
        fontSize: 32
    },
    dimensions: {
      minWidth: 200,
    },
    surface: {
    padding: 8,
    margin: 8,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    backgroundColor: 'rgba(0,0,0,0.1)'
  },
  selected: {
      backgroundColor: 'rgba(0,255,0,0.1)'
  },
  container: {flex: 1, flexDirection: 'row', flexWrap: 'wrap'}
});