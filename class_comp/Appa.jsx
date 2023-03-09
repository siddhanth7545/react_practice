// import React, {Component} from "react";
// import Amma from "./Amma";

// export default class Appa extends Component{
//     render(){
//         return(
//             <>
//             <Amma />
//             <h1>Sidd Appa</h1>
//             <h1>Name: Baswaraj Bhunna</h1>
//             </>
//         )
//     }
// }

import React, {Component} from "react";
import Amma from "./Amma";

export default class Appa extends Component{
    render(){
        return(
            <>
            <Amma event="holi" username="pooja" />
            </>
        )
    }
}