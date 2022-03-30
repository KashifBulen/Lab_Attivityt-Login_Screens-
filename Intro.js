import React from "react";
import { StyleSheet, Text, View, Button,Dimensions ,ImageBackground, TouchableOpacity} from "react-native";
//import { TouchableOpacity } from "react-native-web";
import { normalizeRect } from "react-native/Libraries/StyleSheet/Rect";
//import { tintColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const Flex = () => {
  return (
    <View style={[styles.container, {
      // Try setting `flexDirection` to `"row"`.
      flexDirection: "column"
    }]}>
      
      <View style={{ flex: 2, 
      backgroundColor: "#f08df7",
       borderRadius:60 ,
       maxHeight:800,
     
       
    
    
    }} >
      <ImageBackground source={require('./assets/Saly-1intro-image.png')} style={{top: 0,  width: '90%', height: '97%', left: (Dimensions.get('window').width / 2) - 170,}}>
    
  </ImageBackground>
        
        </View>

      <View style={{ flex: 1, backgroundColor: " ", alignItems:"center" }} >
       <text style={{ paddingTop:40, fontWeight:"bolder", fontSize:30, fontFamily:"Arial", textAlign:'center'}}> 
       Discover Your <br/>Own Dream House
       </text>
      <br/>
       <text style={{
           textAlign:'center'

       }} > 
       Don't forget that gifts often come with costs that go 
       beyond their purchase price. When you purchase a 
       child the latest smartphone, you're also committing
        
        

       </text>
       </View>
      <View style={{ flex: 1, flexDirection:'row', backgroundColor: " ", maxHeight:60 }} >
      <TouchableOpacity style={styles.button1}>
      <View  >
        <text style={{
          fontSize:20,
          color:'white',
          paddingTop:20,
          fontWeight:'bolder',
          fontFamily:'Arial'
          }}>Sign in</text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button2}>
        <View  >
      <text style={{
        fontSize:20,
        color:'black',
        paddingTop:20,
        fontWeight:'bold',
        fontFamily:'Arial'
        
        }}>
        Register
        </text>
        </View>
        </TouchableOpacity>
      
        
      
       
       
        </View>
     
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,

  },
  button1: {
    backgroundColor: '#f08df7',
    width: '50%',
    height: 65,
    alignItems:'center',
    borderTopLeftRadius:12,
    borderBottomLeftRadius:12,
    left:0,
    top:0

  },

  button2: {
    top:0,
    left:0,
    backgroundColor: '#f2f3f5',
    width: '50%',
    height: 65,
    alignItems:'center',
    borderTopRightRadius:12,
    borderBottomRightRadius:12
   

  },


});

export default Flex;