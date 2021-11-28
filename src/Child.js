import React,{Component} from 'react';

// class Child extends Component {
//     render(){
//     return(
//         <div> hello from child Component </div>
//     );
// } 
// }

// const Child = (props) =>{
// return(
//     <div>{props.test}</div>
// )
// }

class Child extends Component {
    render() {
        const {items} = this.props;
        const theitems = items.map((item)=>{
            return(
                <div>
                <p>userId :{item.id}</p>
                <p>userName :{item.name}</p>
                <p>userAge :{item.age}</p>
                </div>
            )
        })

        return(
            <div>{theitems}</div>
        )
    } 
}
export default Child ;
