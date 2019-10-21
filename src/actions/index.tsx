import { Dispatch } from 'redux';

export const select_channel = 'SELECT_CHANNEL';
export const get_news = 'GET_NEWS';
export const request_news = 'REQUEST_NEWS';
export const select_mode = 'SELECT_MODE'
const API_KEY = '';

export type data = {
    articles: Array<object>
}

export interface GetNews {
    type: typeof get_news
    json: data
}

export interface SelectChannel {
    type: typeof select_channel
    channel: string
}

export interface SelectMode {
    type: typeof select_mode
    mode: string
}

export interface RequestNews {
    type: typeof request_news
}

export type Action = GetNews & SelectChannel & RequestNews & SelectMode;

export const selectChannel = (channel: string): SelectChannel => ({
    type: select_channel,
    channel
});

export const selectMode = (mode: string): SelectMode => ({
    type: select_mode,
    mode
});

export const getNews = (json: data): GetNews => ({ type: get_news, json: json });

export const requestNews = (): RequestNews => ({ type: request_news });

export const fetchData = (channel: string, mode: string): any => (
    async (dispatch: Dispatch) => {
        dispatch(requestNews());
        dispatch(selectChannel(channel));
        dispatch(selectMode(mode));
        try {
            const respose = await fetch(`https://newsapi.org/v2/top-headlines?${mode}=${channel}&pageSize=100&apiKey=${API_KEY}`);
            const json = await respose.json();
            dispatch(getNews(json));
        }
        catch (error) {
            console.log('error occured during data fetch', error);
        }
    }
);
