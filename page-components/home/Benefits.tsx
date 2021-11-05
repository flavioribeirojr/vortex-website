import styled from 'styled-components';
import { CreativeIdeaSVG } from '../../assets/svg/CreativeIdea';
import { GrowthSVG } from '../../assets/svg/Growth';
import { UserExperienceSVG } from '../../assets/svg/UserExperience';
import { WorkflowSVG } from '../../assets/svg/Workflow';
import { Breakpoints } from '../../styles/breakpoints';

export function Benefits() {
    return (
        <Container>
            <Title>
                Vantagens
            </Title>
            <BenefitsWrapper>
                <Benefit>
                    <BenefitIcon>
                        <GrowthSVG />
                    </BenefitIcon>
                    <BenefitInfo>
                        <BenefitInfoTitle>
                            Crescimento do seu Negócio
                        </BenefitInfoTitle>
                        <BenefitInfoDescription>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti labore accusamus, nobis nesciunt sit molestiae aliquid nisi esse quis consequuntur soluta ratione unde quibusdam sapiente sed ad iste itaque maiores.
                        </BenefitInfoDescription>
                    </BenefitInfo>
                </Benefit>
                <Benefit>
                    <BenefitIcon>
                        <UserExperienceSVG />
                    </BenefitIcon>
                    <BenefitInfo>
                        <BenefitInfoTitle>
                            Experiência Desktop, Mobile e Web
                        </BenefitInfoTitle>
                        <BenefitInfoDescription>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti labore accusamus, nobis nesciunt sit molestiae aliquid nisi esse quis consequuntur soluta ratione unde quibusdam sapiente sed ad iste itaque maiores.
                        </BenefitInfoDescription>
                    </BenefitInfo>
                </Benefit>
                <Benefit>
                    <BenefitIcon>
                        <WorkflowSVG />
                    </BenefitIcon>
                    <BenefitInfo>
                        <BenefitInfoTitle>
                            Otimização do Fluxo de Trabalho
                        </BenefitInfoTitle>
                        <BenefitInfoDescription>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti labore accusamus, nobis nesciunt sit molestiae aliquid nisi esse quis consequuntur soluta ratione unde quibusdam sapiente sed ad iste itaque maiores.
                        </BenefitInfoDescription>
                    </BenefitInfo>
                </Benefit>
                <Benefit>
                    <BenefitIcon>
                        <CreativeIdeaSVG />
                    </BenefitIcon>
                    <BenefitInfo>
                        <BenefitInfoTitle>
                            Soluções criativas para problemas modernos
                        </BenefitInfoTitle>
                        <BenefitInfoDescription>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti labore accusamus, nobis nesciunt sit molestiae aliquid nisi esse quis consequuntur soluta ratione unde quibusdam sapiente sed ad iste itaque maiores.
                        </BenefitInfoDescription>
                    </BenefitInfo>
                </Benefit>
            </BenefitsWrapper>
        </Container>
    );
}

const Container = styled.section`
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
    color: ${props => props.theme.strongText};
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

const BenefitsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 60px;
    row-gap: 90px;

    @media screen and ${Breakpoints.xs} {
        display: block;
    }
`;

const Benefit = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and ${Breakpoints.xs} {
        margin-bottom: 30px;
    }
`;

const BenefitIcon = styled.div`
    svg {
        width: 90px;
        height: 90px;
        object-fit: contain;
    }
`;

const BenefitInfo = styled.div`
    margin-top: 20px;
`;

const BenefitInfoTitle = styled.h4`
    color: ${props => props.theme.strongText};
    font-weight: 600;
    font-size: 22px;
    margin-bottom: 4px;
    text-align: center;
`;

const BenefitInfoDescription = styled.p`
    color: ${props => props.theme.text};
    font-weight: 300;
    font-size: 17px;
    line-height: 32px;
    text-align: center;
`;