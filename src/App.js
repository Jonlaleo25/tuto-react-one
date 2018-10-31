import React  from  'react'

class App extends React.Component{
  render(){
    
   let txt = this.props.txt;

    return <h1>{ txt }</h1>
  }
}

// class App extends Component{
//   render(){
//     return React.createElement('h1', null,'HEY JON')
//   }
// }

// class App extends Component{
//   render (){
//     return(
//       <div>
//         <h3>
          
//            HELLO JONはうまくいきます...ちょうど彼らは彼らの材料で抑えられているので、
//         </h3>

//       </div>
//     )
//   }
// }


// const App = () => <h1>HEY JON</h1>

export default App