import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackNavigatorProps } from "./types";
import { AllMembersScreen, TeamScreen } from "screens";

const Stack = createNativeStackNavigator<RootStackNavigatorProps>();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={"AllMembers"}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="AllMembers" component={AllMembersScreen} />
        <Stack.Screen name="Team" component={TeamScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
