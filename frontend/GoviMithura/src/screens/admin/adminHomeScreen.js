import React , {useState,useEffect} from 'react';
import {
    TextInput,
    Text,
    View,
    Button,
    TouchableOpacity,
    StyleSheet,
    ImageBackground,
    Alert
} from 'react-native';
import axios from 'axios';
import { FlatGrid } from 'react-native-super-grid';


const AdminHomeScreen = ({route,navigation}) => {
    const image = { uri: "https://media.istockphoto.com/vectors/landscape-of-rice-field-terraces-asian-rural-background-agriculture-vector-id1226970191?k=20&m=1226970191&s=612x612&w=0&h=60ddCH9qlOmTZe_Sqw7QSTYv3KK-dNUr7n5yBnCZjoE=" };
    const [user,setUser] = useState(route.params.user);
    const [reports,setReports] =useState(null);
    const REACT_APP_BASE_URL = "http://172.20.10.2:3003/api/";
    useEffect(() => {
        const url = REACT_APP_BASE_URL+"reports/getReports";
        axios.get(url)
        .then(response=>{
           let res = JSON.stringify(response.data);
           res = JSON.parse(res)
           if(res.Status==="Successful"){
               setReports(res.Reports)
           }else{
               console.log(res.Message)
           }
        })
        .catch(error=>{
            console.log(error)
           // setLoginMessage(error)
        })
    })

    const deleteComment = () => {
        
       
    }
    return(
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}></ImageBackground> 
            <View style={styles.wrapper}>
                <View style={styles.farmerName}>
                    <Text style={styles.hiText}>Hi</Text>
                    <Text style={styles.farmerNameText}> {user.fullName}</Text>
                </View>
                <View style={styles.reportsContainer}>
                    <Text style={styles.reportsTitle}>Reports</Text>
                    {
                        reports !== null ?
                            <FlatGrid
                                itemDimension={200}
                                data={reports}
                                style={styles.gridView}
                                maxItemsPerRow={1}
                                // staticDimension={300}
                                // fixed
                                spacing={10}
                                renderItem={({ item }) => (
                                    <View style={[styles.singleReport]}>
                                            <Text style={styles.postTitle}>{item.post.title}</Text>
                                            <Text style={styles.commentTitle}>Post Description</Text>
                                            <Text style={styles.postDesc}>{item.post.description}</Text>
                                            <Text style={styles.commentTitle}>Comment</Text>
                                            <Text style={styles.comment}>{item.comment}</Text>
                                            <Text style={styles.commentTitle}>Reason for report</Text>
                                            <Text style={styles.comment}>{item.reason}</Text>
                                            <View style={styles.buttonContainer}>
                                                <TouchableOpacity 
                                                    style={styles.deleteButton} 
                                                    onPress={
                                                        ()=>{
                                                            Alert.alert(
                                                                "Delete this comment?",
                                                                "If you delete this comment, it will be removed permenantely.",
                                                                [
                                                                    {
                                                                        cancelable: true,
                                                                        text:"Cancel",
                                                                        onPress:()=>{
                                                                            console.log("ALERT")
                                                                        },
                                                                        style:'cancel'
                                                                    },
                                                                    {
                                                                        text:"Ok",
                                                                        onPress:()=>{
                                                                            console.log("ALERT")
                                                                            const url = REACT_APP_BASE_URL+"reports/deleteComment";
                                                                            axios.post(url,{reportId:item._id,commentId:item.commentId})
                                                                            .then(response=>{
                                                                               let res = JSON.stringify(response.data);
                                                                               res = JSON.parse(res)
                                                                               if(res.Status==="Successful"){
                                                                                   navigation.navigate('AdminHome',{user:user})
                                                                               }else{
                                                                                   console.log(res.Message)
                                                                               }
                                                                            })
                                                                            .catch(error=>{
                                                                                console.log(error)
                                                                            })
                                                                        }
                                                                    }
                                                                ]
                                                            )
                                                        }
                                                    }
                                                >
                                                    <Text style={styles.buttonText}>Delete</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity 
                                                    style={styles.ignoreButton} 
                                                    onPress={
                                                        ()=>{
                                                            Alert.alert(
                                                                "Ignore this report?",
                                                                "If you ignore this report, the comment can not be deleted later.",
                                                                [
                                                                    {
                                                                        cancelable: true,
                                                                        text:"Cancel",
                                                                        onPress:()=>{
                                                                            console.log("ALERT")
                                                                        },
                                                                        style:'cancel'
                                                                    },
                                                                    {
                                                                        text:"Ok",
                                                                        onPress:()=>{
                                                                            const url = REACT_APP_BASE_URL+"reports/deleteReport";
                                                                            axios.post(url,{reportId:item._id})
                                                                            .then(response=>{
                                                                               let res = JSON.stringify(response.data);
                                                                               res = JSON.parse(res)
                                                                               if(res.Status==="Successful"){
                                                                                   navigation.navigate('AdminHome',{user:user})
                                                                               }else{
                                                                                   console.log(res.Message)
                                                                               }
                                                                            })
                                                                            .catch(error=>{
                                                                                console.log(error)
                                                                            })
                                                                        }
                                                                    }
                                                                ]
                                                            )
                                                        }
                                                    }
                                                >
                                                    <Text style={styles.buttonText}>Ignore</Text>
                                                </TouchableOpacity>
                                            </View>
                                    </View>
                                )}
                            />
                        :
                        null
                    }
                </View>
                <TouchableOpacity 
                    style={styles.logoutButton} 
                    onPress={
                        ()=>{
                            navigation.navigate('Welcome') 
                        }
                    }
                >
                    <Text style={styles.logoutText}>Logout</Text>
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
        alignItems:'center',
        overflow:'scroll'
    },
    farmerName:{
        position:'absolute',
        top:0,
        display:'flex',
        flexDirection:'row',
        paddingLeft:40,
        width:'100%',
        height:50,
        borderBottomWidth:2,
        backgroundColor:'#6ab04c',
        borderBottomColor:'#6ab04c'
    },
    hiText:{
        marginTop:10,
        color:'white',
        fontSize:15
    },
    farmerNameText:{
        color:'white',
        paddingLeft:20,
        paddingTop:20,
        fontSize:20
    },
    adminText:{
        color:'#6ab04c',
        fontSize:20
    },
    reportsContainer:{
        position:'absolute',
        top:80,
        left:10,
        right:10,
        bottom:100,
        padding:10,
        borderColor:'#6ab04c',
        borderWidth:2,
        borderRadius:20,
    },
    reportsTitle:{
        fontSize:20,
        color:'#6ab04c',
        textAlign:'center'
    },
    singleReport:{
        margin:5,
        borderColor:'#dcdde1',
        borderWidth:2,
        padding:5,
        borderRadius:30
    },
    postTitle:{
        fontSize:20,
        color:'#6ab04c',
        textAlign:'center',
        borderBottomColor:'#dcdde1',
        borderBottomWidth:2,
    },
    postDesc:{
        fontSize:15,
        color:'#6ab04c',
        textAlign:'center',
    },
    commentTitle:{
        fontSize:15,
        color:'red',
        textAlign:'center',
        marginTop:10
    },
    comment:{
        fontSize:12,
        color:'black',
        textAlign:'center'
    },
    buttonContainer:{
        marginBottom:10,
        marginTop:10,
        width:"100%",
        flexDirection:'row'
    },
    deleteButton:{
        textAlign:'center',
        marginLeft:'10%',
        marginRight:'10%',
        width:'30%',
        borderRadius:20,
        backgroundColor:'red',
    },
    ignoreButton:{
        textAlign:'center',
        marginLeft:'10%',
        marginRight:'10%',
        width:'30%',
        borderRadius:20,
        backgroundColor:'#6ab04c',
    },
    buttonText:{
        color:'white',
        textAlign:'center'
    },
    logoutButton:{
        position:'absolute',
        bottom:10,
        padding:10,
        width:80,
        height:80,
        borderRadius:80,
        borderColor:'#6ab04c',
        borderBottomWidth:4,
        borderLeftWidth:3,
        borderRightWidth:3,
        borderTopWidth:2,
        justifyContent:'center'
    },
    logoutText:{
        color:'#6ab04c',
        fontSize:15,
        textAlign:'center',
    }
})

export default AdminHomeScreen;