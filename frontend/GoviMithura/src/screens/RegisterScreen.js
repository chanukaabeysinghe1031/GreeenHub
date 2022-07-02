import React , {useState} from 'react';
import {
    TextInput,
    Text,
    View,
    Button,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import axios from 'axios';

const RegisterScreen = ({navigation}) => {
    const [email,setEmail] = useState(null);
    const [fullName,setFullName] = useState(null);
    const [contactNo,setContactNo] = useState(null);
    const [password,setPassword] = useState(null);

    const handleSignup = (credentials) => {
        const url = "http://192.168.8.158:3003/api/users/addUser";
        axios.post(url,{fullName:fullName,email:email,password:password})
        .then(response=>{
            let res = JSON.stringify(response.data);
            setLoginMessage(res.Status);
            res = JSON.parse(res)
            if(res.Status==="Successful"){
                navigation.navigate('PredictFatLevel')
            }else{
                console.log(res.Message)
                setLoginMessage(res.Message)
            }
        })
        .catch(error=>{
            setLoginMessage(error)
        })
   }
    return(
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <Text style={styles.titleTextStyle}>REGISTER</Text>
                <TextInput 
                    placeholder='Enter Full Name' 
                    style={styles.input}
                    placeholderTextColor='black' 
                    value={fullName}
                    onChangeText={(text)=>setFullName(text)}
                />
                 <TextInput 
                    placeholder='Enter Contact No' 
                    style={styles.input}
                    placeholderTextColor='black' 
                    value={contactNo}
                    onChangeText={(text)=>setContactNo(text)}
                />
                 <TextInput 
                    placeholder='Enter Email' 
                    style={styles.input}
                    placeholderTextColor='black' 
                    value={email}
                    onChangeText={(text)=>setEmail(text)}
                />
                <TextInput 
                    placeholder='Enter Password' 
                    secureTextEntry 
                    style={styles.input} 
                    placeholderTextColor='black' 
                    value={password}
                    onChangeText={(text)=>setPassword(text)}
                />
                
                <TouchableOpacity style={styles.buttonContainer} onPress={handleSignup}>
                   <Text>Register</Text>
                </TouchableOpacity>
                <View style={{flexDirection:'row',marginTop:10,alignSelf:'center'}}>
                    <Text style={styles.text}>Have an account already? </Text>
                    <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                        <Text style={styles.link}>Login</Text>
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
         backgroundColor:"#bdc3c7"
    },
    wrapper:{
        width:'100%',
        // borderWidth:1,
        borderColor:'#bbb',
        borderRadius:5,
        paddingHorizontal:14,
        paddingTop:'10%',
        height:"100%",
        backgroundColor:"#ecf0f1",
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        borderBottomEndRadius:300,
        borderTopStartRadius:300,
        borderColor:'#9b59b6',
        borderWidth:1
    },
    titleTextStyle:{
        color:"#9b59b6",
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
        color:'#9b59b6',
        borderColor:'#9b59b6',
    },
    buttonContainer:{
        marginTop:30,
        width:200,
        height:30,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#9b59b6',
        color:'#ecf0f1',
        borderRadius:20,
    },
    link:{
        color:'blue'
    },
    text:{
        color:'black',
        textAlign:'center'
    }
})

export default RegisterScreen;