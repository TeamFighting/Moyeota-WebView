import styled from 'styled-components'
// import { useNavigate } from 'react-router-dom'
// import PotCreateStore from '../../../zustand/store/PotCreateStore'

function UpdateExitButton() {
    // const navigate = useNavigate()

    return (
        <Wrapper>
            <Button type="button">저장하기</Button>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    height: 128px;
    background-color: rgb(0, 0, 0, 0);
    bottom: 0;
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: center;
    z-index: 2;
`

const Button = styled.button`
    width: 335px;
    height: 48px;
    flex-shrink: 0;
    border-radius: 12px;
    background: var(--Green-Button, #1edd81);
    border: none;
    font-size: 16px;
    color: white;
    color: #fff;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.54px;
    z-index: 3;
`

export default UpdateExitButton