import React from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Bell from "../../component/icons/Bell";
import Referal from "../../component/icons/Referal";
import ArrowRight from "../../component/icons/ArrowRight";
import StarIcon from "../../component/icons/Star";
import NotesIcon from "../../component/icons/Notes";
import CalculatorIcon from "../../component/icons/Calculator";
import ArtIcon from "../../component/icons/Art";
import RelationshipIcon from "../../component/icons/Relationship";
import BusinessIcon from "../../component/icons/Business";
import SpiritualIcon from "../../component/icons/Spiritual";

export default function ProductPage({ navigation }) {
  return (
    <SafeAreaView>
      <ScrollView className="px-4 h-full bg-white">
        <View className="mt-6 flex-row justify-between px-2">
          <View className="flex-row w-full justify-between items-stretch">
            <View className=" flex-col items-center ">
              <TouchableOpacity
                className="flex items-center justify-center bg-white rounded-full p-4"
                style={styles.circleShadow}
              >
                <NotesIcon width={24} height={24} />
              </TouchableOpacity>
              <TouchableOpacity className="mt-5">
                <Text className="text-center text-xs">
                  Self {"\n"} Development
                </Text>
              </TouchableOpacity>
              <View
                className="w-full bg-[#D81313] mt-2 rounded-b"
                style={{ height: 3 }}
              ></View>
            </View>
            <View className=" flex-col items-center ">
              <TouchableOpacity
                className="flex items-center justify-center bg-white rounded-full p-4"
                style={styles.circleShadow}
              >
                <SpiritualIcon width={24} height={24} disabled />
              </TouchableOpacity>
              <TouchableOpacity className="mt-5">
                <Text className="text-center text-xs text-gray-300">
                  Spiritual
                </Text>
              </TouchableOpacity>
            </View>
            <View className=" flex-col items-center ">
              <TouchableOpacity
                className="flex items-center justify-center bg-white rounded-full p-4"
                style={styles.circleShadow}
              >
                <RelationshipIcon width={24} height={24} disabled />
              </TouchableOpacity>
              <TouchableOpacity className="mt-5">
                <Text className="text-center text-xs text-gray-300">
                  Relationship
                </Text>
              </TouchableOpacity>
            </View>
            <View className=" flex-col items-center ">
              <TouchableOpacity
                className="flex items-center justify-center bg-white rounded-full p-4"
                style={styles.circleShadow}
              >
                <BusinessIcon width={24} height={24} disabled />
              </TouchableOpacity>
              <TouchableOpacity className="mt-5">
                <Text className="text-center text-xs text-gray-300">
                  Business
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View className="pt-4 px-2">
          <View className="flex-wrap flex-row justify-between pt-4">
            {[...Array(12)].map((_, index) => (
              <View
                key={index}
                className="w-[45%] bg-white rounded-lg overflow-hidden mb-5"
              >
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
                      maxHeight: 231,
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
                  <View className="mt-1">
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
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = {
  circleShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.005,
    shadowRadius: 3.84,
    elevation: 1,
  },
  inactive: {
    backgroundColor: "#F1F1F1",
  },
};
