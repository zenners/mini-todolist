var React = require('react');

var ColorBox = React.createClass({

	pickColor: function(e){
		this.props.selectColor(e.target.getAttribute('data-value'));
	},

	render: function() {
		var colorList = this.props.colors.map(function(color,index){
			var spanStyle={
				backgroundColor: color,
				width: '20%',
				height: '50px',
				display: 'inline-block',
				cursor: 'pointer',
			};
		return (
			<span 
				onClick={this.pickColor} 
				data-value={color} style={spanStyle} 
				key={index}> 
			</span>
				
			)
	}.bind(this));
		return (
			<div>
				{colorList}
			</div>

		);
	}

});

module.exports = ColorBox;