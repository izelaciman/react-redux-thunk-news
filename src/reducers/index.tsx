import {select_channel,get_news, request_news} from '../actions';
import { Action } from '../actions';

export interface State {
    channel: string
    loading: boolean
    json: Array<object>
}

const reducer = (state: State, action: Action): State => {
    switch(action.type) {
        case select_channel:
            return {...state, channel: action.channel};
        case get_news: 
            return {...state, json: action.json.articles, loading: false};
        case request_news: 
            return {...state, loading: true}             
    }
};

export default reducer;