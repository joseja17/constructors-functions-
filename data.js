import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
// import {getText} from '../../ducks/reducer'
// import {connect} from 'react-redux'

class Map extends Component {
// constructor(props){
//   super(props)
//   this.state = {
//     mapInformation: ''
//   }
// }

componentDidMount(){
axios.get('/api/comments').then(resp=>{
  console.log(resp)
  // this.setState({
  //   mapInformation: data
  // })

})
  
}
  render() {
    // let random = this.state.mapInformation.map((info, i)=>{
    //   return <div key={i} >{info.postTitle}</div>
    // })
    return (
      <div>
        <h1>Map Page</h1>
        {/* <button onClick={()=>this.getInfo()}>Click Me</button> */}

        {/* {random} */}
   
      </div>
    );
  }
}

export default Map;
// function mapStateToProps(state){
//   const {text} = state;
//   return{
//     text : text
//   }
// }
// export default connect(mapStateToProps, {getText})(Map);