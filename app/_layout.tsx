import { StyleSheet, Text, View } from 'react-native'
import { Slot, Stack } from 'expo-router'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import "../global.css";
export default function _layout() {
  return (
    <>
      <Stack>
        <Stack.Screen name='index' options={{headerShown: false}}/>
        
      </Stack>
      <StatusBar style="auto" />
    </>
    
  )
}

const styles = StyleSheet.create({
  container:{
    display:'flex',
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})