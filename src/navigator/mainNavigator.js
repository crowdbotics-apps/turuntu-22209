import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList166707Navigator from '../features/NotificationList166707/navigator';
import Settings166706Navigator from '../features/Settings166706/navigator';
import Settings166698Navigator from '../features/Settings166698/navigator';
import UserProfile166696Navigator from '../features/UserProfile166696/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList166707: { screen: NotificationList166707Navigator },
Settings166706: { screen: Settings166706Navigator },
Settings166698: { screen: Settings166698Navigator },
UserProfile166696: { screen: UserProfile166696Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
