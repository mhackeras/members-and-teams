import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackNavigatorProps = {
  AllMembers: undefined;
  Team: { memberName: string };
};

export type RootStackScreenProps<T extends keyof RootStackNavigatorProps> =
  NativeStackScreenProps<RootStackNavigatorProps, T>;
