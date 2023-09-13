import React from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./popularjobs.style";

const Popularjobs = () => {
  return (
    <View style={styles.container}>
      <View style={styles.title_container}>
        <View style={styles.title_container_row}>
          <Icon name="calendar" size={14} color="#0089C4" />
          <Text style={styles.title_container_text}>
            Chọn phạm vi ngày/Hôm nay
          </Text>
        </View>
        <View>
          <Text style={styles.title_container_text}>Xem lịch sử đơn hàng</Text>
        </View>
      </View>
      <View style={styles.list_card_container}>
        <View style={styles.list_card_row}>
          <View style={styles.card}>
            <Text style={styles.numText}>05</Text>
            <Text style={styles.stringText}>Chờ xác nhận</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.numText}>02</Text>
            <Text style={styles.stringText}>Đang giao</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.numText}>08</Text>
            <Text style={styles.stringText}>Đang giao</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.numText}>02</Text>
            <Text style={styles.stringText}>Đơn hủy</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Popularjobs;
