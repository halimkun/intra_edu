import { View, Text, TouchableOpacity } from "react-native";
import CategoryItem from "./../CategoryItem";
import NotesIcon from "../icons/Notes";
import CalculatorIcon from "../icons/Calculator";
import ArtIcon from "../icons/Art";
import RelationshipIcon from "../icons/Relationship";

export default function CategorySection() {
  return (
    <View className="">
      <View className="mt-6 flex-row justify-between">
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
          </View>
          <View className=" flex-col items-center ">
            <TouchableOpacity
              className="flex items-center justify-center bg-white rounded-full p-4"
              style={styles.circleShadow}
            >
              <CalculatorIcon width={24} height={24} />
            </TouchableOpacity>
            <TouchableOpacity className="mt-5">
              <Text className="text-center text-xs">Finance</Text>
            </TouchableOpacity>
          </View>
          <View className=" flex-col items-center ">
            <TouchableOpacity
              className="flex items-center justify-center bg-white rounded-full p-4"
              style={styles.circleShadow}
            >
              <ArtIcon width={24} height={24} />
            </TouchableOpacity>
            <TouchableOpacity className="mt-5">
              <Text className="text-center text-xs">Art</Text>
            </TouchableOpacity>
          </View>
          <View className=" flex-col items-center ">
            <TouchableOpacity
              className="flex items-center justify-center bg-white rounded-full p-4"
              style={styles.circleShadow}
            >
              <RelationshipIcon width={24} height={24} />
            </TouchableOpacity>
            <TouchableOpacity className="mt-5">
              <Text className="text-center text-xs">Relationship</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
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
};
