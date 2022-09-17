import React, { useState, useCallback } from 'react';
import {
    TextInput,
    Text,
    View,
    Button,
    TouchableOpacity,
    StyleSheet,
    ImageBackground,
    Scroll
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import axios from 'axios';

const DiseaseDitectionScreen = ({navigation,route}) => {

    const REACT_APP_BASE_URL = "http://192.168.8.158:3003/api/";

    const [predictionContainerStyle,setPredictionContainerStyle] = useState(false)
    const [image,setImage] = useState(null);
    const [imageURL,setImageURL] = useState('https://www.kindpng.com/picc/m/293-2932764_cartoon-leaf-cartoon-leaf-transparent-background-hd-png.png');
    const [loginMessage,setLoginMessage] = useState(null);
    const [predictedMood,setPredictedMood] = useState(null);
    const background = { uri: "https://media.istockphoto.com/vectors/landscape-of-rice-field-terraces-asian-rural-background-agriculture-vector-id1226970191?k=20&m=1226970191&s=612x612&w=0&h=60ddCH9qlOmTZe_Sqw7QSTYv3KK-dNUr7n5yBnCZjoE=" };

    const handlePrediction = async (credentials) => {
        setLoginMessage("Loading Prediction")
        const formData = new FormData();
        // console.log(route.params.userId)
        formData.append('farmerId', "dasdsadasdxsa")
        formData.append('image', {
            uri:image.path,
            name:"moodImage.jpeg",
            type:image.mime
         })
          fetch(REACT_APP_BASE_URL+'diseases/detectDisease',{
             method:'post',
             body:formData,
             headers:{
                 'Content-Type':'multipart/form-data',
                 'Accept': 'application/json, text/plain, */*'
            }
         })
         .then((res) => res.json())
         .then((responseJson) => {
             //GET RESPONSE SUCCESS OF FAILURE
             console.log(JSON.stringify(responseJson.Prediction));
               setPredictedMood(JSON.stringify(responseJson.Prediction))
                setPredictionContainerStyle(true)
         })
         .catch((error) => {
             //ERROR
             console.log(JSON.stringify(error));
         });
        //  let respnseJSON   =  res;
        //  console.log(res)
        //  setPredictedMood(respnseJSON.Prediction)
        //  setPredictionContainerStyle(true)
    }
    
    return(
        <View style={styles.container}>
             <ImageBackground source={background} resizeMode="cover" style={styles.image}>
            </ImageBackground> 
        
            <View style={styles.wrapper}>

            <View style={styles.titleContainer}>
                <Text style={styles.title}>Detect Plant Disease</Text>
            </View>
                <Text style={styles.description}>Upload an images of the tomatoe leaf.</Text>
                <View style={styles.leafImage}>
                    <ImageBackground 
                        source={{uri:imageURL}}
                        imageStyle={{ borderRadius: 500}}
                        style={{height:200,width:200,alignSelf:'center'}}
                    />
                </View>
               
    
                <View style={styles.cameraButtonsContainer}>
                    <TouchableOpacity 
                        style={styles.button}  
                        onPress = {()=>{
                            ImagePicker.openCamera({
                                width: 300,
                                height: 400,
                                cropping: true,
                            }).then(image => {
                                setImageURL(image.path);
                                setImage(image);
                            });                            
                        }}
                    >
                        <Text style={styles.buttonText}>TAKE AN IMAGE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.button} 
                        onPress = {()=>{
                            ImagePicker.openPicker({
                            width: 300,
                            height: 400,
                            cropping: true
                            }).then(image => {
                                setImageURL(image.path);
                                setImage(image);
                            });
                        }}
                    >
                        <Text style={styles.buttonText}>UPLOAD IMAGE</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity 
                        style={styles.detectButton} 
                        onPress = {handlePrediction}
                    >
                        <Text style={styles.detectButtonText}>Detect Disease</Text>
                </TouchableOpacity>

                {
                    predictionContainerStyle==true &&  
                    <View style={styles.displayPredictionContainer}>
                        <Text style={styles.youareText}>The detected disease is : </Text>
                        <Text style={styles.prediction}>{predictedMood}</Text>
                    </View>

                }
            
                <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
                        <Text style={styles.link}>Home</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        height:'100%',
        backgroundColor:'blue'
    },
    image: {
        position:'absolute',
        width:'100%',
        height:150,
        position:'absolute',
        top:0,
        justifyContent: "center"
    },
    leafImage:{
        alignSelf:'center',
        marginTop:10,
        width:220,
        height:220,
        justifyContent:'center',
        backgroundColor:'white',
        borderColor:'#6ab04c',
        borderWidth:5,
        borderRadius:400
    },
    titleContainer:{
        width:'100%',
        height:50,
        marginTop:0,
        justifyContent:'center'
    },
    title:{
        color:'blue',
        fontSize:25,
        textAlign:'center',
        color:'#6ab04c',
        // #6ab04c
        fontWeight:'bold',
        alignItems:'center',
        justifyContent:'center',
    },
    description:{
        color:'#6ab04c',
        fontSize:18,
        marginLeft:20,
    },
    displayPredictionContainer:{
        borderBottomWidth:1,
        borderTopWidth:1,
        borderColor:'#6ab04c',
        backgroundColor:'white',
        alignSelf:'center',
        width:'100%',
        paddingLeft:20,
        marginTop:30,
        height:80,
        marginBottom:20
    },
    youareText:{
        textAlign:'left',
        color:'#6ab04c',
        fontSize:12,
        marginTop:10,
    },
    prediction:{
        textAlign:'left',
        fontSize:15,
        marginLeft:30,
        marginTop:20,
        fontWeight:'bold',
        color:'#6ab04c',
    },
    wrapper:{
        position:'absolute',
        top:150,
        bottom:0,
        width:'100%',
        // borderWidth:1,
        borderColor:'#bbb',
        borderRadius:5,
        backgroundColor:'white'
    },
    input:{
        color:'black',
        marginBottom:20,
        borderWidth:1,
        padding:10,
        borderColor:'#bbb',
    },
    cameraButtonsContainer:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
        display:'flex',
        flexDirection:'row',
        padding:0,
        height:80,
        borderBottomColor:'#6ab04c',
        marginBottom:10
    },
    button:{
        width:'40%',
        alignItems:'center',
        justifyContent:'center',
        height:40,
        borderColor:'white',
        borderRadius:10,
        borderWidth:2,
        backgroundColor:'white',
        color:'#6ab04c',
        marginRight:'5%',
        marginLeft:'5%',
        fontWeight:'bold',
        borderColor:'#6ab04c'
    },
    buttonText:{color:'#6ab04c'},
    detectButton:{
        width:'80%',
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
        height:40,
        borderColor:'white',
        borderRadius:10,
        borderWidth:2,
        backgroundColor:'#6ab04c',
        color:'white',
        fontWeight:'bold',
    },
    detectButtonText:{
        color:'white',
        fontSize:20,
    },  
    link:{
        textAlign:'center',
        color:'#6ab04c'
    },
    text:{
        color:'black',
        textAlign:'center'
    }
})
export default DiseaseDitectionScreen;