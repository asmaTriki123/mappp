
import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView, SafeAreaView, Image, TextInput, TouchableOpacity  , Dimensions} from 'react-native';
import { DataTable } from 'react-native-paper';

import Ionicons from 'react-native-vector-icons/Ionicons';

const { width: WIDTH } = Dimensions.get('window')
import Icon from 'react-native-vector-icons/Ionicons'
export default function Reservationclient({ route, navigation }) {
    const { itemId, getReservations} = route.params;
    const[data , setData]=useState('')
    useEffect(() => {
       /* console.warn(itemId, getReservations.marque_vehicule)*/
        //console.warn(getReservations.Station)
    }, [])

    const[reservation , setReservation]=useState('')
    useEffect(async () => {
      
        if (getReservations) {
            setReservation(getReservations)
        }
    }, []);


   /* const getS = async() => {

      
      
          fetch("http://192.168.43.230:3001/utilisateur/getStationbyId/"+getReservations.Station
      )
          .then((res) => res.json())
          .then((resJSON) => {
            console.warn(resJSON)
            
            setData(resJSON);
          
          })
          .catch((err) => console.warn(err));
      
        }*/
        useEffect(() => {
            fetch("http://192.168.1.15:3001/utilisateur/getStationbyId/"+getReservations.Station)
              .then((res) => res.json())
              .then((resJSON) => {
                //console.warn(resJSON)
                setData(resJSON);

              })
              .catch((err) => console.error(err));
          }, []);
      


    
    return (

        <SafeAreaView >
            <ScrollView >
              {/*  <Text style={{color:'#4A919E' , fontWeight:'bold' , fontSize:18 , marginStart:20 ,marginTop:30 }}>Client</Text>
                
            <View style={styles.container}>
    <DataTable>
    <DataTable.Header>
    <DataTable.Cell style={{fontSize:20}}>Nom client</DataTable.Cell>
        <DataTable.Title style={{width:WIDTH/2 , marginLeft:40}}>{reservation.Nom_client}</DataTable.Title>
  
        
         
         </DataTable.Header>

         <DataTable.Header>
    <DataTable.Cell style={{fontSize:20}}>Prenom client</DataTable.Cell>
        <DataTable.Title style={{width:WIDTH/2 , marginLeft:40}}>{reservation.Prenom_client}</DataTable.Title>
  
        
         
         </DataTable.Header>

      <DataTable.Row>
        <DataTable.Cell>T??l??phone</DataTable.Cell>
        <DataTable.Cell>{reservation.Num_Client}</DataTable.Cell>
       
    </DataTable.Row>



        


    </DataTable>
    </View>*/}
  <Text style={{color:'#4A919E' , fontWeight:'bold' , fontSize:20 , marginStart:20 ,marginTop:30 , fontFamily: 'sans-serif' , marginBottom:20}}>R??servation</Text>
                
                <View style={styles.container}>
        <DataTable>
        
    
    
            
    <DataTable.Header>
        <DataTable.Cell style={{fontSize:20}}>
            <Ionicons
              name="car"
              size={18}
              color="#666"
              style={{marginRight: 10}}
            />    MarqueV</DataTable.Cell>
            <DataTable.Title style={{width:WIDTH/2 , marginLeft:40}}>{reservation.marque_vehicule}</DataTable.Title>
      
            
             
             </DataTable.Header>
             <DataTable.Header>
        <DataTable.Cell style={{fontSize:20}}><Ionicons
              name="car"
              size={18}
              color="#666"
              style={{marginRight: 10}}
            />    NatureV</DataTable.Cell>
            <DataTable.Title style={{width:WIDTH/2 , marginLeft:40}}>{reservation.Nature_vehicule}</DataTable.Title>
      
            
             
             </DataTable.Header>
          <DataTable.Header>
            <DataTable.Cell><Ionicons
              name="calendar"
              size={18}
              color="#666"
              style={{marginRight: 10}}
            />      Date</DataTable.Cell>
            <DataTable.Title style={{width:WIDTH/2 , marginLeft:40}}>{reservation.date_heure}</DataTable.Title>
          
          </DataTable.Header>
          
    
        </DataTable>
      </View>
      <Text style={{color:'#4A919E' , fontWeight:'bold' , fontSize:20, marginStart:20 ,marginTop:40 , fontFamily: 'sans-serif' ,marginBottom:20}}>Station Lavage</Text>
   
      <View style={styles.container}>
        <DataTable style={{marginBottom:20}}>
        
    
    
            
    
          <DataTable.Header>
            <DataTable.Cell><Ionicons
              name="person"
              size={18}
              color="#666"
              style={{marginRight: 10}}
            />  Nom Station</DataTable.Cell>
            <DataTable.Title style={{width:WIDTH/2 , marginLeft:40}}>{data.Nom_station}</DataTable.Title>
          
          </DataTable.Header>
          <DataTable.Header>
            <DataTable.Cell><Ionicons
              name="home"
              size={18}
              color="#666"
              style={{marginRight: 10}}
            />  Adresse</DataTable.Cell>
            <DataTable.Title style={{width:WIDTH/2 , marginLeft:40}}>{data.adresse}</DataTable.Title>
          
          </DataTable.Header>
          <DataTable.Header>
            <DataTable.Cell><Ionicons
              name="home"
              size={20}
              color="#666"
              style={{marginRight: 10}}
            />  Ville</DataTable.Cell>
            <DataTable.Title style={{width:WIDTH/2 , marginLeft:40 }}>{data.ville}</DataTable.Title>
          
          </DataTable.Header>
          <DataTable.Header>
            <DataTable.Cell><Ionicons
              name="mail"
              size={18}
              color="#666"
              style={{marginRight: 10}}
            />    Email</DataTable.Cell>
            <DataTable.Title style={{width:WIDTH/2 , marginLeft:40 }}>{data.email}</DataTable.Title>
          
          </DataTable.Header>
    
        </DataTable>
      </View>
               
                

                
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
      
      },
   
   f:{
      fontStyle:'italic',
      color:'red'
   }
  
   
});