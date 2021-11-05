import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

export function Footer() {
    return (
        <Wrapper>
            <CompanyInfo>
                <CompanyTitle>
                    VORTEX
                </CompanyTitle>
                <CompanyLinks>
                    <CompanySocialMedia
                        href="https://instagram.com"
                        target="_blank"
                    >
                        <CompanySocialMediaIcon
                            icon={faInstagram}
                        />
                    </CompanySocialMedia>

                    <CompanySocialMedia
                        href="https://wa.me/5598991198473"
                        target="_blank"
                    >
                        <CompanySocialMediaIcon
                            icon={faWhatsapp}
                        />
                    </CompanySocialMedia>
                </CompanyLinks>
                <Copyright>
                    VORTEX DIGITAL SOLUTIONS © ALL RIGHTS RESERVED
                </Copyright>
            </CompanyInfo>
        </Wrapper>
    );
}

const Wrapper = styled.footer`
    width: 100%;
    padding: 20px;
    min-height: 220px;
    background-image: url('/img/footer.png');
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    margin-top: 100px;
`;

const CompanyInfo = styled.address`
    font-style: normal;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    padding: 0 40px;
`;

const CompanyTitle = styled.h2`
    font-family: 'Fugaz One', cursive;
    color: white;
    font-size: 25px;
    letter-spacing: 3px;
`;

const CompanyLinks = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 0;
`;

const CompanySocialMedia = styled.a`
    color: white;

    &:not(:last-child) {
        margin-right: 20px;
    }
`;

const CompanySocialMediaIcon = styled(FontAwesomeIcon)`
    font-size: 30px;
    color: white;
`;

const Copyright = styled.p`
    color: white;
    font-size: 11px;
    margin-top: 10px;
`;