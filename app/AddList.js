var React = require('react');

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

	handleColorSelect: function(e){
		this.setState({
			backgroundColor: e.target.getAttribute('data-value')
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


		var colorList = colors.map(function(color,index){
			var spanStyle={
				backgroundColor: color,
				width: '20%',
				height: '50px',
				display: 'inline-block',
				cursor: 'pointer',
				
			};
			return(
				
					<span 
						onClick={this.handleColorSelect} 
						data-value={color} style={spanStyle} 
						key={index}> 
						
						

					</span>
				
			)
		}.bind(this));
		
		var selectedStyle={
			backgroundColor: this.state.backgroundColor,
			width:'35px',
			height: '30px',
			display: 'inline-block',
			verticalAlign: 'top'
		};
		return (	
			
			<div>

				<h3 className="text-center"> Create New List </h3>
				<div className="col-sm-10 col-sm-offset-1">
					<span> List Name </span>
					<input placeholder="List Name" className="form-control" type="text" value={this.state.listName} onChange={this.handleChange} />
					</br>
					<h5> List Color: <div style={selectedStyle}>  </div> </h5>
					
					<div className="row">
						{colorList}
					</div>
					<button className="btn btn-primary" onClick={this.handleSubmit}> Submit </button>
				</div>
			</div>
		);
	}

});

module.exports = AddList;