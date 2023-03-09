// import React,{Component} from "react";


// export default class Amma extends Component{
//     render(){
//         return(
//             <>
//             <h1>Sidd Amma</h1>
//             <h1>Name:jyothi</h1>
//             </>
//         )
//     }
// }

import React,{Component} from "react";

export default class Amma extends Component{
    render(){
        console.log(this);
        return(
            <>
            <h1 >{this.props.event} </h1>
            <h1>{this.props.username}</h1>
            
            </>
        )
    }
}
