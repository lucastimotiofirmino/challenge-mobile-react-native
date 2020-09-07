import React, { ReactNode } from 'react'
import { View, Image, Text, ImageBackground, Dimensions } from 'react-native'
import { Container, Header, Title } from './styles'
import ImageMarvel from '../../assets/images/teste.png'

interface PageHeaderProps {
    title?: string
    headerRight?: ReactNode
}
const PageHeader: React.FC<PageHeaderProps> = ({ title, children, headerRight }) => {


    return (
        <Container>
            <ImageBackground style={{ marginTop: 10, marginBottom: 20, height: (Dimensions.get('window').height) / 5.5, width: (Dimensions.get('window').width) }} source={ImageMarvel}>

                <Header>
                    <Title> {title}</Title>

                    {headerRight}


                </Header>
                {children}
            </ImageBackground>

        </Container>
    )
}

export default PageHeader