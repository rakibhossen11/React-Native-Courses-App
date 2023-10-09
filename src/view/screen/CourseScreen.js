import React from "react";
import { Image, ImageBackground, SafeAreaView, Text, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

const CoursesScreen = ({route}) =>{
    // const {data} = route.params;
    return(
        <SafeAreaView>
            <ImageBackground>
                <Image 
                resizeMode="contain"
                style={{
                    width: 100,
                    marginBottom: 10,
                }}
                source={require('../../../assets/bestseller.png')}
                />
                <Text style={{
                    fontSize: 25,
                    fontWeight: "bold",
                    marginTop: -35,
                }}>Design Thinking</Text>
                <View>
                    <View>
                        <Icon
                        name="people"
                        size={25}
                        style={{color: '#61688B', marginRight: 5}}
                        />
                    </View>
                    <View></View>
                </View>
                <Text style={{fontSize: 25, fontWeight: "bold", top: -10}}>{'$' + "Price"}</Text>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default CoursesScreen;