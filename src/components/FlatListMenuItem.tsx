import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import {MenuItem} from '../interfaces/menuItemInterface';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/core';

interface Props {
  menuItem: MenuItem;
}

// interface Props extends StackScreenProps<any, any> {}

export const FlatListMenuItem = ({
  menuItem: {name, icon, component},
}: Props) => {
  const navigation = useNavigation<any>();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate(component)}>
      <View style={styles.container}>
        <Icon name={icon} color="#5856D6" size={20} />
        <Text style={styles.itemText}>{name}</Text>

        <View style={{flex: 1}} />

        <Icon name="chevron-forward-outline" color="#5856D6" size={20} />
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
