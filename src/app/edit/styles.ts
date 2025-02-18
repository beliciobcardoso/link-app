import { colors } from "@/src/styles/colors";
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  title: {
    color: colors.gray[200],
    fontSize: 24,
    fontWeight: "600"
  },
  label: {
    color: colors.gray[400],
    fontSize: 14,
    paddingHorizontal: 20,
  },
  form: {
    paddingHorizontal: 20,
    marginBottom: 20,
    gap: 20,
  }
});