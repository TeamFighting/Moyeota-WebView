import styled from 'styled-components';
import { HEADER_HEIGHT } from '@constants';
import { useNavigate } from 'react-router-dom';
import SvgCancelIcon from '@assets/svg/CancelIcon';
import CheveronLeft from '@assets/svg/Chevronleft';
import ThreeDots from '@assets/svg/ThreeDots';
import EditDeleteModal from './EditDeleteBottomSheet';
import useEditDeleteBottomSheetStore from '@stores/useEditDeleteBottomSheetStore';

function FixDetailHeader({ postId }: { postId: number }) {
    const navigate = useNavigate();
    const { openEditDeleteBottomSheet } = useEditDeleteBottomSheetStore();

    const goBack = () => {
        navigate(-1);
    };

    return (
        <Header>
            <EditDeleteModal postId={postId}>
                <div></div>
            </EditDeleteModal>
            <Icon style={{ alignSelf: 'center' }} onClick={goBack}>
                <CheveronLeft width="24" height="24" />
            </Icon>
            <Icon style={{ alignSelf: 'center' }}>
                <ThreeDots onClick={openEditDeleteBottomSheet} style={{ paddingRight: '16px' }} />
                <SvgCancelIcon onClick={goBack} width="24" height="24" />
            </Icon>
        </Header>
    );
}

const Header = styled.div`
    display: flex;
    flex-direction: row;
    align-items: end;
    height: ${HEADER_HEIGHT}px;
    justify-content: space-between;
    position: fixed;
    top: 0;
    align-self: center;
    width: 92.5%;
    padding: 0 3.75%;
    background-color: white;
    z-index: 1000;
`;

const Icon = styled.div`
    cursor: pointer;
    align-self: flex-start;
`;

export default FixDetailHeader;
