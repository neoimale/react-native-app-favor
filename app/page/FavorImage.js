"use strict";

var React = require("react-native");
var {
    NavigatorIOS,
    StyleSheet,
    View
} = React;
var FS = require('react-native-fs');
var Icon = require('react-native-vector-icons/FontAwesome');
var Strings = require('../locale/zh-cn');
var UIImagePickerManager = require('NativeModules').UIImagePickerManager;
const pickImageOption = {
	title: Strings['image-add-title'],
	cancelButtonTitle: Strings['cancel'],
	takePhotoButtonTitle: Strings['image-add-from-camera'],
	chooseFromLibraryButtonTitle: Strings['image-add-from-library'],
	mediaType: 'photo',
	maxWidth: 500
};

var api = require("../helpers/api");
var getImage = require("../helpers/getImage")
var ShotList = require("../widget/ShotList"),
    ShotCell = require("../widget/ShotCell"),
    ShotDetails = require("../widget/ShotDetails");

var FavorImage = React.createClass({
	componentWillMount: function() {
		Icon.getImageSource('plus', 22, 'red')
		.then((source) => this.setState({plusIcon: source}));
	},
	getInitialState: function() {
		return {plusIcon: null};
	},
    render: function() {
    	if(!this.state.plusIcon) {
    		return false;
    	}
        return (<NavigatorIOS style = {styles.wrapper}
        initialRoute = {
            {
                component: ShotList,
                title: '全部图片',
                rightButtonIcon: this.state.plusIcon,
                onRightButtonPress: () => UIImagePickerManager.showImagePicker(pickImageOption, (response) => {
                	FS.mkdir(FS.DocumentDirectoryPath + '/image').then(() => {
                		FS.moveFile(response.uri, FS.DocumentDirectoryPath + '/image/' + Date.now());
                	})
                }),
                passProps: {
                    filter: 'image',
                    getData: this.getData,
                    renderRow: this.renderRow
                }
            }
        }/>)
    },
    getData: (query, page) => api.getShotsByType(query, page),
    renderRow: function(shot: Object)  {
	    return (
	      <ShotCell
	        onSelect={() => this.onCellSelect(shot)}
	        shot={getImage.shotImage(shot)}/>
	    );
  	},
    onCellSelect: function(shot) {

    }
});

var styles = StyleSheet.create({
  	wrapper: {
    	flex: 1
  	}
});

module.exports = FavorImage;
