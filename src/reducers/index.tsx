import {select_channel,get_news, request_news} from '../actions';
import { Action } from '../actions';

export interface State {
    channel: string
    loading: boolean
    json: Array<any>
}

const initialState: State = {
    channel: 'espn',
    loading: false,
    json: []
}

const reducer = (state = initialState, action: Action): State => {
    switch(action.type) {
        case select_channel:
            return {...state, channel: action.channel};
        case get_news: 
            return {...state, json: action.json.articles, loading: false};
        case request_news: 
            return {...state, loading: true}
        default:
            return state;        
    }
};

export default reducer;