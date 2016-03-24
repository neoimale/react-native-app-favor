/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
var React = require('react-native');
var {
  AppRegistry,
  TabBarIOS,
  NavigatorIOS,
  StyleSheet,
  Text,
  View
} = React;

var Icon = require('react-native-vector-icons/FontAwesome');
var ShotList = require("./app/widget/ShotList");
var Empty = require("./app/widget/Empty");
var Strings = require('./app/locale/zh-cn');

var FavorImage = require("./app/page/FavorImage");

var Zhaji = React.createClass({
  getInitialState: function() {
    return {selectedTab: "default"};
  },
  // _renderContent: function(category: string, title: ?string) {
  //   var page = (
  //     <NavigatorIOS style={styles.wrapper}
  //       initialRoute={{
  //         component: ShotList,
  //         title: title,
  //         passProps: {filter: category}
  //       }} />
  //   )
  //   return page;
  // },
  render: function() {
    return (
      <TabBarIOS tintColor={"#ea4c89"}>
        <Icon.TabBarItem
          title={Strings['main-tab-image']}
          iconName="dribbble"
          selectedIconName="dribbble"
          selected={this.state.selectedTab === "default" || this.state.selectedTab === "image"}
          onPress={() => {
            this.setState({
              selectedTab: "default",
            });
          }}>
          <FavorImage />
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title={Strings['main-tab-text']}
          iconName="trophy"
          selectedIconName="trophy"
          selected={this.state.selectedTab === "debuts"}
          onPress={() => {
            this.setState({
              selectedTab: "debuts",
            });
          }}>
          <NavigatorIOS style={styles.wrapper}
          initialRoute={{
            component: Empty,
            title: Strings['main-tab-text'],
            passProps: {text: '开发中'}
          }} />
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title={Strings['main-tab-link']}
          iconName="heart"
          selectedIconName="heart"
          selected={this.state.selectedTab === "animated"}
          onPress={() => {
            this.setState({
              selectedTab: "animated",
            });
          }}>
          <NavigatorIOS style={styles.wrapper}
          initialRoute={{
            component: Empty,
            title: Strings['main-tab-link'],
            passProps: {text: '开发中'}
          }} />
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title={Strings['main-tab-me']}
          iconName="lightbulb-o"
          selectedIconName="lightbulb-o"
          selected={this.state.selectedTab === "rebounds"}
          onPress={() => {
            this.setState({
              selectedTab: "rebounds",
            });
          }}>
          <NavigatorIOS style={styles.wrapper}
          initialRoute={{
            component: Empty,
            title: Strings['main-tab-me'],
            passProps: {text: '开发中'}
          }} />
        </Icon.TabBarItem>
      </TabBarIOS>
    );
  }
})

var styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: "center",
  },
  tabText: {
    color: "white",
    margin: 50,
  },
  wrapper: {
    flex: 1
  }
});

AppRegistry.registerComponent('Zhaji', () => Zhaji);
module.exports = Zhaji;
