import axios from 'axios';
import React , {useState} from 'react';
import {
    TextInput,
    Text,
    View,
    Button,
    TouchableOpacity,
    StyleSheet,
    ImageBackground
} from 'react-native';


const FarmerLoginScreen = ({navigation}) => {

    const [email,setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const [loginMessage,setLoginMessage] = useState(null);
    const image = { uri: "https://media.istockphoto.com/vectors/landscape-of-rice-field-terraces-asian-rural-background-agriculture-vector-id1226970191?k=20&m=1226970191&s=612x612&w=0&h=60ddCH9qlOmTZe_Sqw7QSTYv3KK-dNUr7n5yBnCZjoE=" };


    const handleLogin = () => {
        
         const url = "http://192.168.1.8:3003/api/farmers/loginFarmer";
         axios.post(url,{email:email,password:password})
         .then(response=>{
            let res = JSON.stringify(response.data);
            setLoginMessage(res.Status);
            res = JSON.parse(res)
            if(res.Status==="Successful"){
                console.log("User Id ",res.User)
                navigation.navigate('FarmerHome',{user:res.User})
            }else{
                console.log(res.Message)
                setLoginMessage(res.Message)
            }
         })
         .catch(error=>{
             console.log(error)
            // setLoginMessage(error)
         })
    }
    return(
        <View style={styles.container}> 
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            </ImageBackground> 
            <View style={styles.wrapper}>   
                <Text style={styles.titleTextStyle}>LOGIN</Text>

                <TextInput 
                    placeholder='Enter Email' 
                    style={styles.input}
                    placeholderTextColor='#6ab04c' 
                    value={email}
                    onChangeText={(text)=>setEmail(text)}
                />
                <TextInput 
                    placeholder='Enter Password' 
                    secureTextEntry 
                    style={styles.input} 
                    placeholderTextColor='#6ab04c' 
                    value={password}
                    onChangeText={(text)=>setPassword(text)}
                />
                 <Text style={styles.text}>{loginMessage} </Text>
                
                <TouchableOpacity style={styles.buttonContainer} onPress={handleLogin}>
                   <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>

                <View style={{flexDirection:'row',marginTop:10,alignSelf:'center'}}>
                    <Text style={styles.text}>Don't have an account? </Text>
                    <TouchableOpacity onPress={()=>navigation.navigate('FarmerRegister')}>
                        <Text style={styles.link}>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
         flex:1,
         alignItems:'center',
         justifyContent:'center',
         backgroundColor:"#6ab04c",
    },
    image: {
        width:'100%',
        height:300,
        position:'absolute',
        top:0,
        justifyContent: "center"
    },
    wrapper:{
       position:'absolute',
        top:300,
        bottom:0,
        backgroundColor:'white',
        borderBottomColor:'#6ab04c',
        // borderBottomLeftRadius:300,
        // borderBottomRightRadius:00,
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
    },
    titleTextStyle:{
        color:"#6ab04c",
        fontSize:30,
        letterSpacing:15,
        marginBottom:20,
        fontWeight:'900',
        fontFamily:"sans-serif-medium",
        letterSpacing:20
    },
    input:{
        color:'black',
        marginBottom:20,
        borderWidth:1,
        padding:10,
        width:'80%',
        borderRadius:30,
        color:'#6ab04c',
        borderColor:'#6ab04c',
        textAlign:'center'
    },
    buttonContainer:{
        marginTop:30,
        width:200,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#6ab04c',
        color:'white',
        borderRadius:10,
    },
    loginText:{
        color:'white',
        fontSize:20
    },
    link:{
        color:'#6ab04c',
    },
    text:{
        color:'black',
        textAlign:'center'
    },
    
})
export default FarmerLoginScreen;