import React from "react";
import {Button,StyleSheet, View,Text} from 'react-native'

export default function Home (props){

  const jump = ()=>{
    props.navigation.navigate('About', {name: 'home'})
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Button style={styles.btn} onPress={jump} title="go"/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 24,
    backgroundColor: "#eaeaea",
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    paddingBottom: 50
  },
  btn: {
    width: 200
  }
})