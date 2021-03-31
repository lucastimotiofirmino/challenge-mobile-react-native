import React from "react";
// import {Text} from 'react-native';
// import FavButton from '../FavButton';
import { useNavigation } from "@react-navigation/native";

import {
  Container,
  EnterpriseCard,
  EnterpriseCardDetails,
  EnterpriseCardImage,
  EnterpriseNameText,
} from "./styles";
import { FlatList, ScrollView } from "react-native";
import FavButton from "../FavButton";
// interface IEnterprise {
//   id: number;
//   enterprise_name: string;
//   photo: string;
//   description: string;
//   city: string;
//   country: string;
//   share_price: number;
// }
interface Props {
  heroes: any[];
  //   favIcon: boolean;
}
const HeroesList: React.FC<Props> = ({ heroes }) => {
  //   const {navigate} = useNavigation();

  return (
    <FlatList
      data={heroes}
      key={1}
      numColumns={2}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <EnterpriseCard
          onPress={() => {
            // navigate('Enterprise', {id: item.id});
          }}
          activeOpacity={0.8}
          key={item.id}
        >
          <EnterpriseCardImage
            source={{
              uri: `${item.thumbnail.path}.${item.thumbnail.extension}`,
            }}
          />
          <FavButton />
          <EnterpriseCardDetails>
            <EnterpriseNameText>{item.name}</EnterpriseNameText>
          </EnterpriseCardDetails>
        </EnterpriseCard>
      )}
    />
    // heroes.map((item) => (
    //   <EnterpriseCard
    //     onPress={() => {
    //       // navigate('Enterprise', {id: item.id});
    //     }}
    //     activeOpacity={0.8}
    //     key={item.id}
    //   >
    //     <EnterpriseCardImage
    //       source={{
    //         uri: `${item.thumbnail.path}.${item.thumbnail.extension}`,
    //       }}
    //     />
    //       <FavButton />
    //     <EnterpriseCardDetails>
    //       <EnterpriseNameText>{item.name}</EnterpriseNameText>
    //     </EnterpriseCardDetails>
    //   </EnterpriseCard>
    // ))
    // </FlatList>
  );
};

export default HeroesList;
