import { Tabs } from "expo-router";
import { useFonts } from "expo-font";
import LoadingScreen from "@/components/Shared/LoadingScreen";
import DatabaseProvider from "@/components/Shared/DatabaseProvider";

export default function RootLayout(){

  let [fonts] = useFonts({
    VT323: require("@/assets/fonts/VT323-Regular.ttf")
  });

  if(fonts){
    return (
      <DatabaseProvider>
         <Tabs initialRouteName="(tabs)/(home-pages)">
          <Tabs.Screen name="(tabs)/(home-pages)" options={{href:"/(tabs)/(home-pages)", headerShown: false}} />
          <Tabs.Screen name="(tabs)/settings" options={{headerShown: false}} />
        </Tabs>
      </DatabaseProvider>
    );

  } else {
     return <LoadingScreen text="Loading fonts..." />
  }
};
