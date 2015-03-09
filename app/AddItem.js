var React = require('react');

var AddItem = React.createClass({

	getInitialState: function() {
		return {
			newItem: ''
		};
	},

	handleChange: function(e){
		this.setState({
			newItem: e.target.value
		});
	},

	handleSubmit: function(e){
		if (e.keyCode === 13) {
			this.props.add(this.state.newItem)
			this.setState({
				newItem: ''
			});
		}
	},

	render: function() {
		return (
			<div>
				<input type="text" 
					className='form-control'
					placeholder="New Item"
					onChange={this.handleChange} 
					onKeyDown={this.handleSubmit} 
					value={this.state.newItem} />
			</div>
		);
	}

});

module.exports = AddItem;