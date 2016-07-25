'use strict'
import React,{Component,PropTypes} from 'react'
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native'

import Util from './Util';
/**
 带标记的view
**/
export default class BadgeView extends Component{
  //定义相关属性类型
  static propTypes = {
   badgeStyle:View.propTypes.style,
   title:PropTypes.string.isRequired,
   padding:PropTypes.number,
   renderImage:PropTypes.func,
   badgeText:PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }

  constructor(){
    super();
  }

  //render外部传递的组件
  renderImage(props){
    if(this.props.renderImage){
      //这里将引用外部renderImage方法
      return React.cloneElement(this.props.renderImage(),props);
    }else{
      return null;
    }
  }

   render(){
     let{image,title,renderImage,padding,badgeText}=this.props;
     return(
       <View style={[{padding:10,alignItems:'center',justifyContent:'center'},this.props.badgeStyle]}>
       <View>
       {this.renderImage(this.props)}
       {
       badgeText?
       <View style={styles.badgeIcon}><Text style={{color:'red',fontSize:12}}>{badgeText}</Text></View>
       :null
       }
       </View>
       <Text style={{marginTop:padding}}>{title}</Text>
       </View>
     );
   }
}

const styles=StyleSheet.create({
  badgeIcon:{
    width:18,
    height:18,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
    borderColor:'red',
    borderRadius:50,
    borderWidth:Util.pixel*3,
    position:'absolute',
    right:-8,
    top:-8,
  },


});
