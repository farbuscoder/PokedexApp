import React from 'react'

import { TouchableOpacity, Text, View } from 'react-native'

import { useAppDispatch } from './../app/hooks';

import {increment, decrement, incrementByAmount} from "./../features/counter/counterSlice"

const ButtonRedux = () => {

    const dispatch = useAppDispatch();

    return ( <>
    <TouchableOpacity onPress={()=>dispatch(incrementByAmount(10))} style={{alignSelf:"center",
     backgroundColor:"#3f6d87",
      padding:10,
      margin:10,
    borderRadius:5,
  
      }}>
        <Text style={{color:"white", textAlign:"center", fontWeight:"bold", fontSize:35}}>Increment</Text>
    </TouchableOpacity> 
    <TouchableOpacity  onPress={()=>dispatch(decrement())} style={{alignSelf:"center",
     backgroundColor:"#9d7795",
      padding:10,
      margin:10,
    borderRadius:5,

      }}>
        <Text style={{color:"white", textAlign:"center", fontWeight:"bold", fontSize:35}}>Decrement</Text>
    </TouchableOpacity>
    </>
    );
}
 
export default ButtonRedux;