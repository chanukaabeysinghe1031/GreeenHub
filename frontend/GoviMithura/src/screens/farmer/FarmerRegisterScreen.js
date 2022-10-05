import React , {useState} from 'react';
import {
    TextInput,
    Text,
    View,
    Button,
    TouchableOpacity,
    StyleSheet,
    ImageBackground,
    ScrollView
} from 'react-native';
import axios from 'axios';

const FarmerRegisterScreen = ({navigation}) => {
    const REACT_APP_BASE_URL = "http://172.20.10.2:3003/api/";
    const [email,setEmail] = useState(null);
    const [fullName,setFullName] = useState(null);
    const [mobileNo,setMobileNo] = useState(null);
    const [password,setPassword] = useState(null);
    const [address,setAddress] = useState(null);
    const [loginMessage,setLoginMessage] = useState(null);
    const image = { uri: "https://media.istockphoto.com/vectors/landscape-of-rice-field-terraces-asian-rural-background-agriculture-vector-id1226970191?k=20&m=1226970191&s=612x612&w=0&h=60ddCH9qlOmTZe_Sqw7QSTYv3KK-dNUr7n5yBnCZjoE=" };

    const handleSignup = (credentials) => {
        console.log("SDSHJKSHFKJHFSJKHFSKJH")
        const url = REACT_APP_BASE_URL+"farmers/addFarmer";
        axios.post(url,{fullName:fullName,email:email,password:password,address:address,mobileNo:mobileNo})
        .then(response=>{
            let res = JSON.stringify(response.data);
            setLoginMessage(res.Status);
            res = JSON.parse(res)
            if(res.Status==="Successful"){
                console.log("BBBBBBBBBBBBB")
                navigation.navigate('FarmerHome',{user:res.User})
            }else{
                setLoginMessage(res.Message)
            }
        })
        .catch(error=>{
            console.log(error)
            setLoginMessage("Error Happened")
        })
   }
    return(
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            </ImageBackground> 
            <View style={styles.wrapper}>
                <Text style={styles.titleTextStyle}>REGISTER</Text>
                <TextInput 
                    placeholder='Enter Full Name' 
                    style={styles.input}
                    placeholderTextColor='#6ab04c' 
                    value={fullName}
                    onChangeText={(text)=>setFullName(text)}
                />
                 <TextInput 
                    placeholder='Enter Contact No' 
                    style={styles.input}
                    placeholderTextColor='#6ab04c' 
                    value={mobileNo}
                    keyboardType='numeric'
                    onChangeText={(text)=>setMobileNo(text)}
                />
                 <TextInput 
                    placeholder='Enter Addresss' 
                    style={styles.input}
                    placeholderTextColor='#6ab04c' 
                    value={address}
                    onChangeText={(text)=>setAddress(text)}
                />
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
                {
                    loginMessage===""?<Text style={styles.loginMessage}>{loginMessage}</Text>:null
                }
                
                <TouchableOpacity style={styles.buttonContainer} onPress={handleSignup}>
                   <Text>Register</Text>
                </TouchableOpacity>
                <View style={{flexDirection:'row',marginTop:10,alignSelf:'center'}}>
                    <Text style={styles.text}>Have an account already? </Text>
                    <TouchableOpacity onPress={()=>navigation.navigate('FarmerLogin')}>
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
         backgroundColor:"#6ab04c"
    },
    image: {
        width:'100%',
        height:200,
        position:'absolute',
        top:0,
        justifyContent: "center"
    },
    wrapper:{
        position:'absolute',
         top:200,
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
        height:30,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#6ab04c',
        color:'white',
        borderRadius:20,
    },
    link:{
        color:'#6ab04c'
    },
    text:{
        color:'black',
        textAlign:'center'
    },
    loginMessage:{
        backgroundColor:'red',
        width:'100%',
        fontSize:15,
        color:'white',
        padding:5,
        textAlign:'center'
    }
})

export default FarmerRegisterScreen;