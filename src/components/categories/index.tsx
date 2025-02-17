import { FlatList } from "react-native"
import { Category } from "@/components/category"
import { styles } from "./styles"
import { categories } from "@/utils/categories"

export function Categories() {
    return (
        <FlatList
            data={categories}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <Category
                    name={item.name}
                    icon={item.icon}
                    isSelected
                    onPress={() => console.log("Teste")}
                />
            )}
            horizontal
            style={styles.container}
            contentContainerStyle={styles.content}
            showsHorizontalScrollIndicator={false}
        />
    )
}