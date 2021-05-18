import * as ActionTypes from './ActionTypes';

export const ADD_COMMENT = (dishId,rating,author,comment)=>({
    type:ActionTypes.ADD_COMMENT,
    payload:{
        dishId,
        rating,
        author,
        comment
    }
})

