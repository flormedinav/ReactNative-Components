import {useRef} from 'react';
import {View, StyleSheet, Animated, Button} from 'react-native';

export const Animated101Screen = () => {
  const opacity = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start(() => console.log('Animación terminó'));
  };

  const fadeOut = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.purpleBox,
          opacity: opacity,
          marginBottom: 20,
        }}
      />

      <Button title="FadeIn" onPress={fadeIn} />
      <Button title="FadeOut" onPress={fadeOut} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  purpleBox: {
    backgroundColor: '#5856D6',
    width: 150,
    height: 150,
  },
});

//TODO -> IMPORTANTE:
//No todas las propiedades son animadas.
//Si usamos algún tipo de animación debemos usar el Animated.View.

//Conviene usar useRef en lugar de useState porque no dispara para volver a renderizar
//El .Value es para manejar un valor y el ValueXY es para manejar dos valores.
// const opacity = useRef(new Animated.Value(0.4)).current;

//Configuración de una animación:
// const fadeIn = () => {
//   Animated.timing(opacity, {
//     toValue: 1,
//     duration: 300,
//     useNativeDriver: true,
//   }).start();
// };

//Al timing hay que pasarle dos valores:
//- Primero es un Animated.value que se crea con una nueva instancia de Animated en este caso el opacity.
//- Segundo recibe un objeto de configuración:
//    -> toValue: hasta que valor se va a cambiar
//    -> duration: cuál va a ser la duración
//    -> useNativeDriver: en true para se acelerado por hardware

//Para que la animación empiece se debe colocar el .start()

//El método start() puede recibir de manera opcional un callback por ejemplo:
// const fadeIn = () => {
//   Animated.timing(opacity, {
//     toValue: 1,
//     duration: 3000,
//     useNativeDriver: true,
//   }).start(() => console.log('Animación terminó'));
// };
