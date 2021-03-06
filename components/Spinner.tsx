import styled from 'styled-components';

export function Spinner(props: SpinnerProps) {
    const color = props.color || 'white';
    const size = props.size || 40;

    return (
        <Container size={size}>
            <Dot1 bgColor={color} />
            <Dot2 bgColor={color} />
        </Container>
    );
}

interface SpinnerProps {
    color?: string;
    size?: number;
}

const Container = styled.div`
    width: ${(props: { size: number }) => props.size}px;
    height: ${(props: { size: number }) => props.size}px;
    position: relative;
    text-align: center;

    -webkit-animation: sk-rotate 2.0s infinite linear;
    animation: sk-rotate 2.0s infinite linear;

    @-webkit-keyframes sk-rotate { 100% { -webkit-transform: rotate(360deg) }}
    @keyframes sk-rotate { 100% { transform: rotate(360deg); -webkit-transform: rotate(360deg) }}

    @-webkit-keyframes sk-bounce {
        0%, 100% { -webkit-transform: scale(0.0) }
        50% { -webkit-transform: scale(1.0) }
    }

    @keyframes sk-bounce {
        0%, 100% {
            transform: scale(0.0);
            -webkit-transform: scale(0.0);
        } 
        50% { 
            transform: scale(1.0);
            -webkit-transform: scale(1.0);
        }
    }
`;

const Dot1 = styled.div`
    width: 60%;
    height: 60%;
    display: inline-block;
    position: absolute;
    top: 0;
    background-color: ${(props: { bgColor?: string }) => props.bgColor};
    border-radius: 100%;

    -webkit-animation: sk-bounce 2.0s infinite ease-in-out;
    animation: sk-bounce 2.0s infinite ease-in-out;
`;

const Dot2 = styled.div`
    width: 60%;
    height: 60%;
    display: inline-block;
    position: absolute;
    top: 0;
    background-color: ${(props: { bgColor?: string }) => props.bgColor};
    border-radius: 100%;
    -webkit-animation: sk-bounce 2.0s infinite ease-in-out;
    animation: sk-bounce 2.0s infinite ease-in-out;

    top: auto;
    bottom: 0;
    -webkit-animation-delay: -1.0s;
    animation-delay: -1.0s;
`;