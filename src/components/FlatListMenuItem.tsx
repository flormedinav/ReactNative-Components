import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import {MenuItem} from '../interfaces/menuItemInterface';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface Props {
  menuItem: MenuItem;
}

export const FlatListMenuItem = ({menuItem: {name, icon}}: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.8}>
      <View style={styles.container}>
        <Icon name={icon} color="grey" size={20} />
        <Text style={styles.itemText}>{name}</Text>

        <View style={{flex: 1}} />

        <Icon name="chevron-forward-outline" color="grey" size={20} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  itemText: {
    marginLeft: 10,
    fontSize: 20,
    color: 'black',
  },
});
