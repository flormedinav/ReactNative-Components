import {View, StyleSheet, Animated, Button} from 'react-native';
import {useAnimation} from '../hooks/useAnimation';

export const Animated101Screen = () => {
  const {opacity, position, fadeIn, fadeOut, startMovingPosition} =
    useAnimation();

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.purpleBox,
          opacity,
          marginBottom: 20,
          transform: [
            {
              translateY: position,
            },
          ],
        }}
      />

      <Button
        title="FadeIn"
        onPress={() => {
          fadeIn();
          startMovingPosition(-100);
        }}
      />
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

//?ANIMACIÓN PARA QUE CAIGA Y REBOTE
//Creamos un nuevo useRef -> top a -100
//Usamos nuevamente el timing.
//A la propiedad transform de css en translateY es a la que le vamos a determinar el valor de top:
// transform: [
//   {
//     translateY: top,
//   },

//Y para que tenga el efecto de rebote agregamos la propiedad de easing en el objeto de configuración.
//Ese efecto de rebote lo obtenemos de Easing.bounce. (hay muchos más efectos)

// Animated.timing(top, {
//   toValue: 0,
//   duration: 800,
//   useNativeDriver: true,
//   easing: Easing.bounce,
// }).start();
