import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, Button, Text, TouchableOpacity } from 'react-native';
import { Switch, ScrollView, FlatList, SectionList,ActivityIndicator,Alert } from 'react-native'



const TextInputExample = () => {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');

  const [switchValue, setSwitchValue] = useState(false);
  const DATA = [
    { id: 0, name: 'Michael' },
    { id: 1, name: 'Quiambao' }

  ]
  const DATA2 = [
    {
      title: ' Manila',
      data: [
        'Makati',
        'Quezon City',
        'Bulacan'

      ]

    }

  ]

  const createTwoButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

  const createThreeButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Ask me later',
        onPress: () => console.log('Ask me later pressed'),
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);


  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />

      <Button
        title="My Button"
        color="magenta"
        onPress={() => { }}
      />

      <TouchableOpacity
        onPress={() => { }}
        style={{
          paddingHorizontal: 24,
          paddingVertical: 12,
          borderRadius: 16,
          backgroundColor: 'yellow'
        }}>
        <Text>
          Hello World!
        </Text>

      </TouchableOpacity>

      <Switch
        value={switchValue}
        onValueChange={newSwitchValue => setSwitchValue(newSwitchValue)}
        thumbColor='red'
        trackColor={{
          true: 'blue',
          false: 'green'
        }}
      />

      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Text style={{
            padding: 12,
            borderBottomWidth: 1,
            borderBottomColor: 'orange'
          }}> {item.name}</Text>
        )}
      />
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>


      </ScrollView>
      <SectionList
        sections={DATA2}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={{
            padding: 12,
            color: 'white',
            backgroundColor: 'blue',
            fontSize: 32,
            fontWeight: 'bold'
          }}>{title}</Text>
        )}
        renderItem={({item}) => (

          <Text 
           style={{
              padding:12,
              borderBottomWidth:1,
              borderBottomColor: 'orange'
           }}>{item}</Text>
          
          
        )}/>

      <ActivityIndicator 
      color='blue'
      size='large'
      />

<Button title={'2-Button Alert'} onPress={createTwoButtonAlert} />
<Button title={'3-Button Alert'} onPress={createThreeButtonAlert} />
    
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {

    alignContent: 'center',
    height: 40,
    margin: 20,
    borderWidth: 1,
    padding: 10,
  },
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    justifyContent: 'space-around',
    alignItems:'center'
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 12,
  },
});


export default TextInputExample;