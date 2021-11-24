import React from 'react'
import { View, Text,StyleSheet,ScrollView } from 'react-native'
import colour from '../../assests/colour'
const SeedetailsScreen = ({route}) => {
    console.log(route.params.data);
    return (
        <ScrollView>

        <View style ={styles.container}>
            <Text style={styles.name}>{route.params.data.name}</Text>
{route.params.data.manufacturer? <Text style={styles.manufacturer}>Manufacturer :- {route.params.data.manufacturer}</Text>:null}
{route.params.data.intro?<Text style={styles.deta}>intro :- {route.params.data.intro}</Text>:null}
{route.params.data.Diseasedesciption?<Text style={styles.deta}>{route.params.data.deta}</Text>:null}
{route.params.data.manufacturer?<Text style={styles.deta}>Diseasedesciption :- {route.params.data.Diseasedesciption}</Text>:null}
{route.params.data.symtoms?<Text style={styles.deta}>Symtoms :-{route.params.data.symtoms}</Text>:null}
{route.params.data.causes?<Text style={styles.deta}>Causes :- {route.params.data.causes}</Text>:null}
{route.params.data.diagnosis?<Text style={styles.deta}>Diagnosis :- {route.params.data.diagnosis}</Text>:null}
{route.params.data.management?<Text style={styles.deta}>Management :- {route.params.data.management}</Text>:null}
{route.params.data.Prevention?<Text style={styles.deta}>Prevention :-{route.params.data.Prevention}</Text>:null}
{route.params.data.transmission?<Text style={styles.deta}>Transmission :- {route.params.data.transmission}</Text>:null}
{route.params.data.classification?<Text style={styles.deta}>Classification :- {route.params.data.classification}</Text>:null}
{route.params.data.treatment?<Text style={styles.deta}>Treatment :-{route.params.data.treatment}</Text>:null}
{route.params.data.complications?<Text style={styles.deta}>Complications :- {route.params.data.complications}</Text>:null}
{route.params.data.symptomsvoice?<Text style={styles.deta}>Symptomsvoice :- {route.params.data.symptomsvoice}</Text>:null}
{route.params.data.myths?<Text style={styles.deta}>Myths :- {route.params.data.myths}</Text>:null}

        </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    name:{
        fontSize:24,
        fontWeight:"bold",
        fontWeight:"700",
        color:colour.red,
        marginLeft:10,
    },
    manufacturer:{
        fontSize:20,
        fontWeight:"bold",
        fontWeight:"700",
        color:colour.tomato,
        marginLeft:10

    },
    deta:{
        fontSize:16,
        fontWeight:"900",
        fontWeight:"700",
        margin:10,
        color:colour.white,

    },
    container:{
        backgroundColor:colour.productBackground
    }
})
export default SeedetailsScreen