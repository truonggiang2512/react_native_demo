import React from "react";
import { View, Text } from "react-native";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";
import { DownSVG } from "../../../assets/svg/DownSVG";
// import styles from './about.style'
import { SvgXml } from "react-native-svg";

const FavoProduct = () => {
  return (
    <View style={{ padding: 20 }}>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 3 }}>
        <Text style={{ color: "#13844E", fontSize: 12, paddingVertical: 10 }}>
          Bán chạy
        </Text>
        <SvgXml xml={DownSVG} width="10" height="10" alignSelf="center" />
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          gap: 8,
        }}
      >
        <PopularJobCard />
        <PopularJobCard />
        <PopularJobCard />
      </View>
    </View>
  );
};

export default FavoProduct;
