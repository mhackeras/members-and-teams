import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackNavigatorProps } from "./types";

export const useRootNavigation = () =>
  useNavigation<NativeStackNavigationProp<RootStackNavigatorProps>>();

export const useRootRoute = <Screen extends keyof RootStackNavigatorProps>() =>
  useRoute<RouteProp<RootStackNavigatorProps, Screen>>();
