import styled from 'styled-components';
import Image from 'next/image';
import BannerImageFile from '../../public/img/creative_solutions.png';

export function Banner() {
    return (
        <Container>
            <BannerImage
                src="/img/creative_solutions.png"
                alt="Funny shape"
            />
            <BannerInfo>
                <Title>
                    Soluções Criativas Para Seu Negócio
                </Title>
                <Description>
                    Impulsione seu negócio usando as melhores soluções do mercado.
                </Description>
                <GetStartedLink>
                    SAIBA MAIS
                </GetStartedLink>
            </BannerInfo>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 90vh;

    @media(max-width: 940px) {
        align-items: flex-start;
        flex-direction: column;
        height: calc(100vh - 100px);
    }
`;

const BannerImage = styled.img`
    width: 40%;

    @media(max-width: 940px) {
        display: block;
        width: auto;
        margin: auto;
        height: 50%;
    }
`;

const BannerInfo = styled.div`
    flex-grow: 1;
    padding-left: 160px;

    @media(max-width: 940px) {
        padding: 0 15px;
        display: flex;
        flex-grow: 0;
        flex-direction: column;
        justify-content: flex-end;
    }
`;

const Title = styled.h2`
    color: ${props => props.theme.strongText};
    font-weight: 800;
    font-size: 30px;
    margin-bottom: 8px;
`;

const Description = styled.p`
    font-size: 24px;
    font-weight: 100;
    line-height: 38px;
    color: ${props => props.theme.text};
`;

const GetStartedLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    border-radius: 5px;
    background-color: ${props => props.theme.primary};
    color: white;
    font-weight: 700;
    margin-top: 40px;
`;