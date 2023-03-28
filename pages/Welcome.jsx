import React from 'react'
import { Image, Text, View } from 'react-native'
import { colors } from '../constants/Colors'
import MainImg from '../assets/MainImg.png'
import { textStyles } from '../constants/TextStyles'
import Button from '../components/Button'

function Welcome() {
  return (
    <View style={
      {
        backgroundColor:colors.baseColor,
        flex:1,
        padding:15
      }
    }>
      <Image source={MainImg} style={{
        height:480
      }}/>
      <View style={{
        flex:1,
      }}>
        <Text style={{
          fontSize:textStyles.headertext.fontSize,
          fontWeight:'bold',
        }}>
          Split bills, not friendships
        </Text>
        <Text style={{
          fontSize:textStyles.subtext.fontSize,
          marginVertical:10
        }}>
          We help groups of people split expenses and 
          bills when they are sharing costs for a particular event or activity
        </Text>
        <Button text={`Sign Up`}/>
        <Text style={{
          textAlign:'center',
          fontSize:textStyles.subtext.fontSize,
        }}>Already Have An Account? <Text style={{
              fontWeight:'bold'
          }}>
            Sign In</Text>
        </Text>
      </View>

    </View>
  )
}

export default Welcome