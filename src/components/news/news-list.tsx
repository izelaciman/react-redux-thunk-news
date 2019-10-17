import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchData} from '../../actions';
import { State } from '../../reducers';
import NewsItem from './news-item';
import {Dispatch} from 'redux';
import { OwnProps } from '../channels/channel';

interface StateProps{
    channel: string
    data: Array<any>
    loading: boolean
}
interface DispatchProps{
    getPosts: Function
}

type Props = StateProps & DispatchProps;

class NewsList extends Component<any, Props> {
    componentDidMount() {
        this.props.getPosts(this.props.channel);
    }
    render () {
        let topNews;

        if (this.props.data) {
            topNews =this.props.data.map((article:any, index: number) =>
                (
                    <div key={`${index}`} className="row">
                        <NewsItem article={this.props.data[index]} />
                    </div>
                )
            )
        }
        if (this.props.loading) {
            topNews = <h3 className="loading-indicator">Loading ...</h3>
        }     
        return (
            <div>
                {topNews}
            </div>
        )
    }
}

function mapDispatchToProps(dispatch: Dispatch): object {
    return {
        getPosts: (channel: string) => dispatch(fetchData(channel))
    }
} 

function mapStateToProps(state: State): StateProps {
    return {
        channel: state.channel,
        data: state.json,
        loading: state.loading
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsList);