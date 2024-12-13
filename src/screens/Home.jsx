import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Referal from "../../component/icons/Referal";
import ArrowRight from "../../component/icons/ArrowRight";
import Bell from "../../component/icons/Bell";
import BestDealSection from "./../../component/section/BestDealSection";
import CategorySection from "./../../component/section/CategoriesSection";
import SearchField from "./../../component/SearchField";
import StarIcon from "../../component/icons/Star";
import HorizontalScrollCard from "../../component/section/HorizontalScrollCard";
import Heading from "../../component/texts/Heading";
import HorizontalScrollImgCard from "../../component/section/HorizontalScrollImgCard";
import { StatusBar } from "expo-status-bar";
import Wallet from "../../component/icons/Wallet";
import ProductPage from "./Product";

export default function HomePage({ navigation }) {
  return (
    <SafeAreaView>
      <ScrollView className="h-full bg-white">
        <StatusBar style="auto" backgroundColor="#fff" translucent={true} />
        <View className="px-4 bg-white py-3 mb-2">
          <View className="bg-neutral-200 h-[240px] p-2 rounded-b-2xl overflow-hidden flex justify-between relative">
            <View className="mt-14 px-6 flex flex-row justify-between items-center">
              <Text className="text-xl font-bold">Hi, James !</Text>
              <View className="flex flex-row gap-3 items-center">
                <TouchableOpacity className="rounded-full px-4 py-2 flex flex-row items-center gap-2 justify-evenly bg-primary-500">
                  <Referal width={16} height={19} />
                  <Text className="text-white">Referral</Text>
                  <ArrowRight width={12} height={12} fill="#fff" />
                </TouchableOpacity>

                <Bell width={16} height={19} />
              </View>
            </View>

            <View className="h-40 bg-primary-500 -bottom-7 rounded-2xl p-4 flex gap-3 border-2 border-indigo-200">
              <View className="flex gap-3 items-center flex-row">
                <Wallet width={16} height={16} />
                <Text className=" text-white tracking-wide">Balance</Text>
              </View>
              <View className="flex flex-row items-center justify-start gap-2 mt-2">
                <Text className="text-3xl font-black text-white">₹ 3.456</Text>
                <ArrowRight width={12} height={12} fill="#fff" />
              </View>
            </View>
          </View>

          {/* Search Field */}
          <View className="mt-5">
            <SearchField />
          </View>

          {/* Hero Slider */}
          <View className="h-40 rounded-2xl mt-5">
            {/* Image */}
            <Image
              source={require("../../assets/images/banner_1.png")}
              className="w-full h-full rounded-2xl"
            />
          </View>
        </View>
        <View className="py-3 px-4 mb-2">
          <View className="flex flex-row items-center justify-between">
            <Text className="font-bold text-sm">Category</Text>
            <TouchableOpacity
              className=" text-primary"
              onPress={() => navigation.navigate("ProductScreen")}
            >
              <Text className="text-sm">View All</Text>
            </TouchableOpacity>
          </View>
          <CategorySection />
        </View>
        <View className="py-3 px-4 ">
          <BestDealSection />
        </View>
        <View className="px-4 mb-2">
          <HorizontalScrollCard />
        </View>
        <View
          // className="py-3 px-4 mb-2"
          style={{ paddingTop: 12, paddingLeft: 16, marginBottom: 8 }}
        >
          <Heading
            title1="Recently"
            title2=" Viewed"
            desc={"Discover the most loved novels in the world"}
          />
          <HorizontalScrollCard />
        </View>
        <View className="py-3 px-4">
          <HorizontalScrollImgCard />
        </View>
        <View
          // className="py-3 px-4 mb-2"
          style={{ paddingTop: 12, paddingLeft: 16, marginBottom: 100 }}
        >
          <Heading title1="Your" title2="Interest" action={"View All"} />
          <HorizontalScrollCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
