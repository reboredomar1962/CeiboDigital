import * as React from 'react';
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
  } from '@react-navigation/drawer';
import { Switch } from 'react-native-elements';


function CustomDrawerContent(props) {
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
    return (
        

    <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        
            <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
        
          <DrawerItem
            label="Toggle drawer"
            onPress={() => props.navigation.toggleDrawer()}
          />
        </DrawerContentScrollView>
      );

  }


export default CustomDrawerContent;
