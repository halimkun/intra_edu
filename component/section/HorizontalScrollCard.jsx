import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import TimeCountDown from "../TimeCountDown";
import StarIcon from "../icons/Star";

export default function HorizontalScrollCard() {
  return (
    <ScrollView
      horizontal
      className="mt-5 bg-white"
      showsHorizontalScrollIndicator={false}
    >
      <View className="flex-row" style={{ gap: 18 }}>
        {[...Array(7)].map((_, index) => (
          <View
            key={index}
            className="bg-white W rounded-lg overflow-hidden"
            style={{
              maxwidth: 128,
            }}
          >
            <View
              style={{
                maxwidth: 128,
                maxHeight: 192,
                borderRadius: 8,
                marginBottom: 8,
              }}
            >
              <Image
                source={require(`../../assets/images/book_7.png`)}
                className="h-full w-full rounded-xl"
                style={{ borderRadius: 8 }}
                resizeMode="cover"
              />
            </View>
            <View className="mt-2">
              <Text
                className="text-sm font-bold text-wrap"
                style={{ width: 128 }}
              >
                The Catcher in the Rye
              </Text>
              <Text className="text-sm">J. D. Salinger</Text>
              <View className="flex flex-row items-center justify-between mt-2">
                <TouchableOpacity className="flex-row items-center gap-1">
                  <StarIcon width={16} height={16} />
                  <Text className="text-sm text-primary">4.5</Text>
                </TouchableOpacity>
                <Text className="font-bold text-primary">₹50</Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
