import { useNavigation } from '@react-navigation/native'
import { StackNavigationOptions } from '@react-navigation/stack'
import { Button, Logo, Screen, Separator, Text } from 'core/components'
import React from 'react'
import { StyleSheet, View } from 'react-native'


export const WelcomeScreen = () => {
  const navigation = useNavigation()

  const goToLogin = () => {
    navigation.navigate('Login')
  }

  const goToSingUp = () => {
    navigation.navigate('SingUp')
  }


  return (
    <Screen contentContainerStyles={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.logoContainer}>
          <Logo />
        </View>
        <View style={styles.textContainer}>
          <View style={styles.titleContainer}>
            <Text bold fontSize={24} color='#38A37F'>
              Preço na Mão
            </Text>
          </View>
          <Text style={styles.text} bold>
            SUA LISTA DE COMPRA INTELIGENTE
          </Text>
          <Text style={styles.text}>
            Use para Criar Listas, Inserir Produtos e Quantidades
            Acessar Listas Anteriores e ainda Controlar Valores
            para observar compras feitas.
          </Text>
        </View>
      </View>

      <Separator style={styles.separator} />

      <View style={styles.footerContainer}>
        <Button onPress={goToLogin}>
          Já tenho cadastro
        </Button>

        <Text bold style={styles.text}>
          ou
        </Text>

        <Button onPress={goToSingUp}>
          Ainda não sou cadastrado
        </Button>
      </View>
    </Screen>
  )
}


const navigationOptions: StackNavigationOptions = {
  headerShown: false,
}

WelcomeScreen.NavigationOptions = navigationOptions


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flex: 0.75
  },
  logoContainer: {
    paddingTop: 56,
    alignItems: 'center',
  },
  textContainer: {
    paddingTop: 20,
    paddingHorizontal: 24,
  },
  titleContainer: {
    alignItems: 'center',
    paddingBottom: 24
  },
  separator: {
    marginHorizontal: -20,
  },
  footerContainer: {
    flex: 0.25,
    justifyContent: 'space-evenly',
  },
  text: {
    alignSelf: 'center'
  }
})