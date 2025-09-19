import { Text, View } from "react-native";
import ScreenContainer from "@/components/Shared/ScreenContainer";
import FlowChart from "@/components/Home/FlowChart";

export default function Home(){
  return (
    <ScreenContainer>
      <View>
        <Text>Home Screen</Text>
        <FlowChart />
      </View>
    </ScreenContainer>
  ) 
};
