import React from 'react';
import {  TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';


function ElementInHomeView(props){
    const musicData = props.musicData;
    return (
        <TouchableOpacity style={ styles.elementoParaScrolling } onPress={()=>{props.action(musicData)} } >
            <View style={{ flex: 2, width: '80%', backgroundColor: 'yellow',}} ></View>
            <View style={{ flex: 1, justifyContent: 'center', width: '100%', backgroundColor: 'rgba(0,0,0,0.6)', }} ><Text style={styles.elementText} >{musicData.songTitle}</Text></View>
        </TouchableOpacity>
    );
}

export default function Home(props){

    const data = [
        { id: 0, songTitle: "Todo de ti", author: "Rauw Alejandro", imageURL: "https://i.musicaimg.com/letras/max/2549980.jpg", },
        { id: 1, songTitle: "Te mudaste", author: "Bad Bunny", imageURL: "https://i1.sndcdn.com/artworks-9lrTpQQED7MMgp24-xNLQyQ-t500x500.jpg", },
        { id: 2, songTitle: "Ademas de mi", author: "Rusherking", imageURL: "https://cdns-images.dzcdn.net/images/cover/374d629e56a433f5f6d1595232e72a8f/264x264.jpg", },
        { id: 3, songTitle: "Te Mentiria", author: "Luck Ra", imageURL: "https://cdns-images.dzcdn.net/images/cover/0c6fba956af345b03a63f6e108f2f945/500x500.jpg", },
        { id: 4, songTitle: "La noche de anoche", author: "Bad Bunny", imageURL: "https://i1.sndcdn.com/artworks-rN5yiCY7NQL2UsIf-4wMS9Q-t500x500.jpg", },
        { id: 5, songTitle: "Opa", author: "Dillom", imageURL: "https://images.genius.com/97236cd2c211800c9e78b1ec6e97c380.300x300x1.png", },
        { id: 6, songTitle: "Tinty Nasty", author: "L-Gante, Dillom", imageURL: "https://images.genius.com/b6b13095c75a310f395b3cef28bd7cdd.1000x1000x1.png", },
        { id: 7, songTitle: "Yonaguni", author: "Bad Bunny", imageURL: "https://laverdadnoticias.com/__export/1622762425921/sites/laverdad/img/2021/06/03/yonaguni_bad_bunny.jpg_410945991.jpg", },
    ]

    return (
    <View>
        <View style={{  flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }} >
            <Text style={{ flex: 1,  color: 'rgb(220,220,220)', fontSize: 40, fontWeight: 'bold',  }} >Home</Text>
            <TouchableOpacity onPress={ ()=>{console.log("History"); props.changeView("history") } } ><FontAwesome5 style={styles.playControlBtnIcon} name="history" /></TouchableOpacity>
            <TouchableOpacity onPress={ ()=>{console.log("Config"); props.changeView("configuration") } } ><FontAwesome5 style={ [styles.playControlBtnIcon, {marginRight: 15 }] } name="cog" /></TouchableOpacity>
        </View>
        <View style={styles.homeView} >
            {data.map( (elem)=><ElementInHomeView key={elem.id} action={props.action} musicData={elem} /> )}
        </View>
    </View>);
}


const styles = StyleSheet.create({
    homeView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'center',
        flexWrap: 'wrap',
    },
    playControlBtnIcon: {
        color: 'rgb(220,220,220)',
        fontSize: 25,
        marginRight: 10,
        paddingHorizontal: 5,
      },
    elementoParaScrolling:{
        backgroundColor: 'rgb(200,0,0)',
        width: 140,
        height: 140,
        // borderRadius: 10,
        margin: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    elementText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
    },
});