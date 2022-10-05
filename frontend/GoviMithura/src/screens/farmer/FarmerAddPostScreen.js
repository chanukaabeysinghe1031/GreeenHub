import React , {useState,useEffect} from 'react';
import { version } from 'react';
import {
    TextInput,
    Text,
    View,
    Button,
    TouchableOpacity,
    StyleSheet,
    ImageBackground,
} from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import axios from 'axios';

const AddPostScreen =  ({route,navigation}) => {
    const REACT_APP_BASE_URL = "http://172.20.10.2:3003/api/";
    const image = { uri: "https://media.istockphoto.com/vectors/landscape-of-rice-field-terraces-asian-rural-background-agriculture-vector-id1226970191?k=20&m=1226970191&s=612x612&w=0&h=60ddCH9qlOmTZe_Sqw7QSTYv3KK-dNUr7n5yBnCZjoE=" };
    const {data} = route.params;
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");

    const addPost = () => {
        
        const url = REACT_APP_BASE_URL+"posts/addPost";
        axios.post(url,{
            farmerId:data.user._id,
            farmerName:data.user.fullName,
            title:title,
            description:description,
            category:data.category,
            image:"TomatoHealthy2.JPG"
        })
        .then(response=>{
           let res = JSON.stringify(response.data);
           res = JSON.parse(res)
           if(res.Status==="Successful"){
               console.log("Post Id ",res.post._id)
               navigation.navigate('Community',{data:{user:data.user,category:data.category}})
           }else{
               console.log(res)
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
                    <Text style={styles.titleTextStyle}>ADD A POST</Text>
                    <TextInput 
                        placeholder='Enter Title' 
                        style={styles.input}
                        placeholderTextColor='#6ab04c' 
                        value={title}
                        onChangeText={(text)=>setTitle(text)}
                    />
                    <TextInput 
                        multiline ={true}
                        maxLength={500}
                        height={200}
                        placeholder='Enter Description' 
                        style={styles.input}
                        placeholderTextColor='#6ab04c' 
                        value={description}
                        onChangeText={(text)=>setDescription(text)}
                    />
                    <TouchableOpacity 
                        style={styles.addPostButton} 
                        onPress={addPost} 
                    >
                        <Text style={styles.addPostText}>Add Post</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.buttonContainer} 
                        onPress={
                            ()=>navigation.navigate('FarmerHome',{user:data.user})
                        }
                    >
                        <Text style={styles.loginText}>Home</Text>
                    </TouchableOpacity>
                </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:"white",
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
        top:220,
        bottom:0,
        width:'100%',
        borderColor:'#bbb',
        borderRadius:5,
        // justifyContent:'center',
        alignItems:'center'
    },
    titleTextStyle:{
        color:"#6ab04c",
        fontSize:30,
        letterSpacing:15,
        marginTop:20,
        marginBottom:20,
        fontWeight:'900',
        fontFamily:"sans-serif-medium",
        letterSpacing:10
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
    addPostButton:{
        position:'absolute',
        bottom:70,
        marginTop:30,
        width:300,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#6ab04c',
        color:'white',
        borderRadius:10,
    },
    buttonContainer:{
        position:'absolute',
        bottom:20,
        marginTop:30,
        width:300,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white',
        color:'white',
        borderRadius:10,
    },
    addPostText:{
        color:'white',
        fontSize:15
    }, 
    loginText:{
        color:'#6ab04c',
        fontSize:15
    },  
})

export default  AddPostScreen;