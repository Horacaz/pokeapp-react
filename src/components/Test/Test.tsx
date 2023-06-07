import styled from "@emotion/styled";

type TitleProps = {
  dark: boolean;
};
const Title = styled.h1<TitleProps>`
  color: ${(props) => (props.dark ? "white" : "red")};
`;
function Subtitle(props: { className?: string }) {
  return <h2 className={props.className}>I'm a subtitle!</h2>;
}

const SubTitle = styled(Subtitle)`
  min-height: 100px;
  color: blue;
  background-color: green;
`;

export default function Test() {
  return (
    <>
      <Title dark={false}>Hello World from Test!</Title>
      <SubTitle />
    </>
  );
}
