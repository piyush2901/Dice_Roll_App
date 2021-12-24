import React ,{useState} from 'react'

import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Pressable
} from 'react-native'

import DiceOne from './assets/dice1.png'
import DiceTwo from './assets/dice2.png'
import DiceThree from './assets/dice3.png'
import DiceFour from './assets/dice4.png'
import DiceFive from './assets/dice5.png'
import DiceSix from './assets/dice6.png'

const App = () => {
  const [uri,setUri] = useState(DiceOne)
  const [uri1,setUri1] = useState(DiceOne)

  const rollDie = () => {
    let randomno = Math.floor(Math.random()*6) + 1
    switch(randomno){
      case 1:
        setUri(DiceOne)
        break;
      case 2:
        setUri(DiceTwo)
        break;
      case 3:
        setUri(DiceThree)
        break;
      case 4:
        setUri(DiceFour)
        break;
      case 5:
        setUri(DiceFive)
        break;
      case 6:
        setUri(DiceSix)
        break;  
      default:
        setUri(DiceOne)
        break;
    }
  }

  const rollDie1 = () => {
    let randomno1 = Math.floor(Math.random()*6) + 1
      switch(randomno1){
        case 1:
          setUri1(DiceOne)
          break;
        case 2:
          setUri1(DiceTwo)
          break;
        case 3:
          setUri1(DiceThree)
          break;
        case 4:
          setUri1(DiceFour)
          break;
        case 5:
          setUri1(DiceFive)
          break;
        case 6:
          setUri1(DiceSix)
          break;  
        default:
          setUri1(DiceOne)
          break;
    }
  }
    
  return(
    <>
      <View style ={styles.container}>
        <Pressable onPress={rollDie}>
          <Image style={styles.image} source={uri}/>
        </Pressable>
        <Pressable onPress={rollDie1}>
          <Image style={styles.image} source={uri1}/>
        </Pressable>
        <TouchableOpacity onPress={rollDie}>
            <Text style={styles.gamePlayButton}>Play Game</Text>
        </TouchableOpacity>
      </View>     
    </>
  )
}

export default App;

const styles=StyleSheet.create({
  container:{
    flex:1,
    alignItems: "center",
    justifyContent:"center",
    backgroundColor: "#222831",
  },
  image:{
    width:200,
    height:200,
    marginTop:50,
  },
  gamePlayButton:{
    fontSize:20,
    marginTop:30,
    color:"#F2A365",
    paddingHorizontal:40,
    paddingVertical:10,
    borderColor:"#30475E",
    borderRadius:30,
    borderWidth:3,
    fontWeight:"bold",
  }

})