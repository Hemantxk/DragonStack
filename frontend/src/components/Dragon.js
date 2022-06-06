import React, {Component} from 'react';
import { connect } from 'react-redux';
import DragonAvatar from './DragonAvatar';
import { Button } from 'react-bootstrap';
import { fetchDragon } from '../actions/dragon';
import fetchStates from '../reducers/fetchStates';

class Dragon extends Component{
    render(){
        const { generationId, dragonId, traits } = this.props;

        if(this.props.status === fetchStates.fetching){
            return <div>...</div>;
        }

        if(this.props.status === fetchStates.error){
            return <div>{ this.props.message }</div>;
        }

        return (
        <div>
            <Button onClick={ this.props.fetchDragon }>New Dragon</Button>
            <DragonAvatar dragon = { this.props.dragon }/>
        </div>);
    }
}

export default connect(
    ({ dragon }) => ({ dragon }), { fetchDragon })(Dragon);