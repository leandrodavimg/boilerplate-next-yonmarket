import * as S from './styles'

const Main = () => (
  <>
    <button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Button
    </button>
    <S.Wrapper>
      <S.Logo
        src="/img/logo.svg"
        alt="Imagem de um átomo e React Avançado escrito ao lado."
      />
      <S.Title>React Avançado</S.Title>
      <S.Description>
        TypeScript, ReactJS, NextJS e Styled Components
      </S.Description>
      <S.Illustration
        src="/img/hero-illustration.svg"
        alt="Um desenvolvedor de frente para uma tela com código."
      />
    </S.Wrapper>
  </>
)

export default Main
