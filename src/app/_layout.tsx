import { colors } from "@/src/styles/colors";
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { Stack } from "expo-router";

export default function Layout() {
    const backgroundColor = colors.gray[950]

    return (
        <GluestackUIProvider mode="light">
            <Stack screenOptions={{
                headerShown: false,
                contentStyle: {
                    backgroundColor,
                },
            }} />
        </GluestackUIProvider>
    );
}