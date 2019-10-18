import React from 'react';
import {connect} from 'react-redux';
import { selectChannel, fetchData } from '../../actions';
import { State } from '../../reducers';
import {Dispatch} from 'redux';

export interface OwnProps {
    mode: string
    channelName: string,
    channelString: string
}
     
interface DispatchProps {
    onSelect: () => void
    onClick: () => void
}

interface StateProps {
    active: string
}

type Props = DispatchProps & OwnProps & StateProps;

const Channel: React.FC<Props> = (props: Props) =>{
        return (
            <div  className="col-lg-2 col-md-4 col-sm-6">
                <div className="channel-button" onClick={props.onClick}
                    style={{ backgroundColor: props.active ===props.channelString ? 'orange' : '' }}
                >
                <p>{props.channelName}</p>
                </div>
            </div>
        )
}

function mapStateToProps(state: State ,ownProps: OwnProps): StateProps {
    return {
        active: state.channel
    }
}


function mapDispatchToProps(dispatch: Dispatch, ownProps: OwnProps): DispatchProps {
    return {
        onSelect: () => {
                dispatch(selectChannel(ownProps.channelName))  
        },
        onClick: () => dispatch(fetchData(ownProps.channelString, ownProps.mode))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Channel);