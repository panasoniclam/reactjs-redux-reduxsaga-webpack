import React,{Component} from 'react'
import  * as ActionDemo from './../actions/index'
import { connect } from 'react-redux';
 
class Test extends Component{
    constructor(Props){
        super(Props);
        this.state ={
            test :'anh lam'
        }
    }
    onClick = (e)=>{
        this.props.callActionDemo()
    }
    render(){
            
        return(
            <div>
                <p>TESt</p>
                <button onClick={this.onClick}>click</button>
                 
            </div>
        )
    }
}
 
const mapStateToProps = (state)=>{
    console.log("prop changes",state.test)
    return{
        data:state.test
    }
};

const mapDispatchToProps = (dispatch,props)=>{
    return{
        callActionDemo:()=>{
            dispatch(ActionDemo.actionDemo())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Test)