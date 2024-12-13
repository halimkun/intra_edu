import { View, Text } from 'react-native'

export default function TimeCountDown() {
  return (
    <View className="bg-red-500 rounded-full flex flex-row items-center justify-center px-2.5 py-1">
      <Text className="text-white font-black">01 : 34 : 23</Text>
    </View>
  )
}