var React = require('react');
var ListContainer = require('./ListContainer');
var AddList = require('./AddList');

var App = React.createClass({

	getInitialState: function() {
		return {
			lists:[] 
		};
	},


	addNewList: function(list) {
		this.setState({
			lists: this.state.lists.concat([{
				newTitle: list.listName,
				index: this.state.lists.length,
				backgroundColor: list.backgroundColor
			}])
		})
	},

	handleRemoveList: function(index){
		var newLists = this.state.lists;
		newLists.splice(index,1);
		this.setState({
			lists: newLists
		})
	},

	render: function() {

		var componentList = this.state.lists.map(function(list, index){
			var colorStyle={
				backgroundColor: list.backgroundColor
			}

			return (
				<ListContainer 
					index={index}
					remove={this.handleRemoveList} 
					title={list.newTitle}
					bgColor={list.backgroundColor}
					key={list.index} />
			)
		}.bind(this));

		return (
			<div className="container">
		        <div className="row">
		          <div className="col-sm-6">
		          	<AddList add={this.addNewList} />
	          	   	
	          	   </div>
		          {componentList}

		        </div>
		    </div>
		);
	}

});

React.render(<App />, document.getElementById('app'));