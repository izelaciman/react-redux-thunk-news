import React from 'react';
import { connect } from 'react-redux';
import { selectChannel, fetchData } from '../../actions';
import { State } from '../../reducers';
import { Dispatch } from 'redux';

interface OwnProps {
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

const Channel: React.FC<Props> = (props: Props) => (
        <div  className="col-lg-2 col-md-2 col-xs-4">
            <div className={`button ${props.channelString === props.active ? "active" : ""}`} onClick={props.onClick} >
            <p>{props.channelName}</p>
            </div>
        </div>
);

const mapStateToProps = (state: State ,ownProps: OwnProps): StateProps => ({
        active: state.channel
})

const mapDispatchToProps = (dispatch: Dispatch, ownProps: OwnProps): DispatchProps =>({
        onSelect: () => {
                dispatch(selectChannel(ownProps.channelName))  
        },
        onClick: () => dispatch(fetchData(ownProps.channelString, ownProps.mode))
}); 

export default connect(mapStateToProps, mapDispatchToProps)(Channel);