import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import styles from "./popularjobcard.style";
const Image1 = {
  uri: "https://s3-alpha-sig.figma.com/img/cd06/f3a4/1664459ba39fc5af55380df5a457107e?Expires=1695600000&Signature=f2SrkCtBLng-79nyWvN321rzEW1C~6EP-jlH661MG5pOSrr5osANli9nzxNZoMvLXQiPtS4WOe7l8Lz4aEbnoQxRlhxCQTKa-310U-3E~MFCdPMraDbVbAqhkKgIzUfMAGiJQfRRpiIyCu9iUZDFLbgziszwycwQ3~3FFmNVvA2q4lwOYgXQW~ORQ-bZ96kqzLQnbjzjw2NJ0pQKUx-bsrj296fxK2IjKCcYSEtJuFvAZPPvS93uzHUuFipP9IljvoV7CG46TQexREDLy8VCb5oV6cpyv4qe9Eg9KBjuQQXbiQ6dLi8SAn2s9kL08TjrVefi49tk0RdXjlTlOyyGMA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
};
const PopularJobCard = () => {
  return (
    <View style={[styles.card, styles.shadowProp]}>
      <View style={{ width: "100%" }}>
        <View>
          <Image source={Image1} style={styles.image} />
        </View>
        <View style={styles.heart}>
          <Icon name="heart" size={30} color="#fff" />
        </View>
        <View style={styles.bodyCart}>
          <Text style={styles.nameText}>
            Cà phê Ze1 Vị Cân Bằng Đắng đậm, mạnh mẽ
          </Text>
          <View style={{ paddingVertical: 5 }}>
            <Text style={styles.priceText}>123.000 VND</Text>
          </View>
          <View style={styles.flexView}>
            <Text style={styles.recommendText}>Giá sỉ đề xuất:</Text>
            <Text style={styles.recommendPrice}>100.000 VND</Text>
          </View>
          <View style={styles.flexView}>
            <Text style={styles.recommendText}>Giá lẻ đề xuất:</Text>
            <Text style={styles.recommendPrice}>100.000 VND</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
export default PopularJobCard;
