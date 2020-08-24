import React, {useState} from "react";
import {StatusBar} from 'expo-status-bar';
import {ApplicationProvider, ScrollView, Wrapper, DescriptionWrapper} from "./styles";
import {Headline, Subtitle, Rating, Body, Header, HelperText, DescriptiveItems} from "../../components";
import {getImage} from "../../utils/getImage";
import {FORMAT_PRICE} from "../../utils/format";

const DetailsScreen = ({route}) => {
    const [comics, setComics] = useState(route.params.comics);

    return (
        <ApplicationProvider>
            <StatusBar style="light"/>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Header source={getImage(comics)}/>
                <Wrapper>
                    <DescriptiveItems label={comics.format + ' - pages count ( ' + comics.pageCount + ' )'}/>
                    <Headline label={comics.title}/>
                    <Subtitle label={comics.creators.items[0].name}/>
                    <Rating label={FORMAT_PRICE(comics.prices)} issue={comics.issueNumber}/>

                    <DescriptionWrapper>
                        <Body label={comics.description} align="center"/>
                    </DescriptionWrapper>

                    <HelperText label="© 2020 MARVEL" align="center"/>
                </Wrapper>
            </ScrollView>
        </ApplicationProvider>
    );
};
export default DetailsScreen;
