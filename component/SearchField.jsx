import { View, TextInput } from 'react-native';
import Search from './icons/Search';

export default function SearchField() {
  return (
    <View className="bg-neutral-200 px-6 py-2 rounded-full flex flex-row items-center gap-3">
      {/* icon */}
      <Search width={16} height={19} fill="#717171" />
      <TextInput
        placeholder="Search book"
        className="flex-1 h-10"
        placeholderTextColor="#717171"
      />
    </View>
  )
}