import { View, Text } from 'react-native'
import CategoryItem from './../CategoryItem'

export default function CategorySection() {
  const categories = [
    { id: 1, label: 'Self Development' },
    { id: 2, label: 'Finance' },
    { id: 3, label: 'Art' },
    { id: 4, label: 'Relationship' }
  ]

  return (
    <View className="my-8 px-2">
      <View className="flex flex-row items-center justify-between">
        <Text className="font-bold">Category</Text>
        <Text className="font-bold text-primary">View All</Text>
      </View>

      <View className="mt-6 flex-row justify-between">
        {categories.map(category => (
          <CategoryItem key={category.id} label={category.label} />
        ))}
      </View>
    </View>
  )
}