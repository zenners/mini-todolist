var React = require('react');
var ColorBox = require('./ColorBox');

var colors = ['#FFACEC', '#ECF0F1', '#3498DB', '#E7D171', '#7AE77C'];


var AddList = React.createClass({

	getInitialState: function() {
		return {
			listName:'',
			backgroundColor:'' 
		};
	},

	handleChange: function(e){
		this.setState({
			listName: e.target.value
		});
		
	},

	handleColorSelect: function(color){
		this.setState({
			backgroundColor: color
		});

	},

	handleSubmit: function(){
		
		this.props.add(this.state);
		this.setState({
			listName:'',
			backgroundColor:''
		})

	},

	render: function() {
		var selectedStyle={
			backgroundColor: this.state.backgroundColor,
			width:'20px',
			height: '20px',
			display: 'inline-block',
			verticalAlign: 'top'
		};
		return (
			<div>

				<h3 className="text-center"> Create New List </h3>
				<div className="col-sm-10 col-sm-offset-1">
					<span> List Name </span>
					<input placeholder="List Name" className="form-control" type="text" value={this.state.listName} onChange={this.handleChange} />
					<br/>
					<span> </span>
					<h5> List Color: <div style={selectedStyle}>  </div> </h5>
					
					<ColorBox colors={colors} selectColor={this.handleColorSelect} />
					<br/>
					<button className="btn btn-primary" onClick={this.handleSubmit}> Submit </button>
				</div>
			</div>
		);
	}

});

module.exports = AddList;