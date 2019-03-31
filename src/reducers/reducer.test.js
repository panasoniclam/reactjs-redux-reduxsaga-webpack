import * as TYPE from './../constants/index'
const initible = {
    test:'state ban dau'
}
export default (state=initible,action)=>{
    switch(action.type){
        case TYPE.DEMO:
            return{
                ...state,
                test:{
                    lam:'  da thay doi'
                }

            }
        default: break

    }
    return state
}