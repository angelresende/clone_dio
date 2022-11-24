import React from 'react'
import Header from '../../components/Header'
import { Container, Column, Title, TitleHighlight } from './style'
import Card from '../../components/Card';
import UserInfo from '../../components/UserInfo';


function Feed() {
   return (
    <>
      <Header autenticado={true}/>
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <TitleHighlight> # RANKING 5 TOP DA SEMANA </TitleHighlight>
          <UserInfo percentual={85} nome='Angélica Resende' image='https://avatars.githubusercontent.com/u/70111126?v=4'/>
          <UserInfo percentual={75} nome='Angélica Resende' image='https://avatars.githubusercontent.com/u/70111126?v=4'/>
          <UserInfo percentual={65} nome='Angélica Resende' image='https://avatars.githubusercontent.com/u/70111126?v=4'/>
          <UserInfo percentual={55} nome='Angélica Resende' image='https://avatars.githubusercontent.com/u/70111126?v=4'/>
          <UserInfo percentual={50} nome='Angélica Resende' image='https://avatars.githubusercontent.com/u/70111126?v=4'/>
        </Column>
        
      </Container>
    </>
  )
}

export default Feed