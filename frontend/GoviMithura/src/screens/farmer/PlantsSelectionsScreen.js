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
import { SectionGrid } from 'react-native-super-grid';

const PlantsSelectionsScreen= ({route,navigation}) => {
  useEffect(() => {
    console.log(route.params.user)
})
    const image = { uri: "https://media.istockphoto.com/vectors/landscape-of-rice-field-terraces-asian-rural-background-agriculture-vector-id1226970191?k=20&m=1226970191&s=612x612&w=0&h=60ddCH9qlOmTZe_Sqw7QSTYv3KK-dNUr7n5yBnCZjoE=" };
    const {user} = route.params;
    const [items1, setItems1] = React.useState([
        { name: 'Beetroot', code: '#1abc9c' },
        { name: 'Carrot', code: '#2ecc71' },
        { name: 'Kohila', code: '#3498db' },
        { name: 'Manioc', code: '#9b59b6' },
        { name: 'Potato', code: '#34495e' },
        { name: 'Radish', code: '#16a085' },
        { name: 'Sweet Potato', code: '#27ae60' },
        { name: 'Lotus roots', code: '#2980b9' },
      ]);
      const [items2, setItems2] = React.useState([
        { name: 'Ash Plantain', code: '#1abc9c' },
        { name: 'Breadfruit', code: '#2ecc71' },
        { name: 'Jackfruit', code: '#3498db' },
        { name: 'Tender jackfruit', code: '#9b59b6' },
        { name: 'Tomato', code: '#34495e' }
      ]);
      const [items3, setItems3] = React.useState([
        { name: 'Agati Leaves', code: '#1abc9c' },
        { name: 'Amaranth Leaves', code: '#2ecc71' },
        { name: 'Cabbage', code: '#3498db' },
        { name: 'Gotu Kola', code: '#9b59b6' },
        { name: 'Kangkung / Water Spinach', code: '#34495e' },
        { name: 'Lettuce', code: '#16a085' },
        { name: 'Mint', code: '#27ae60' },
        { name: 'Spinach', code: '#2980b9' },
      ]);
      
      const [items4, setItems4] = React.useState([
        { name: 'Garlic', code: '#1abc9c' },
        { name: 'Knol Kohl', code: '#2ecc71' },
        { name: 'Leeks', code: '#3498db' },
        { name: 'Lemongrass', code: '#9b59b6' },
        { name: 'Onion', code: '#34495e' }
      ]);
      const [items5, setItems5] = React.useState([
        { name: 'Beans', code: '#1abc9c' },
        { name: 'Black gram', code: '#2ecc71' },
        { name: 'Chickpeas', code: '#3498db' },
        { name: 'Corn', code: '#9b59b6' },
        { name: 'Drumstick', code: '#34495e' },
        { name: 'Fenugreek', code: '#16a085' },
        { name: 'Green Grams or Mung Beans', code: '#27ae60' },
        { name: 'Long Beans or Maa karal', code: '#2980b9' },
        { name: 'Lentils', code: '#8e44ad' },
        { name: 'Okra', code: '#2c3e50' },
        { name: 'Soybean', code: '#f1c40f' },
        { name: 'Semolina', code: '#e67e22' }
      ]);
      const [items6, setItems6] = React.useState([
        { name: 'Ash Pumpkin', code: '#1abc9c' },
        { name: 'Bitter Gourd', code: '#2ecc71' },
        { name: 'Bottle Gourd', code: '#3498db' },
        { name: 'Brinjal', code: '#9b59b6' },
        { name: 'Cucumber', code: '#34495e' },
        { name: 'Ridge Gourd', code: '#16a085' },
        { name: 'Pumpkin', code: '#27ae60' },
        { name: 'Snake Gourd', code: '#2980b9' },
        { name: 'Thai Eggplant', code: '#8e44ad' }
      ]);
      const [items7, setItems7] = React.useState([
        { name: 'Capsicum', code: '#1abc9c' },
        { name: 'Chillies', code: '#2ecc71' },
        { name: 'Green Chillies', code: '#3498db' },
        { name: 'Red Chillies', code: '#9b59b6' },
        { name: 'Bird Chilli local known as Kochchi', code: '#34495e' },
        { name: 'Ridge Gourd', code: '#16a085' },
        { name: 'Bell Pepper', code: '#27ae60' },
      ]);

      const [items8, setItems8] = React.useState([
        { name: 'Artichoke', code: '#1abc9c' },
        { name: 'Cauliflower', code: '#2ecc71' },
        { name: 'Mushroom', code: '#3498db' },
        { name: 'Peanut', code: '#9b59b6' },
        { name: 'Banana Blossom', code: '#34495e' }
      ]);
    return(
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            </ImageBackground> 
                <View style={styles.wrapper}>
                    <SectionGrid
                            itemDimension={90}
                            // staticDimension={300}
                            // fixed
                            // spacing={20}
                            sections={[
                                {
                                    title: 'Rooty & Tuberous Vegetables',
                                    data: items1,
                                },
                                {
                                    title: 'Fruity Vegetables',
                                    data: items2,
                                },
                                {
                                    title: 'Leafy Vegetables ',
                                    data: items3,
                                },
                                {
                                    title: 'Bulb & Stem Vegetables',
                                    data: items4,
                                },
                                {
                                    title: 'Legumes & Grains',
                                    data: items5,
                                },
                                {
                                    title: 'Types of Gourds',
                                    data: items6,
                                },
                                {
                                    title: 'Types of Chillies',
                                    data: items7,
                                },
                                {
                                    title: 'Other Vegetables – Fungi, flowers, and nuts',
                                    data: items8,
                                },
                            ]}
                            style={styles.gridView}
                            renderItem={({ item, section, index }) => (
                                <TouchableOpacity 
                                    onPress={()=>navigation.navigate(
                                        'Community',
                                        {data:{user:user,category:item.name}}
                                    )}
                                >
                                    <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
                                        <Text style={styles.itemName}>{item.name}</Text>
                                    </View>
                                </TouchableOpacity>
                            )}
                            renderSectionHeader={({ section }) => (
                                <Text style={styles.sectionHeader}>{section.title}</Text>
                            )}
                    />
                </View>
                <TouchableOpacity style={styles.buttonContainer} onPress={()=>navigation.navigate('FarmerHome',{user:user})}>
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
    gridView: {
    marginTop: 20,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-start',
    borderRadius: 5,
    padding: 10,
    height: 100,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
  sectionHeader: {
    flex: 1,
    fontSize: 15,
    fontWeight: '600',
    alignItems: 'center',
    backgroundColor: 'white',
    color: '#6ab04c',
    padding: 10,
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

export default PlantsSelectionsScreen;