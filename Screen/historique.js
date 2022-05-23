
import React  , {useState , useEffect}from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
  ScrollView,
  Alert,
  FlatList,
  Dimensions
} from "react-native";

const {width:WIDTH} =Dimensions.get('window')
import {MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 


import { getUserData, LogoutUser, storeUserData } from "../utils/AsyncStorageFunctions";
export default function Historique({ navigation }) {
  const[data , setData]=useState('')
  const[station , setStation]=useState('')

useEffect(async () => {
  const data =await getUserData();

  fetch("http://192.168.1.15:3001/reservation/getBySE/"+data.data.station._id
)
  .then((res) => res.json())
  .then((resJSON) => {
    console.log(resJSON)
    
    setData(resJSON);
  
  })
  .catch((err) => console.error(err));

  console.log(station)
}, []);
 
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#EEECF2",
        width:WIDTH-30,
        

      }}
    >
      <View style={StyleSheet.container}>
        <FlatList
          data={data}
          renderItem={({ item }) => {
            console.log('====================================');
            console.log(item);
            console.log('====================================');
            return (
              <>
               

                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    backgroundColor: "#E0F2F7",
                    marginBottom: 10,
                    marginTop:10,
                    borderRadius: 10,
                    backgroundColor: "#fff",
                    shadowColor: "#000",
                    shadowOffset: {
                      width: 0,
                      height: 10,
                    },
                    shadowOpacity: 0.3,
                    shadowRadius: 20,
                    padding: 10,
                    marginStart:7,
                    marginEnd:8

                  }}
                >
                  
                 
                  <View style={{ flex: 1, flexDirection: "column" , padding:10}}>
                    <Text style={{fontSize:19 , fontWeight:'bold' , marginBottom:10}}>Reservation:</Text>
                  <View style={{
      
                      flexDirection: "row",
                    }}>
                            <Text style={{fontWeight:'bold' , marginStart:10}}>Client: </Text>
                  <Text style={styles.WrapText}>{item.Nom_client} </Text>
                  <Text style={styles.WrapText}>{item.Prenom_client} </Text>
  </View>
  <View style={{flexDirection:'row' , alignSelf:'center'}}>
  <Text style={{fontWeight:'bold' , marginStart:10}}> {item.etat == "confirme"? (
                            <Text style={{color:'green'}}> Accepter</Text>
                         
                        ) : item.etat == "attente" ? (
                         
                            <Text style={{color:'blue'}}>En Attente...</Text>
                         
                        ) : (<Text style={{color:'red'}}>Refusée</Text>)}</Text>
  
                  <View style={{
      
                        flexDirection: "row",
                        
                       
                      }}>
                          <AntDesign name="eyeo" size={26} color="#666" style={{marginStart:30 }} onPress={() => {
                           navigation.navigate('onHistorique', {
                            itemId: item._id,
                            getReservations: item,
                          });
                          }} />
                      
                      </View></View>
                  </View>
                  <View>
                    
                  </View>
                </View>

                <View
                  style={{
                    height: 1,
                    backgroundColor: "#F0F0F0",
                  }}
                ></View>
              </>
            );
          }}
        />
      </View>
    </View>
        
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },

  WrapText: {
    
marginStart:2,
    marginEnd:0,
   
    fontSize:13,
    marginBottom:15
  },
  btnLogin:{
    width: 95,
    height : 35,
    borderRadius : 20,
    backgroundColor: 'red',
    justifyContent: 'center',
    marginTop : 10,
    marginStart:10
      },
      btnLoginn:{
        width: 95,
        height : 35,
        borderRadius : 20,
        backgroundColor: 'green',
        justifyContent: 'center',
        marginTop : 10,
        marginStart:10
        
          },
      TextBtn :{
        color : 'white',
        fontSize:16,
        textAlign: 'center'
      },
});