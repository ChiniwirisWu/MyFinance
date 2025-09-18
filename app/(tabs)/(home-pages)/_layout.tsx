import { Stack } from "expo-router";

export const unstable_settings = {
  initialRouteName : "index"
};

export default function HomeLayout(){
  return (
    <Stack initialRouteName="index">
      <Stack.Screen name="index" options={{headerShown: false}} />
      <Stack.Screen name="create" options={{headerShown: false}} />
      <Stack.Screen name="history" options={{headerShown: false}} />
      <Stack.Screen name="insights" options={{headerShown: false}} />
    </Stack>
  );
};
