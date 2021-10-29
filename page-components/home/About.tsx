import styled, { css } from 'styled-components';
import { Breakpoints } from '../../styles/breakpoints';

export function About() {
    return (
        <Section>
            <Title>
                Como Funciona
            </Title>
            <AbouItem>
                <AboutItemImage
                    src="/img/user_teaching.png"
                    alt="Usuário apontando para uma tela"
                />
                <AboutItemInfo>
                    <AboutItemInfoTitle>
                        Informação Inteligível
                    </AboutItemInfoTitle>
                    <AboutItemInfoDescription>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus natus provident iure. Magni voluptate, eveniet tempora in rerum culpa omnis optio tempore a assumenda officia illum obcaecati aliquid mollitia tenetur!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit error ratione sit laboriosam ad magnam accusamus laudantium iste debitis deleniti. Dicta est explicabo in eum quaerat saepe sunt repellat officiis.
                    </AboutItemInfoDescription>
                </AboutItemInfo>
            </AbouItem>

            <AbouItem reverse>
                <AboutItemInfo>
                    <AboutItemInfoTitle>
                        Experiencia Web e Mobile
                    </AboutItemInfoTitle>
                    <AboutItemInfoDescription>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus natus provident iure. Magni voluptate, eveniet tempora in rerum culpa omnis optio tempore a assumenda officia illum obcaecati aliquid mollitia tenetur!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit error ratione sit laboriosam ad magnam accusamus laudantium iste debitis deleniti. Dicta est explicabo in eum quaerat saepe sunt repellat officiis.
                    </AboutItemInfoDescription>
                </AboutItemInfo>
                <AboutItemImage
                    src="/img/user_using_computer.png"
                    alt="Usuário sentado usando um laptop"
                />
            </AbouItem>

            <AbouItem>
                <AboutItemImage
                    src="/img/users_chatting.png"
                    alt="Pessoas conversando"
                />
                <AboutItemInfo>
                    <AboutItemInfoTitle>
                        Tenha uma solução sob medida que atenda sua necessidade
                    </AboutItemInfoTitle>
                    <AboutItemInfoDescription>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus natus provident iure. Magni voluptate, eveniet tempora in rerum culpa omnis optio tempore a assumenda officia illum obcaecati aliquid mollitia tenetur!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit error ratione sit laboriosam ad magnam accusamus laudantium iste debitis deleniti. Dicta est explicabo in eum quaerat saepe sunt repellat officiis.
                    </AboutItemInfoDescription>
                    <AboutItemInfoContactLink href="#contact">
                        ENTRE EM CONTATO
                    </AboutItemInfoContactLink>
                </AboutItemInfo>
            </AbouItem>
        </Section>
    );
}

const Section = styled.section`
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.h3`
    font-size: 15px;
    text-align: center;
    padding: 10px;
    display: inline-block;
    margin: 0 auto;
    position: relative;
    color: ${props => props.theme.text};
    margin-bottom: 40px;

    &::before {
        content: '';
        height: 1px;
        width: 110%;
        background-color: ${props => props.theme.text};
        position: absolute;
        bottom: 0;
        left: -5%;
    }
`;

const AbouItem = styled.article`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 40px;
    margin-bottom: 40px;

    @media screen and ${Breakpoints.xs} {
        display: flex;
        flex-direction: column;

        ${(props: { reverse?: boolean }) => props.reverse && css`
            flex-direction: column-reverse;
        `}
    }
`;

const AboutItemImage = styled.img`
    width: 80%;
    object-fit: contain;
    margin: 0 auto;

    @media screen and ${Breakpoints.xs} {
        width: 60%;
    }
`;

const AboutItemInfo = styled.div`
    @media screen and ${Breakpoints.xs} {
        padding: 20px;
    }
`;

const AboutItemInfoTitle = styled.p`
    font-size: 19px;
    font-weight: 900;
    color: ${props => props.theme.strongText};
    margin-bottom: 10px;
`;

const AboutItemInfoDescription = styled.p`
    font-size: 16px;
    color: ${props => props.theme.text};
    line-height: 32px;
`;

const AboutItemInfoContactLink = styled.a`
    display: inline-block;
    background-color: ${props => props.theme.secondary};
    color: white;
    font-size: 13px;
    font-weight: 700;
    margin-top: 35px;
    padding: 15px 40px;
    border-radius: 4px;

    @media screen and ${Breakpoints.xs} {
        display: block;
        text-align: center;
        margin-top: 25px;
    }
`;