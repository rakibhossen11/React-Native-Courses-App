import React from "react";
import { Image, ImageBackground, SafeAreaView, Text, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

const CoursesScreen = ({route}) =>{
    const {data} = route.params;
    const BottomNavigationBar = () =>{
        return(
            <View style={{
                height: 80,
                bottom: 0,
                zIndex: 100,
                flexDirection: "row",
                alignItems: "center",
                paddingHorizontal: 20,
            }}>
                <View style={{
                    height: 60,
                    width: 60,
                    backgroundColor: '#FFEDEE',
                    borderRadius: 30,
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: 10,
                }}>
                    <Icon name="local-mall" style={{color: '#FF6670', fontSize: 25}} />
                </View>
                <View style={{
                    height: 60,
                    backgroundColor: '#6E8AFA',
                    flex: 1,
                    borderRadius: 30,
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                <Text style={{fontSize: 15, color: '#fff', fontWeight: 'bold'}}>
                    Buy Now
                </Text>
                </View>
            </View>
        )
    }
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
            <BottomNavigationBar />
        </SafeAreaView>
    )
}

export default CoursesScreen;