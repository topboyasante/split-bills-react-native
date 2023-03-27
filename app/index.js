import { Stack } from "expo-router"
import { SafeAreaView, View,ScrollView, Text } from "react-native"
import HeaderTitle from "../components/header/HeaderTitle"
import {colors} from '../constants/Colors'
import Welcome from "../pages/Welcome"
const Home = () =>{
    return(
        <SafeAreaView>
            <Stack.Screen options={
                {
                    headerStyle:{
                        backgroundColor:colors.baseColor,
                        headerShadowVisible:false,
                    },
                    headerTitle:()=> <HeaderTitle/>
                }
            }/>
            <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor:colors.baseColor}}>
                <View>
                    <Welcome/>
                </View>
            </ScrollView>
        </SafeAreaView>
   
    )
}

export default Home 