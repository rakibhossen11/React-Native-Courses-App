import React from "react";
import { Dimensions, FlatList, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialIcons";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const courseContent = [
  {
    time: '5:35 mins',
    title: 'Welcome to the Course',
  },
  {time: '7:35 mins', title: 'Design Thinking - Intro'},
  {time: '10:35 mins', title: 'Design Thinking Process'},
  {time: '5:35 mins', title: 'Customer Perspective'},
];

const courses = [
  {
    name: 'UX Design',
    totalCourse: '25',
    image: require('../../../assets/image1.png'),
    price: '50',
    star: '4.3',
    students: '10',
    courseContent,
  },
  {
    name: 'Marketing',
    totalCourse: '20',
    image: require('../../../assets/image2.png'),
    price: '50',
    star: '4.1',
    students: '55',
    courseContent,
  },
  {
    name: 'Photography',
    totalCourse: '10',
    image: require('../../../assets/image3.png'),
    price: '50',
    star: '4.3',
    students: '10',
    courseContent,
  },
  {
    name: 'Business Photography',
    totalCourse: '7',
    image: require('../../../assets/image4.png'),
    price: '50',
    star: '4.2',
    students: '35',
    courseContent,
  },
];

const HomeScreen = ({navigation}) => {
    const CourseCard = ({course}) =>{
        return(
            <TouchableOpacity 
            activeOpacity={0.8}
            onPress={() => navigation.navigate('CourseScreen', {data: course})}
            >
                <ImageBackground 
                source={course.image}
                style={{
                    marginVertical: 10,
                    marginHorizontal: 5,
                    borderRadius: 50,
                    width: windowWidth / 2 - 30,
                    height: windowHeight / 3,
                    paddingTop: 25,
                    paddingLeft: 20,
                    borderRadius: 15,
                    overflow: 'hidden',
                  }}>
                    <Text style={{
              fontSize: 20,
              fontWeight: 'bold',
              paddingBottom: 5,
            }}>{course.name}</Text>
                    <Text style={{color: '#8F95B2', fontWeight: '600'}}>{course.totalCourse + "Courses"}</Text>
                </ImageBackground>
            </TouchableOpacity>
        )
    }
  return (
    <SafeAreaView 
    style={{
      backgroundColor: '#fff',
      flex: 1,
      paddingHorizontal: 20,
    }}>
      <View 
      style={{
        backgroundColor: '#fff',
        flex: 1,
        paddingHorizontal: 20,
      }}
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
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={courses}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => <CourseCard course={item} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
