import { Dimensions, Text, View } from "react-native";
import { BarChart } from "react-native-gifted-charts";
import { colors } from "@/constants/colors";
import { g_styles } from "@/constants/styles";

function TopLabel ({percentage, color}:{percentage:number, color:string}){
  return (
    <Text style={[{color:color, fontWeight: '800'}, g_styles.textBorder]}>{percentage}%</Text>
  );
};

export default function FlowChart (){
  const barWidth = 30;
  const numberOfBars = 3;
  const YAxisWidth = 60;
  const flowChartWidth = barWidth * numberOfBars + YAxisWidth;

  return (
  <View style={g_styles.center}>
    <View style={[g_styles.center, {marginLeft: -50}]}>
      <Text style={[g_styles.label, {marginBottom: 10}]}>This month balance:</Text>
      <BarChart
        frontColor={"#fff"}
        barWidth={30}
        width={flowChartWidth}
        maxValue={100}
        isThreeD
        isAnimated
        noOfSections={5}
        dashWidth={0}
        yAxisLabelSuffix="%"
        barBorderRadius={4}
        xAxisThickness={0}
        yAxisThickness={0}
        data={[
            {
              value: 50,
              label: "Need",
              topLabelComponent: () => <TopLabel percentage={50} color={colors.lightPurple} />,
              sideWidth: 25,
              labelTextStyle: { color: colors.purple, fontWeight: '600' },
              frontColor: colors.purple,
              sideColor: colors.darkPurple,
              topColor: colors.lightPurple
            },
            {
              value: 30,
              label: "Fun",
              topLabelComponent: () => <TopLabel percentage={30} color={colors.lightTan} />,
              labelTextStyle: { color: colors.darkTan, fontWeight: '600' },
              frontColor: colors.tan,
              sideColor: colors.darkTan,
              topColor: colors.lightTan
            },
            {
              value: 20,
              label: "Save",
              topLabelComponent: () => <TopLabel percentage={20} color={colors.lightYellow} />,
              labelTextStyle: { color: colors.darkYellow, fontWeight: '600' },
              frontColor: colors.yellow,
              sideColor: colors.darkYellow,
              topColor: colors.lightYellow
            },
        ]}
      />
    </View>
  </View>
  )
};
