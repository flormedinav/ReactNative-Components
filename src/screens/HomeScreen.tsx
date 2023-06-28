import React from 'react';
import {Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {styles} from '../theme/appTheme';
import {MenuItem} from '../interfaces/menuItemInterface';
import {FlatListMenuItem} from '../components/FlatListMenuItem';

const menuItems: MenuItem[] = [
  {
    name: 'Animation 101',
    icon: 'cube-outline',
    component: 'Animated101Screen',
  },
  {
    name: 'Animation 102',
    icon: 'albums-outline',
    component: 'Animated102Screen',
  },
];

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();

  const renderListHeader = () => {
    return (
      <View style={{marginTop: top + 20, marginBottom: 20}}>
        <Text style={styles.title}>Opciones de Menú</Text>
      </View>
    );
  };

  const itemSeparation = () => {
    return (
      <View style={{borderBottomWidth: 1, opacity: 0.4, marginVertical: 8}} />
    );
  };

  return (
    <View style={{flex: 1, ...styles.globalMargin}}>
      <FlatList
        data={menuItems}
        renderItem={({item}) => <FlatListMenuItem menuItem={item} />}
        keyExtractor={item => item.name}
        ListHeaderComponent={renderListHeader}
        ItemSeparatorComponent={itemSeparation}
      />
    </View>
  );
};

//TODO -> PROPIEDADES BÁSICAS:
//Para poder usar un FlatList debemos configurar al menos estas 3 propiedades:

//*data
//Le pasamos la data a renderizar. Esta siempre debe ser un elemento iterable.

// data={menuItems}

//*renderItem
//Le indicamos como queremos que renderice la data, siempre debe devolver un elemento JSX.
//Conviene siempre separar la función así queda más limpio el código. Es decir no realizarla en la línea del elemento FlatList.

//El item hace referencia al elemento que está iterando. Para acceder al item hay que hacer un destructuring.
//El index hace referencia a la posición de ese elemento.

// renderItem={({item}) => renderMenuItem(item)}

//*keyExtractor
//Siempre debemos colocar el keyExtractor para generar la llave única en los elementos. Debe ser un string.

// keyExtractor={item => item.name}

//TODO -> Agregar un Header y Separador

//*Para agregar un Header a la FlatList:
//Debemos configurar la propiedad ListHeaderComponent.
//A la misma hay que pasarle una función que retorne un elemento JSX.

//No usamos simplemente un Text porque cuando hay muchos elementos por defecto tiende a espaciarse hacia abajo y si tendríamos un Text, este quedaría fijo y generaría un bug.

//*Para agregar un separador entre los elementos de la FlatList:
//Debemos configurar la propiedad ItemSeparatorComponent.
//A la misma hay que pasarle una función que retorne un elemento JSX.
