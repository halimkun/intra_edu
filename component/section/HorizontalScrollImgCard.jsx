import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import TimeCountDown from "../TimeCountDown";
import StarIcon from "../icons/Star";
import ArrowRight from "../icons/ArrowRight";

export default function HorizontalScrollImgCard() {
  return (
    <ScrollView
      horizontal
      className="mt-5 bg-white"
      showsHorizontalScrollIndicator={false}
    >
      <View className="flex-row" style={{ gap: 10 }}>
        {[...Array(7)].map((_, index) => (
          <View
            key={index}
            className="bg-white rounded-lg overflow-hidden"
            style={{
              minwidth: 330,
            }}
          >
            <View
              style={{
                minWidth: 330,
                maxHeight: 240,
                borderRadius: 8,
                marginBottom: 8,
              }}
            >
              <Image
                source={require(`../../assets/images/img_card.png`)}
                className="h-full w-full rounded-xl"
                style={{ borderRadius: 8 }}
                resizeMode="cover"
              />
            </View>
            <View className="absolute top-4 left-4 w-fit bg-white blur-sm rounded-full">
              <Text className="w-fit text-sm py-2 px-4 text-primary-500">
                Sponsored
              </Text>
            </View>
            <View className="absolute bottom-0 bg-primary-200 blur-sm  rounded-b-2xl w-full">
              <View className="flex flex-row items-center justify-between py-2 px-4">
                <View>
                  <Text className="font-bold text-wrap mb-1">
                    25% Discount - Limited Stock
                  </Text>
                  <Text className="text-sm">Shop Now</Text>
                </View>
                <View className="mr-4">
                  <ArrowRight width={18} height={18} fill="#000" />
                </View>
              </View>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
