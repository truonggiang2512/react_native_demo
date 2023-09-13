import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { Stack, useRouter } from "expo-router";
import { COLORS, icons, images, SIZES } from "../constants";
import { Feature, Popularjobs, ScreenHeaderBtn, Welcome } from "../components"
import PopularJobCard from "../components/common/cards/popular/PopularJobCard";
import ListProduct from "../components/home/listProduct/ListProduct";
import FavoProduct from "../components/home/FavoProduct/FavoProduct";
import Footer from "../components/footer/Footer";
export default function Page() {
  const router = useRouter()
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen options={{ headerShown: false }} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
          }}>
          <Welcome />
        </View>
        <View
          style={{
            flex: 1,
          }}>
          <Popularjobs />
        </View>
        <View
          style={{
            flex: 1,
          }}>
          <Feature />
        </View>
        <View
          style={{
            flex: 1,
          }}>
          <ListProduct />
        </View>
        <View
          style={{
            flex: 1,
          }}>
          <FavoProduct />
        </View>
      </ScrollView>
      <View>
        <Footer />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },

});
