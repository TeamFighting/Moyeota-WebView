import styled from 'styled-components';
import { Chevronleft } from '@assets/svg';
import { HEADER_HEIGHT } from '@constants';
import { useNavigate, useParams } from 'react-router-dom';
import BottomSheet from './BottomSheet';
import DestinationButton from '../Button/DestinationButtom';
import CreatePotNaverMap from './CreatePotNaverMap';
import { useRef, useState } from 'react';
import SvgMy_location from '@assets/svg/My_location';

function DestinationPage() {
    const navigate = useNavigate();
    const inputRef = useRef<HTMLInputElement>(null);
    const { from, postId } = useParams();
    const [destination, setDestination] = useState('');
    const goToSearchResults = () => {
        if (inputRef.current?.value) setDestination(inputRef.current?.value);
    };
    const goToback = () => {
        if (from == 'update') navigate(`/updatepot/${postId}`);
        else navigate(`/createPotPage`);
    };
    if (from == undefined) return;
    return (
        <Container>
            <Header>
                <Chevronleft
                    onClick={goToback}
                    style={{
                        width: 24,
                        height: 24,
                    }}
                />
                <InputStyle
                    ref={inputRef}
                    type="text"
                    placeholder="도착지를 검색해보세요"
                    onClick={goToSearchResults}
                ></InputStyle>
                <SvgMy_location
                    onClick={goToSearchResults}
                    style={{
                        width: 18,
                        height: 18,
                    }}
                />
            </Header>
            <Body>
                <CreatePotNaverMap destination={destination} />
                <Bottom>
                    <BottomSheet />
                    <DestinationButton from={from} />
                </Bottom>
            </Body>
        </Container>
    );
}

const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100dvh;
    justify-content: center;
    align-items: center;
`;

const Header = styled.div`
    position: absolute;
    top: 19px;
    z-index: 10;
    background-color: #ffffff;
    border-radius: 12px;
    width: calc(100% - 90px);
    height: 48px;
    flex-shrink: 0;
    padding: 0px 20px;
    align-items: center;
    display: flex;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
`;

const InputStyle = styled.input`
    border: none;
    outline: none;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 21.98px;
    width: 100%;
    &::placeholder {
        color: var(--Gray-Text-1, #9a9a9a);
        font-family: Pretendard;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 21.98px;
    }
`;

const Bottom = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 100%;
    bottom: 0;
    height: 258px;
`;

const Body = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100dvh;
`;

export default DestinationPage;
