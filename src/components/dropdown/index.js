import React from 'react';

import Icon from '../icon';
import './index.scss';

class DropDownMenu extends React.Component{

	constructor(props){
		super(props)
		this.state = {
			promptTitle: props.promptTitle,
			name: props.name,
			changeEvent: (e) => {
				console.log(e.target.value)
				// console.log(this.state)
				props.changeEvent()
			}
		}
	}

	
	getSelectBoxValue = () => {
		return this.props.data.map((item) => (
			<div className="select-box-value" key={item.id}>
				<input className="select-box-input" type="radio" id={item.id + this.props.promptTitle} value={item.id} name={this.props.name} onChange={this.state.changeEvent} />
				<p className="select-box-input-text">{item.name}</p>
			</div>
		))
	}

	getSelectBoxList = () => {
		return this.props.data.map((item) => (
			<li key={item.id}>
				<label className="select-box-option" htmlFor={item.id + this.props.promptTitle} aria-hidden="aria-hidden">{item.name}</label>
			</li>
		))
	}
	
	render() {
		return (
			<div className="select-box">
				<div className="select-box-current" tabIndex="1">
					{this.getSelectBoxValue()}
					<div className="select-box-value">
						<input className="select-box-input" type="radio" id="111"  value="111" name={this.state.name} defaultChecked />
						<p className="select-box-input-text">{this.state.promptTitle}</p>
					</div>
					<Icon name="arrow_down" size={24} className="icon-gray select-box-icon" style={{fill: '#BDBDBD'}} aria-hidden="true"/>
				</div>
				<ul className="select-box-list">
					{this.getSelectBoxList()}
				</ul>
			</div>
		)
	}
}

export default DropDownMenu;