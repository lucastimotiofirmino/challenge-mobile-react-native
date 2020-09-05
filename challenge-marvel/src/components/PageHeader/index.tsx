import React, { ReactNode } from 'react'
import { View, Image, Text } from 'react-native'
import {Container,Header,Title} from './styles'

interface PageHeaderProps {
    title: string
    headerRight?: ReactNode
}
const PageHeader: React.FC<PageHeaderProps> = ({ title, children, headerRight}) => {
    

    return (
        <Container>          
            <Header>
                <Title> {title}</Title>
                {headerRight}
            </Header>   
            {children}
        </Container>
    )
}

export default PageHeader