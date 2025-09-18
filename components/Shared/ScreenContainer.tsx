import { View } from "react-native";
import { g_styles } from "@/constants/styles";

export default function ScreenContainer ({children}:{children:any}) {
  return (
    <View style={g_styles.container}>
      {children}
    </View> 
  );
};
