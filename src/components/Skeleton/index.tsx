import React from "react";
import { View, Dimensions } from "react-native";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

// import { Container } from './styles';

const Skeleton: React.FC = () => {
  const { width } = Dimensions.get("window");
  return (
    <SkeletonPlaceholder
      speed={800}
      backgroundColor="#111"
      highlightColor="#222"
    >
      <View
        style={{
          flexDirection: "row",
          marginTop: 10,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "column" }}>
          <View style={{ width: width / 2.2, height: 170, borderRadius: 8 }} />
          <View
            style={{
              width: width / 2.6,
              height: 10,
              borderRadius: 5,
              marginTop: 10,
            }}
          />
        </View>
        <View style={{ flexDirection: "column" }}>
          <View style={{ width: width / 2.2, height: 170, borderRadius: 8 }} />
          <View
            style={{
              width: width / 2.6,
              height: 10,
              borderRadius: 5,
              marginTop: 10,
            }}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginTop: 10,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "column" }}>
          <View style={{ width: width / 2.2, height: 170, borderRadius: 8 }} />
          <View
            style={{
              width: width / 2.6,
              height: 10,
              borderRadius: 5,
              marginTop: 10,
            }}
          />
        </View>
        <View style={{ flexDirection: "column" }}>
          <View style={{ width: width / 2.2, height: 170, borderRadius: 8 }} />
          <View
            style={{
              width: width / 2.6,
              height: 10,
              borderRadius: 5,
              marginTop: 10,
            }}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginTop: 10,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "column" }}>
          <View style={{ width: width / 2.2, height: 170, borderRadius: 8 }} />
          <View
            style={{
              width: width / 2.6,
              height: 10,
              borderRadius: 5,
              marginTop: 10,
            }}
          />
        </View>
        <View style={{ flexDirection: "column" }}>
          <View style={{ width: width / 2.2, height: 170, borderRadius: 8 }} />
          <View
            style={{
              width: width / 2.6,
              height: 10,
              borderRadius: 5,
              marginTop: 10,
            }}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginTop: 10,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "column" }}>
          <View style={{ width: width / 2.2, height: 170, borderRadius: 8 }} />
          <View
            style={{
              width: width / 2.6,
              height: 10,
              borderRadius: 5,
              marginTop: 10,
            }}
          />
        </View>
        <View style={{ flexDirection: "column" }}>
          <View style={{ width: width / 2.2, height: 170, borderRadius: 8 }} />
          <View
            style={{
              width: width / 2.6,
              height: 10,
              borderRadius: 5,
              marginTop: 10,
            }}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginTop: 10,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "column" }}>
          <View style={{ width: width / 2.2, height: 170, borderRadius: 8 }} />
          <View
            style={{
              width: width / 2.6,
              height: 10,
              borderRadius: 5,
              marginTop: 10,
            }}
          />
        </View>
        <View style={{ flexDirection: "column" }}>
          <View style={{ width: width / 2.2, height: 170, borderRadius: 8 }} />
          <View
            style={{
              width: width / 2.6,
              height: 10,
              borderRadius: 5,
              marginTop: 10,
            }}
          />
        </View>
      </View>
    </SkeletonPlaceholder>
  );
};

export default Skeleton;
