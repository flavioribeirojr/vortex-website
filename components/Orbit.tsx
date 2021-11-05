import { CSSProperties } from "react";
import styled from "styled-components";
import { Breakpoints } from "../styles/breakpoints";

export function Orbit(props: OrbitProps) {
    return (
        <BannerSVG className={props.className} viewBox="0 0 2694 3137" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle
                cx="2568.5"
                cy="1663.5"
                r="125.5"
                fill="url(#paint0_linear_3:20)"
            ></circle>
            <circle
                cx="1664.5"
                cy="125.5"
                r="125.5"
                fill="url(#paint1_linear_3:20)"
            ></circle>
            <circle
                cx="142"
                cy="1098"
                r="67"
                fill="url(#paint2_linear_3:20)"
            ></circle>
            <circle
                cx="844.5"
                cy="3032.5"
                r="104.5"
                fill="url(#paint3_linear_3:20)"
            ></circle>
            <circle
                cx="1998"
                cy="2818"
                r="67"
                fill="url(#paint4_linear_3:20)"
            ></circle>
            <circle
                cx="1220.5"
                cy="1672.5"
                r="1078.5"
                fill="url(#paint5_linear_3:20)"
            ></circle>
            <path
                id="ring"
                fill="url(#paint6_linear_3:20)"
                d="M2316.39 1584.7c-460.5 1231-311.5-744.995-1127 629.5-815.499 1374.5-1383.999 88.5-1126.999-629.5 257-717.996 433 683 1126.999-629.495 694-1312.5 1587.5-601.5 1127 629.495z"
            ></path>
            <defs>
                <linearGradient
                id="paint0_linear_3:20"
                x1="2443"
                x2="2614.5"
                y1="1489"
                y2="1789"
                gradientUnits="userSpaceOnUse"
                >
                <stop stopColor="#7C4CE1"></stop>
                <stop offset="0.89" stopColor="#E51199"></stop>
                </linearGradient>
                <linearGradient
                id="paint1_linear_3:20"
                x1="1539"
                x2="1710.5"
                y1="-49"
                y2="251"
                gradientUnits="userSpaceOnUse"
                >
                <stop stopColor="#7C4CE1"></stop>
                <stop offset="0.89" stopColor="#E51199"></stop>
                </linearGradient>
                <linearGradient
                id="paint2_linear_3:20"
                x1="75"
                x2="166.558"
                y1="1004.84"
                y2="1165"
                gradientUnits="userSpaceOnUse"
                >
                <stop stopColor="#7C4CE1"></stop>
                <stop offset="0.89" stopColor="#E51199"></stop>
                </linearGradient>
                <linearGradient
                id="paint3_linear_3:20"
                x1="740"
                x2="882.803"
                y1="2887.2"
                y2="3137"
                gradientUnits="userSpaceOnUse"
                >
                <stop stopColor="#7C4CE1"></stop>
                <stop offset="0.89" stopColor="#E51199"></stop>
                </linearGradient>
                <linearGradient
                id="paint4_linear_3:20"
                x1="1931"
                x2="2022.56"
                y1="2724.84"
                y2="2885"
                gradientUnits="userSpaceOnUse"
                >
                <stop stopColor="#7C4CE1"></stop>
                <stop offset="0.89" stopColor="#E51199"></stop>
                </linearGradient>
                <linearGradient
                id="paint5_linear_3:20"
                x1="659.5"
                x2="1393.5"
                y1="1926.5"
                y2="2564"
                gradientUnits="userSpaceOnUse"
                >
                <stop stopColor="#7B1BA9"></stop>
                <stop offset="1" stopColor="#FF00A4"></stop>
                </linearGradient>
                <linearGradient
                id="paint6_linear_3:20"
                x1="1130"
                x2="2497"
                y1="-42"
                y2="2421.5"
                gradientUnits="userSpaceOnUse"
                >
                <stop stopColor="#703CDE"></stop>
                <stop offset="0.484" stopColor="#E51199"></stop>
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