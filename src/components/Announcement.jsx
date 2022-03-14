import styled from "styled-components"

const Announcement = () => {
    return (
        <Container>
            Amazing Deal! Free Shipping on Orders Over $50
        </Container>
    )
}
const Container=styled.div`
    height: 20px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`
export default Announcement
