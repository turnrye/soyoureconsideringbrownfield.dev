import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, Image, View } from 'react-native';

const yesThreshold = 1;
const noThreshold = -1;

function recommendationCard(name, icon, color, image, narrative) {
    return (
        <View>
            
            <Text style={[styles.name, styles.card]}><Ionicons name={icon} style={styles.card} size={32} color={color} /> You're {name}</Text>
            <Image source={{uri: image}} style={[styles.card, {marginHorizontal: 0, width: 533, height: 200}]} />
            <Text style={styles.card}>{narrative}</Text>
        </View>
     );
}

export default function Recommendation(props) {
    if(props.score > yesThreshold) {
        return recommendationCard("Eleven", "md-checkmark-circle", "green", "https://media.giphy.com/media/xT9Igmu79BG4QESMwM/200w_d.gif", "Eleven is strong and powerful. She's still figuring things out though. She has a few fights along the way, but she always pulls through. This is what brownfield will be like for you: the hero to save you from all your problems.");
    } else if(props.score < noThreshold) {
        return recommendationCard("Dr. Brenner", "md-alert", "red", "https://66.media.tumblr.com/e58265c3af0601de6d6c10709f529a1d/tumblr_oyo2w1g3Kf1qe37y8o3_500.gif", "Dr. Brenner pushed the limits and unleashed a monster. He is your brownfield. There will be moments where you like it and where it feels right, but pretty quickly it'll become obvious that it's going to end badly.");
    } else {
        return recommendationCard("Barb", "md-help", "black", "https://media.giphy.com/media/l1J9KqKcpnG6ychfq/giphy.gif", "Let's be honest: we never really knew about Barb. And that's about all we can say about your brownfield fit: maybe it's a good thing, maybe it's not. But it's definitely intriguing, and in time we'll know more.");
    }
}

const styles = StyleSheet.create({
    card: {
        marginHorizontal: 16,
        marginVertical: 8
    },
    name: {
        fontSize: 24
    },
    question: {
        flex: 1,
        fontSize: 32
    },
    surface: {
    padding: 8,
    margin: 8,
    minWidth: 200,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    backgroundColor: 'rgba(0,0,0,0.1)'
  },
  selected: {
      backgroundColor: 'rgba(0,0,0,0)'
  },
  container: {flex: 1, flexDirection: 'row', flexWrap: 'wrap'}
});