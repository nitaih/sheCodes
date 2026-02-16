import styled from "styled-components";

const TitleStyled = styled.div`
    background-color: #6200ea;
    color: white;
    font-size: 1.5em;
    padding: 15px;`
function Title() {
    return (
        <TitleStyled>
            <h1>She Does;</h1>

        </TitleStyled>
    )
}
export default Title;