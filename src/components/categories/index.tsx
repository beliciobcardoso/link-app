import { FlatList } from "react-native"
import { Category } from "@/src/components/category"
import { styles } from "./styles"
import { categories } from "@/src/utils/categories"

type CategoryProps = {
    selected: string;
    onChange: (category: string) => void;
}

export function Categories({ selected, onChange }: CategoryProps) {
    return (
        <FlatList
            data={categories}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <Category
                    name={item.name}
                    icon={item.icon}
                    isSelected={selected === item.name}
                    onPress={() => onChange(item.name)}
                />
            )}
            horizontal
            style={styles.container}
            contentContainerStyle={styles.content}
            showsHorizontalScrollIndicator={false}
        />
    )
}