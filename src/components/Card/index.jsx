import React from 'react'
import { FiThumbsUp } from 'react-icons/fi'

import { 
    CardContainer, 
    Content, 
    HasInfo, 
    ImageBackground, 
    PostInfo, 
    UserInfo, 
    UserPicture 
} from './styles'

function Card() {
  return (
    <CardContainer>
        <ImageBackground src={'https://www.udacity.com/blog/wp-content/uploads/2020/06/HTML_Blog-scaled.jpeg.webp'}/>
        <Content>
            <UserInfo>
                <UserPicture src={'https://avatars.githubusercontent.com/u/70111126?v=4'}/>
                <div>
                    <h4>Angélica Resende</h4>
                    <p>Há 12 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto curso HTML e CSS</h4>
                <p>Projeto feito no curso de HTML e CSS no bootcamp
                    Global avanade... <strong>Saiba mais</strong>
                </p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #Javascript</h4>
                <p>
                    <FiThumbsUp /> 10
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}

export default Card