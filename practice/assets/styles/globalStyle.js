import { StyleSheet } from "react-native";
import UserStory from "../../components/UserStory/UserStory";

const globalStyle=StyleSheet.create({
    header:{
        marginLeft:27,
        marginRight:17,
        marginTop:30,
        flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
    },
    messageIcon:{
        padding:14,
        backgroundColor:'#F9FAFB',
        borderRadius:100
    },
    messageNumberContainer:{
        backgroundColor:'#F35BAC',
        justifyContent:'center',
        flexDirection:'row',
        height:10,
        width:10,
        borderRadius:10,
        alignItems:'center',
        position:'absolute',
        right:10,
        top:12
    },
    messageNumber:{
        color:'#FFFFFF',
        fontSize:6,
        fontWeight:'600'
    },
    userStoryContainer:{
       margin:20,
       marginHorizontal:28
    },
    userPostContainer:{
        marginHorizontal:24
    }
})

export default globalStyle;