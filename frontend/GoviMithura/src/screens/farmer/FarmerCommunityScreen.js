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

const CommunityScreen =  ({route,navigation}) => {
    const image = { uri: "https://media.istockphoto.com/vectors/landscape-of-rice-field-terraces-asian-rural-background-agriculture-vector-id1226970191?k=20&m=1226970191&s=612x612&w=0&h=60ddCH9qlOmTZe_Sqw7QSTYv3KK-dNUr7n5yBnCZjoE=" };
    const {data} = route.params;
    const [items, setItems] = React.useState([
        { name: 'Beetroot', code: '#1abc9c' },
        { name: 'Carrot', code: '#2ecc71' },
        { name: 'Kohila', code: '#3498db' },
        { name: 'Manioc', code: '#9b59b6' },
        { name: 'Potato', code: '#34495e' },
        { name: 'Radish', code: '#16a085' },
        { name: 'Sweet Potato', code: '#27ae60' },
        { name: 'Lotus roots', code: '#2980b9' },
      ]);

      const url = "http://192.168.8.158:3003/api/posts/getPosts";
      axios.post(url,{category:data.category})
      .then(response=>{
         let res = JSON.stringify(response.data);
         res = JSON.parse(res)
         if(res.Status==="Successful"){
             setItems(res.Posts)
         }else{
             console.log(res.Message)
         }
      })
      .catch(error=>{
          console.log(error)
         // setLoginMessage(error)
      })

    return(
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            </ImageBackground> 
                <View style={styles.wrapper}>
                <FlatGrid
                    itemDimension={130}
                    data={items}
                    style={styles.gridView}
                    maxItemsPerRow={1}
                    // staticDimension={300}
                    // fixed
                    spacing={10}
                    renderItem={({ item }) => (
                        <View style={[styles.itemContainer]}>
                            <Text style={styles.itemName}>{item.title}</Text>
                            <Text style={styles.itemFarmerName}>By {item.farmerName}</Text>
                            <Text style={styles.itemCode}>{item.description}</Text>
                        </View>
                    )}
                />
                </View>
                <TouchableOpacity 
                    style={styles.buttonContainer} 
                    onPress={
                        ()=>navigation.navigate('FarmerHome',{user:data.user})
                    }
                >
                        <Text style={styles.loginText}>Home</Text>
                </TouchableOpacity>
            
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
       height:100,
       position:'absolute',
       top:0,
       justifyContent: "center"
   },

    wrapper:{
        position:'absolute',
        top:100,
        bottom:100,
        width:'100%',
        // borderWidth:1,
        borderColor:'#bbb',
        borderRadius:5,
        // justifyContent:'center',
        alignItems:'center'
    },

    itemContainer: {
        justifyContent: 'flex-start',
        borderRadius: 25,
        padding: 0,
        paddingBottom:20,
        borderColor:'#6ab04c',
        borderWidth:3
    },
    itemName: {
        padding:5,
        margin:10,
        borderRadius:25,
        backgroundColor:'#6ab04c',
        fontSize: 20,
        color: '#fff',
        textAlign:'center',
        fontWeight: 'bold',
    },
    itemFarmerName:{
        fontSize: 16,
        color: '#6ab04c',
        paddingRight:10,
        textAlign:'right',
        fontWeight: '600',
        marginBottom:10
    },
    itemCode: {
        paddingLeft:10,
        paddingRight:10,
        fontWeight: '600',
        fontSize: 12,
        color: '#6ab04c',
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
        fontSize:15
    },  
})

export default  CommunityScreen;