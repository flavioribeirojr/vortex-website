import { CSSProperties } from "react";
import styled from "styled-components";
import { Breakpoints } from "../styles/breakpoints";

export function Orbit(props: OrbitProps) {
    return (
        <BannerSVG className={props.className} viewBox="0 0 2694 3137" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="2568.5" cy="1663.5" r="125.5" fill="url(#paint0_linear_3:20)"/>
            <circle cx="1664.5" cy="125.5" r="125.5" fill="url(#paint1_linear_3:20)"/>
            <circle cx="142" cy="1098" r="67" fill="url(#paint2_linear_3:20)"/>
            <circle cx="844.5" cy="3032.5" r="104.5" fill="url(#paint3_linear_3:20)"/>
            <circle cx="1998" cy="2818" r="67" fill="url(#paint4_linear_3:20)"/>
            <circle id="planet" cx="1220.5" cy="1672.5" r="1078.5" fill="url(#paint5_linear_3:20)"/>
            <path id="ring" d="M2316.39 1584.7C1855.89 2815.7 2004.89 839.705 1189.39 2214.2C373.891 3588.7 -194.609 2302.7 62.3912 1584.7C319.391 866.704 495.391 2267.7 1189.39 955.205C1883.39 -357.295 2776.89 353.705 2316.39 1584.7Z" fill="url(#paint6_linear_3:20)"/>
            <defs>
            <linearGradient id="paint0_linear_3:20" x1="2443" y1="1489" x2="2614.5" y2="1789" gradientUnits="userSpaceOnUse">
            <stop stop-color="#7C4CE1"/>
            <stop offset="0.890377" stop-color="#E51199"/>
            </linearGradient>
            <linearGradient id="paint1_linear_3:20" x1="1539" y1="-49" x2="1710.5" y2="251" gradientUnits="userSpaceOnUse">
            <stop stop-color="#7C4CE1"/>
            <stop offset="0.890377" stop-color="#E51199"/>
            </linearGradient>
            <linearGradient id="paint2_linear_3:20" x1="75" y1="1004.84" x2="166.558" y2="1165" gradientUnits="userSpaceOnUse">
            <stop stop-color="#7C4CE1"/>
            <stop offset="0.890377" stop-color="#E51199"/>
            </linearGradient>
            <linearGradient id="paint3_linear_3:20" x1="740" y1="2887.2" x2="882.803" y2="3137" gradientUnits="userSpaceOnUse">
            <stop stop-color="#7C4CE1"/>
            <stop offset="0.890377" stop-color="#E51199"/>
            </linearGradient>
            <linearGradient id="paint4_linear_3:20" x1="1931" y1="2724.84" x2="2022.56" y2="2885" gradientUnits="userSpaceOnUse">
            <stop stop-color="#7C4CE1"/>
            <stop offset="0.890377" stop-color="#E51199"/>
            </linearGradient>
            <linearGradient id="paint5_linear_3:20" x1="659.5" y1="1926.5" x2="1393.5" y2="2564" gradientUnits="userSpaceOnUse">
            <stop stop-color="#7B1BA9"/>
            <stop offset="1" stop-color="#FF00A4"/>
            </linearGradient>
            <linearGradient id="paint6_linear_3:20" x1="1130" y1="-42" x2="2497" y2="2421.5" gradientUnits="userSpaceOnUse">
            <stop stop-color="#703CDE"/>
            <stop offset="0.483791" stop-color="#E51199"/>
            </linearGradient>
            </defs>
        </BannerSVG>
    );
}

interface OrbitProps {
    className?: string;
}

const BannerSVG = styled.svg`
    padding: 30px;
    overflow: visible;

    #ring {
        animation-name: spin;
        animation-duration: 20s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        animation-direction: alternate;
    }

    circle:not(#planet) {
        transform-origin: center;
        animation-name: orbit;
        animation-duration: 160s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
    }

    @keyframes spin {
        0% {
            transform: skew(0, 0);
        }

        30% {
            transform: skew(-6deg, -9deg);
        }

        50% {
            transform: skew(-5deg, -9deg);
        }

        70% {
            transform: skew(-5deg, -9deg) translate(10px, 50px);
        }

        100% {
            transform: skew(0, 0);
        }
    }

    @keyframes orbit {
        from {
            transform: rotateZ(0);
        } to {
            transform: rotateZ(360deg);
        }
    }
`;