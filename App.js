/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import React from 'react'
import { ApplicationProvider, Layout } from 'react-native-ui-kitten'
import { Router, Scene } from 'react-native-router-flux'
import { mapping, light as theme } from '@eva-design/eva'
import { Icon } from 'react-native-eva-icons'

// Import components
import Login from './src/screens/Login/Login.component'
import Home from './src/screens/Home/Home.component'
import themeStyle from './src/styles/theme.style'
import commonStyle from './src/styles/common.style'

const TabIcon = ({ focused, iconName }) => {
  return (
    <Layout style={{flex:1, flexDirection:'column', alignSelf:'center', ...commonStyle.center }}>
      <Icon name={iconName} width={20} height={20} />
    </Layout>
  )
}

const App = () => (
  <ApplicationProvider mapping={mapping} theme={theme}>
    <Router>
      <Scene key="root">
        <Scene key="login" initial component={Login} hideNavBar />
        <Scene
          key="home"
          tabs={true}
          lazy
          backButtonTintColor={themeStyle.ICON_COLOR}
          labelStyle={{ fontWeight: themeStyle.FONT_WEIGHT_MEDIUM }}
          activeTintColor={themeStyle.ICON_COLOR}
          tabBarStyle={{ backgroundColor: themeStyle.INPUT_LABEL_COLOR, paddingTop: 10 }}
          title="ROOMS">
          <Scene key="group" component={Home} icon={TabIcon} hideNavBar title="Home" iconName="home-outline" />
          <Scene key="todos" component={Home} icon={TabIcon} hideNavBar title="To-do's" iconName="checkmark-circle-2-outline" />
          <Scene key="shop" component={Home} icon={TabIcon} hideNavBar title="Shop" iconName="shopping-cart-outline" />
          <Scene key="messages" component={Home} icon={TabIcon} hideNavBar title="Messages" iconName="message-square-outline" />
          <Scene key="account" component={Home} icon={TabIcon} hideNavBar title="Account" iconName="person-outline" />
        </Scene>
      </Scene>
    </Router>
  </ApplicationProvider>
)

export default App;
