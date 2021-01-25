import styled from 'styled-components'
import db from './db.json'
import Widget from '../componentes/widget'
import Footer from '../componentes/Footer'



const BackgroundImage = styled.div`
background-image: url(${db.bg});
flex: 1;
background-size: cover;
background-position: center;
`;

export const QuizContainer = styled.div`
width: 100%;
max-width: 350px;
padding-top: 45px;
margin: auto 10%;
@media screen and (max-width: 500px){
  margin: auto;
  padding: 15px;
}
`;






export default function Home() {
  return (
  <BackgroundImage>
        <QuizContainer>
          <Widget>
              <h1> Breaking Bad </h1>
              <p> A melhor série </p>

          </Widget>

          <Widget>
             <h1> Breaking Bad </h1>
              <p> A melhor série </p>

          </Widget>
        </QuizContainer>
  </BackgroundImage>

  )

}
