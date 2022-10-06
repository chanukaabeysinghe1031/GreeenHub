import React , {useState,useEffect} from 'react';
import {
    TextInput,
    Text,
    View,
    Button,
    TouchableOpacity,
    StyleSheet,
    ImageBackground,
} from 'react-native';
import axios from 'axios';

const FarmerHomeScreen = ({route,navigation}) => {
    const image = { uri: "https://media.istockphoto.com/vectors/landscape-of-rice-field-terraces-asian-rural-background-agriculture-vector-id1226970191?k=20&m=1226970191&s=612x612&w=0&h=60ddCH9qlOmTZe_Sqw7QSTYv3KK-dNUr7n5yBnCZjoE=" };

    const [user,setUser] = useState(route.params.user);

    useEffect(() => {
        const REACT_APP_BASE_URL = "http://172.20.10.2:3003/api/";
        const url = REACT_APP_BASE_URL+"farmers/refreshFarmer";
        axios.post(url,{farmerId:user._id})
        .then(response=>{
           let res = JSON.stringify(response.data);
           setLoginMessage(res.Status);
           res = JSON.parse(res)
           if(res.Status==="Successful"){
               setUser(res.User)
               console.log("OKK REFRESHED")
           }else{
               console.log(res.Message)
           }
        })
        .catch(error=>{
            console.log(error)
           // setLoginMessage(error)
        })
    })
    return(
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}></ImageBackground> 
            <View style={styles.wrapper}>

                <View style={styles.farmerName}>
                <Text style={styles.hiText}>Hi</Text>
                    <Text style={styles.farmerNameText}> {user.fullName}</Text>
                </View>
                <View style={styles.contributionContainer}>
                    <Text style={styles.contributeTitle}>Your Contributions Are</Text>
                    <View style={styles.contributeItem}>
                        <Text style={styles.contributeItemTitle}>Number of Posts</Text>
                        <Text style={styles.contributeItemText}>{user.noPosts}</Text>
                    </View>
                    <View style={styles.contributeItem}>
                        <Text style={styles.contributeItemTitle}>Number of Comments</Text>
                        <Text style={styles.contributeItemText}>{user.noComments}</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.communityButton} onPress={()=>navigation.navigate('PlantsSelection',{user:user})}>
                    <Text style={styles.communityText}>Go to Community Page</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.postsButton} onPress={()=>navigation.navigate('SelfPosts',{user:user})}>
                    <Text style={styles.communityText}>See your posts </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.logoutButton} onPress={()=>navigation.navigate('Welcome')}>
                    <Text style={styles.logoutText}>Logout </Text>
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
        backgroundColor:"#6ab04c",
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
        width:'100%',
        // borderWidth:1,
        borderColor:'#bbb',
        borderRadius:5,
        paddingTop:'10%',
        backgroundColor:'white',
        // justifyContent:'center',
        alignItems:'center'
    },
    farmerName:{
        position:'absolute',
        top:20,
        display:'flex',
        flexDirection:'row',
        paddingLeft:40,
        width:'100%',
        height:50,
        borderBottomWidth:2,
        borderBottomColor:'#6ab04c'
    },
    hiText:{
        color:'#6ab04c',
        fontSize:15
    },
    farmerNameText:{
        color:'#6ab04c',
        paddingLeft:20,
        paddingTop:10,
        fontSize:20
    },
    contributionContainer:{
        backgroundColor:'#6ab04c',
        position:'absolute',
        top:80,
        width:'100%',
        height:150,
        textAlign:'center',
        padding:20,
    },
    contributeTitle:{color:'white',fontSize:20,marginBottom:20,},
    contributeItem:{display:'flex',flexDirection:'row'},
    contributeItemTitle:{marginLeft:'10%',width:'60%',color:'white',paddingTop:8,fontSize:12},
    contributeItemText:{color:'white',fontSize:20,fontWeight:'bold'},

    communityButton:{
        position:'absolute',
        top:250,
        marginTop:30,
        width:200,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#6ab04c',
        color:'white',
        borderRadius:10,
    },
    postsButton:{
        position:'absolute',
        top:300,
        marginTop:30,
        width:200,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#6ab04c',
        color:'white',
        borderRadius:10,
    },
    logoutButton:{
        position:'absolute',
        bottom:50,
        marginTop:30,
        width:80,
        height:80,
        alignItems:'center',
        justifyContent:'center',
        color:'#6ab04c',
        backgroundColor:'white',
        borderRadius:80,
        borderColor:'#6ab04c',
        borderBottomWidth:4,
        borderTopWidth:1,
        borderLeftWidth:3,
        borderRightWidth:3
    },
    logoutText:{
        color:'#6ab04c'
    },
    communityText:{
        color:'white',
        fontSize:15
    },

    productDetailsContainer:{
        position:'absolute',
        top:250,
        paddingTop:20,
        width:"90%",
        height:200,
        borderColor:'#6ab04c',
        borderWidth:2,
        borderRadius:20,
    },
    productsDetail:{display:'flex',flexDirection:'row'},
    productDetailsTitle:{marginLeft:'10%',width:'60%',color:'#6ab04c',paddingTop:8,fontSize:12},
    productsDetailsText:{color:'#6ab04c',fontSize:20,fontWeight:'bold'},


    productButtonsContainer:{
        display:'flex',
        flexDirection:'row',
        width:'100%'
    },
    productButton:{
        marginTop:30,
        width:'40%',
        marginLeft:'5%',
        marginRight:'5%',
        height:40,
        alignItems:'center',
        justifyContent:'center',
        borderColor:'#6ab04c',
        borderWidth:2,
        backgroundColor:'while',
        borderRadius:10,
    },
    productButtonText:{
        color:'#6ab04c',
        fontSize:13
    },
    buttonContainer:{
        position:'absolute',
        bottom:20,
        marginTop:30,
        width:300,
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
        color:'blue'
    },
    text:{
        color:'black',
        textAlign:'center'
    }
})

export default FarmerHomeScreen;