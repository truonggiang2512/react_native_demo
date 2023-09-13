import { View, Text } from "react-native";
import React from "react";
import { SvgXml } from "react-native-svg";
import { HomeSVG } from "../../assets/svg/footerSvg/HomeSVG";
import { OrderSVG } from "../../assets/svg/footerSvg/OrderSVG";
import { ProductSVG } from "../../assets/svg/footerSvg/ProductSVG";
import { ProfileSVG } from "../../assets/svg/footerSvg/ProfileSVG";
import styles from "./footer.style";
const Footer = () => {
  return (
    <View>
      <View style={styles.footerWrap}>
        <View>
          <SvgXml xml={HomeSVG} width="21" height="21" alignSelf="center" />
          <Text style={styles.text}>Trang chủ</Text>
        </View>
        <View>
          <SvgXml xml={ProductSVG} width="21" height="21" alignSelf="center" />
          <Text style={styles.text}>Sản phẩm</Text>
        </View>
        <View>
          <SvgXml xml={OrderSVG} width="21" height="21" alignSelf="center" />
          <Text style={styles.text}>Đơn hàng</Text>
        </View>
        <View>
          <SvgXml xml={ProfileSVG} width="21" height="21" alignSelf="center" />
          <Text style={styles.text}>Cá nhân</Text>
        </View>
      </View>
    </View>
  );
};

export default Footer;
