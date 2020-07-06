/*@flow */
import React from 'react';

import config from '../../config'
import './index.scss'

class ChannelBox extends React.Component {

	constructor(props){
		super(props)
		this.state = ({
			title: this.props.title,
			imageURL: this.props.image,
			status: this.props.status,
			size: this.props.size
		})
	}

	render() {
		// size='small' //
		return (
			<div className={`channel-box ${this.props.size || ''}`}>
				<img className="channel-box-image" src= { config.server_root_url + '/public' + this.state.imageURL } />
				<span className="channel-box-title">{this.state.title}</span>
			</div>
		)
	}
}

export default ChannelBox;