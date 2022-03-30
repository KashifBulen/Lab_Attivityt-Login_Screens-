import React from "react";
import { StyleSheet,Image, Text, View, Button, TextInput, TouchableOpacity} from "react-native";



const Flex = () => {
  return (
    
    <View style={[styles.container, {
      // Try setting `flexDirection` to `"row"`.
      flexDirection: "column"
    }]}>
      
      <View style={{ flex: 2, 
      backgroundColor: " ",
       
       maxHeight:800,
    }} >
    
    <Text style={{fontSize:30, textAlign:'center', fontWeight:'bolder', fontFamily:'Arial'}}>
        Welcome Back
        </Text>
       
        <Text style={{ textAlign:'center', marginBottom:40 }}>
        Don't forget that gifts often come with costs  
       beyond their purchase price. When you purchase a

        </Text>

        <TextInput
          style={{height: 45,width: "95%", backgroundColor:'#ebf2f7', borderColor: "#ebf2f7",borderWidth: 2, borderRadius:10, marginBottom:10}}
          placeholder="   Username, Email & Phone Number"
          underlineColorAndroid="transparent"
          secureTextEntry={true}
        />
        
        <TextInput
          style={{height: 45,width: "95%", backgroundColor:'#ebf2f7',borderColor: "#ebf2f7",borderWidth: 2, borderRadius:10}}
          placeholder="   Password"
          underlineColorAndroid="transparent"
          secureTextEntry={true}
        />
        <Text style={{ 
          textAlign:'center',
           marginBottom:40, 
           textAlign:'right',
            marginRight:22,
            marginTop:10
            }}>
        Forgot Password ?

        </Text>

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

        <Text style={{ 
          textAlign:'center',
           marginBottom:40, 
           textAlign:'center',
            marginRight:22,
            marginTop:10
            }}>

        -------- Or Sign up with -------- 

        </Text>

        </View>

      <View style={{ flex: 2, flexDirection:'row', backgroundColor: "", alignItems:'flex-start' }} >
      
 <Image style={{  width:50, height:50, border:'#bdbbb7' , left:100, bottom:30}} source={require('./assets/Google logo.png')}/>
 <Image style={{ width:50, height:50, border:'#bdbbb7' , left:100, bottom:30}} source={require('./assets/Facbook.png')}/>
 <Image style={{width:50, height:50, border:'#bdbbb7' , left:100, bottom:30}} source={require('./assets/Group.png')}/>
      
        
      
       
       
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
    width: '95%',
    height: 65,
    alignItems:'center',
    borderRadius:20,
    left:0,
 

  },

 


});

export default Flex;
