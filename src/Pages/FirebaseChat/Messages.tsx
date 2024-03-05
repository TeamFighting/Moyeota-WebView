import { Image } from 'react-bootstrap';
import * as S from './style';
interface MessagesProps {
    timeStamp: string;
    message: string;
    user: {
        id: string;
        name: string;
        profileImage: string;
    };
    displayTime: boolean;
}
function Messages({ displayTime, timeStamp, message, user }: MessagesProps) {
    const { id } = JSON.parse(localStorage.getItem('myInfo') as string);
    return (
        <div>
            {id !== user.id ? (
                <div
                    style={{
                        gap: '8px',
                        alignItems: 'center',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        height: 'fit-content',
                        marginRight: '25px',
                        marginBottom: '10px',
                        marginLeft: '16px',
                    }}
                >
                    <Image
                        roundedCircle
                        style={{ borderRadius: 100, width: 32, height: 32, marginTop: 3 }}
                        src={user.profileImage}
                        alt="profile"
                    />
                    <S.YourMessage>{message}</S.YourMessage>
                    {displayTime ? (
                        <div
                            style={{
                                fontSize: '10px',
                                color: 'var(--Gray-Text-3, #7E7E7E)',
                                height: '100%',
                                verticalAlign: 'bottom',
                                display: 'flex',
                                alignItems: 'end',
                            }}
                        >
                            {timeStamp}
                        </div>
                    ) : null}
                </div>
            ) : (
                <div
                    style={{
                        gap: '8px',
                        alignItems: 'end',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        height: 'fit-content',
                        width: '100%',
                        marginBottom: '10px',
                    }}
                >
                    {displayTime ? (
                        <div
                            style={{
                                fontSize: '10px',
                                color: 'var(--Gray-Text-3, #7E7E7E)',
                                height: '100%',
                                verticalAlign: 'bottom',
                                display: 'flex',
                                alignItems: 'end',
                            }}
                        >
                            {timeStamp}
                        </div>
                    ) : null}
                    <S.MyMessage> {message}</S.MyMessage>
                </div>
            )}
        </div>
    );
}

export default Messages;