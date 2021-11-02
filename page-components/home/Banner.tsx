import styled from 'styled-components';
import { Breakpoints } from '../../styles/breakpoints';
import { Orbit } from '../../components/orbit';

export function Banner() {
    return (
        <Container>
            <BannerImage />
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
    height: calc(100vh - 95px);

    @media screen and ${Breakpoints.xs} {
        align-items: flex-start;
        flex-direction: column;
        height: calc(100vh - 100px);
    }
`;

const BannerImage = styled(Orbit)`
    width: 43%;

    @media screen and ${Breakpoints.xs} {
        display: block;
        width: auto;
        margin: auto;
        height: 50%;
    }
`;

const BannerInfo = styled.div`
    flex-grow: 1;
    padding-left: 160px;

    @media screen and ${Breakpoints.xs} {
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
    width: 55%;
    height: 50px;
    margin-top: 40px;
    background-color: #3AFF36;
    color: white;
    font-weight: 900;
    box-shadow: 0px 8px 25px rgb(22 227 18 / 54%);
    border-radius: 90px;
    font-size: 15px;
`;