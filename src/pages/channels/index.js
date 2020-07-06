import React from 'react';
import { Query } from "react-apollo";

import DropDownMenu from '../../components/dropdown';

import config from '../../config';
import Icon from '../../components/icon';
import Spinner from '../../components/spinner';
import ChannelBox from '../../components/channelbox';

import {
  getHotChannels,
  getChannels,
  getCountries
} from '../../graphql/query';
import './index.scss';

class Channels extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			continent: [
				{id: "2", name: 'General Interest'}, 
				{id: "3", name: 'North America'}, 
				{id: "4", name: 'Europe'}, 
				{id: "5", name: 'Asia'},
				{id: "6", name: 'Africa'},
				{id: "7", name: 'Latin America'}],
			countries: [
				{id: "2", name: 'General Interest'}, 
				{id: "3", name: 'North America'}, 
				{id: "4", name: 'Europe'}]
		}
	}
    
	renderHotChannels() {
		return(
			<Query query={getHotChannels}>
				{({ loading, error, data }) => {
				if (loading) return (<Spinner />)
				if (error) return null

				if (data) {
					return data.getHotChannels.map((channel) => (
						<ChannelBox key={channel.id}  title={channel.name} image={channel.logo} size="small"/>
					))
				}
			}}
			</Query>
		)
	}

	renderChannels() {
		return (
			<Query query={getChannels}>
				{({ loading, error, data }) => {
				if (loading) return (<Spinner />)
				if (error) return null

				if (data) {
					return data.getChannels.map((channel) => (
						<ChannelBox key={channel.id}  title={channel.name} image={channel.logo}/>
					))
				}
			}}
			</Query>
		)
	}

	renderByContinent = () => {
		console.log("click");
	}

	render() {
		return (
			<div className="channel page">
				<div className="left-content">
					<div className="sub-header">
						<Icon name="fire" size={24} className="icon-primary" />
						<h5 className="sub-header-title">Hot Channels</h5>
					</div>
					<div className="hot-channel-list">
						{ this.renderHotChannels() }
					</div>
				</div>
				<div className="main-content">
					<div className="sub-header">
						<div className="channel-filter">
							<div className="channel-filter-column">
								<Icon name="globe" size={24} className="icon-gray" />
								<DropDownMenu
									data={ this.state.continent }
									name="continent"
									promptTitle="Search By Continent"
									changeEvent={() => this.renderByContinent} 
									className="select-menu">
								</DropDownMenu>
								<DropDownMenu
									data={ this.state.countries }
									name="country"
									promptTitle="Search Country"
									changeEvent={() => this.renderByContinent} 
									className="select-menu">
								</DropDownMenu>
							</div>
							<div className="channel-filter-column second">
								{/* <div className="select-menu first">               
									<Icon name="view_grid" size={24} className="icon-gray" />
									<span className="search-title">Sort by Category</span>
								</div> */}
								<div className="select-menu">
									<Icon name="search" size={24} className="icon-gray" />
									<input type="text" className="search-title channel" placeholder="Search Channels..."/>
								</div>
							</div>
						</div>
					</div>
					<div className="channel-list">
						{ this.renderChannels() }
					</div>
				</div>
				<div className="right-content">
				</div>
			</div>
		)
	}
}

export default Channels;