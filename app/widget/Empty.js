var React = require("react-native");
var {
  Text,
  StyleSheet,
  View,
} = React;

var Empty = React.createClass({
	render: function() {
		return (<View style={[styles.container, styles.centerText]}>
			<Text>{this.props.text}</Text>
			</View>)
	}
});

var styles = StyleSheet.create({
	container: {
	    flex: 1,
	    backgroundColor: "white",
	    flexDirection: "column",
	    justifyContent: "center"
  	},
	centerText: {
		alignItems: "center",
	}
});

module.exports = Empty;