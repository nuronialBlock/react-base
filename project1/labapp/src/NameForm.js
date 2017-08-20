import React, { Component } from 'react';

export default class NameAgeForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isGoing: false,
			name: '',
			age: 0
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;

		this.setState({
			[name] : value
		});
	}

	handleSubmit(event) {
		alert('Changes submitted for: ' + this.state.name);
		event.preventDefault();
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					isGoing:
						<input
							name="isGoing"
							type="checkbox"
							checked={this.state.isGoing}
							onChange={this.handleChange} />
				</label>
				<label>
					Name:
						<input
							type="text"
							name="name"
							value={this.state.name}
							onChange={this.handleChange} />
				</label>
				<label>
					Age:
						<input
							type="number"
							name="age"
							value={this.state.age}
							onChange={this.handleChange}/>
				</label>
				<input type="submit" value="submit"/>
			</form>
		);
	}
}
