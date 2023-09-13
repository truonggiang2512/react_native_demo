import React from "react";
import {
  View,
  Text,
  ImageBackground,
  TextInput,
  StyleSheet,
} from "react-native";
import styles from "./welcome.style";
import Icon from "react-native-vector-icons/FontAwesome";
const image = {
  uri: "https://s3-alpha-sig.figma.com/img/c01a/4e98/880eae874f16e87be7c5c004d7346349?Expires=1695600000&Signature=XAkDOG-gsNVWtV5w67gQPlbJkJEiek~Q30NxVrizrW9QZyI93FKGnd7m-hGXoxBHhSw2bOtJAWpy3HLUw1971MeuGmd84W1mh-u6J1CGejaoEZBbqtVWUKZ47oKuZxBNvPIrca0JpZ1wlZ902lo8qzP6JSGPZKvNhz~F2mQdqL8nu3XzMDPvSiFHaMRgRS1eE9oY2TJ3RTN25eZcstYrdRq4MkmavedDqe5ePMJfRjSSo-qBkXh92lf3qMogBSpMe9oO6mK8AGyQFyN8sTdCh4ZU3dVfvdtmwowHu9Rni7o32HcD4Izutf74CYjA6p-ZUdPlChOkLT6-GS3uRrNDEw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
};
import { SvgXml } from "react-native-svg";
import { IntroSVG } from "../../../assets/svg/IntroSVG";
const Welcome = () => {
  return (
    <View>
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.searchContainer}>
          <View style={styles.searchWrapper}>
            <TextInput
              style={styles.searchInput}
              value=""
              onChange={() => {}}
              placeholder="What are you looking  for"
            />
          </View>
          <View style={styles.iconContainer}>
            <View style={styles.row}>
              <Icon name="bell" size={30} color="#fff" />
              <Icon name="shopping-cart" size={30} color="#fff" />
            </View>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.introTag_position}>
        <View style={styles.introTag_background}>
          <SvgXml xml={IntroSVG} width="30" height="30" alignSelf="center" />
          <View style={styles.introTag_flex}>
            <Text style={styles.introTag_text}>Giới thiệu bạn bè</Text>
          </View>
        </View>
      </View>
      <View style={styles.intro_background}>
        <View style={styles.intro_container}>
          <View style={styles.intro_flex}>
            <View style={styles.intro_item}></View>
            <View>
              <Text style={styles.intro_title}>Tên Đại Lý</Text>
              <Text style={styles.intro_text}>Phân Cấp Đại Lý</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Welcome;
