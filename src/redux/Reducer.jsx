import {DishesReducer} from './reducers/DishesReducer'
import {LeadersReducer} from './reducers/LeadersReducer'
import {CommentsReducer} from './reducers/CommentReducer'
import {PromotionsReducer} from './reducers/PromotionsReducer'

import {combineReducers} from 'redux';

export const Reducer = combineReducers({
    dishes: DishesReducer,
    comments:CommentsReducer,
    promotions:PromotionsReducer,
    leaders:LeadersReducer
})