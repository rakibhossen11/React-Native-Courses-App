import React from "react";
import { FlatList, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialIcons";

const HomeScreen = ({navigation}) => {
    const CouseCard = ({course}) =>{
        return(
            <TouchableOpacity>
                <ImageBackground 
                source={course.image}>
                    <Text>{course.name}</Text>
                    <Text>{course.totalCourse + "Courses"}</Text>
                </ImageBackground>
            </TouchableOpacity>
        )
    }
  return (
    <SafeAreaView>
      <View 
    //   style={{
    //     backgroundColor: '#fff',
    //     flex: 1,
    //     paddingHorizontal: 20,
    //   }}
      >
        <Text style={{ fontSize: 28, fontWeight: "bold" }}>Hey Alex,</Text>
        <Text style={{ fontSize: 22, color: "#61688B", marginTop: 15 }}>
          Find a course you want to learn
        </Text>
        <View
          style={{
            height: 60,
            marginTop: 35,
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 15,
            backgroundColor: "#F5F5F7",
            borderRadius: 30,
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Icon size={30} name="search" />
          <TextInput
            style={{ fontSize: 18, marginLeft: 5 }}
            placeholder="Search for anything"
          />
        </View>
        <View
          style={{
            paddingVertical: 25,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Categories</Text>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "#6E8AFA" }}>
            See All
          </Text>
        </View>
      </View>
      <View style={{flex: 1}}>
        <FlatList 
        renderItem={({item}) => <CouseCard course={item} /> }
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
