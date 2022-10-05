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
    Image
} from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import axios from 'axios';

const AddReviewScreen =  ({route,navigation}) => {
    const REACT_APP_BASE_URL = "http://172.20.10.2:3003/api/";

    const image = { uri: "https://media.istockphoto.com/vectors/landscape-of-rice-field-terraces-asian-rural-background-agriculture-vector-id1226970191?k=20&m=1226970191&s=612x612&w=0&h=60ddCH9qlOmTZe_Sqw7QSTYv3KK-dNUr7n5yBnCZjoE=" };
    const {data} = route.params;
    const [title,setTitle] = useState("");
    const [comment,setComment] = useState("");
    const [defaultRating,setDefaultRating] = useState(2);
    const [maxRating,setMaxRating] = useState([1,2,3,4,5])

    const starImageCorener = "https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png";
    const starImageFilled = "https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png";

    const addReview = () => {
        
        const url = REACT_APP_BASE_URL+"comments/rateComment";
        axios.post(url,{
            farmerId:data.user._id,
            farmerName:data.user.fullName,
            title:title,
            comment:comment
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
                    <Text style={styles.titleTextStyle}>Rate the Comment</Text>
                    <View style={styles.customRatingBarStyle}>
                        {
                            maxRating.map((item,key)=>{
                                return(
                                    <TouchableOpacity
                                        activeOpacity={0.7}
                                        key={item}
                                        onPress={()=>{
                                            setDefaultRating(item)
                                        }}
                                    >
                                        <Image
                                            style={styles.starImageStyle}
                                            source={
                                                item<= defaultRating ? {uri:starImageFilled} : {uri:starImageCorener}
                                            }
                                        />
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </View>
                    <Text style={styles.textStyle}>{defaultRating} / {maxRating.length}</Text>
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
        fontSize:25,
        letterSpacing:15,
        marginTop:20,
        marginBottom:20,
        fontWeight:'900',
        fontFamily:"sans-serif-medium",
        letterSpacing:5
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
    customRatingBarStyle:{
        justifyContent:'center',
        flexDirection:'row',
        marginTop:30
    },
    starImageStyle:{
        width:40,
        height:40,
        resizeMode:'cover'
    },
    textStyle:{
        color:'green',
        marginTop:20,
        fontSize:20
    }

})

export default  AddReviewScreen;