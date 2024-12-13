import { View, Text } from 'react-native'
import TimeCountDown from "../TimeCountDown";

export default function BestDealSection() {
  return (
    <View className="flex flex-row items-center justify-between">
      <View className="flex gap-1">
        <Text className="font-black">Best Deal</Text>
        <Text>Grab your limited incredible deals, now !</Text>
      </View>

      {/* coundown bg red rounded full */}
      <TimeCountDown />
    </View>
  )
}