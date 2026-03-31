import type { IconProps } from "../svg.type"

export const InstagramIcon = ({ className }: IconProps) => {
    return (

        <>
            <svg
                width={15}
                height={15}
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={className}
            >
                <g clipPath="url(#clip0_375_17)">
                    <mask
                        id="a"
                        style={{
                            maskType: "luminance"
                        }}
                        maskUnits="userSpaceOnUse"
                        x={0}
                        y={0}
                        width={15}
                        height={15}
                    >
                        <path d="M14.5.5v14H.5V.5h14z" fill="currentColor" stroke="currentColor" />
                    </mask>
                    <g
                        mask="url(#a)"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path
                            d="M5.625 13.75h3.75c3.125 0 4.375-1.25 4.375-4.375v-3.75c0-3.125-1.25-4.375-4.375-4.375h-3.75C2.5 1.25 1.25 2.5 1.25 5.625v3.75c0 3.125 1.25 4.375 4.375 4.375z"
                            strokeWidth={1.5}
                        />
                        <path
                            d="M7.5 9.688a2.188 2.188 0 100-4.376 2.188 2.188 0 000 4.375z"
                            strokeWidth={1.5}
                        />
                        <path d="M11.023 4.375h.006" strokeWidth={2} />
                    </g>
                </g>
                <defs>
                    <clipPath id="clip0_375_17">
                        <path fill="currentColor" d="M0 0H15V15H0z" />
                    </clipPath>
                </defs>
            </svg>

        </>
    )
}

export const LinkedInIcon = ({ className }: IconProps) => {
    return (

        <>
            <svg
                width={15}
                height={15}
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={className}
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3 0a3 3 0 00-3 3v9a3 3 0 003 3h9a3 3 0 003-3V3a3 3 0 00-3-3H3zM1.5 3A1.5 1.5 0 013 1.5h9A1.5 1.5 0 0113.5 3v9a1.5 1.5 0 01-1.5 1.5H3A1.5 1.5 0 011.5 12V3zm3.75 3.75a.75.75 0 10-1.5 0v4.5a.75.75 0 001.5 0v-4.5zm.375-2.625a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0zM7.5 6a.75.75 0 01.615.32C8.5 6.114 8.928 6 9.375 6 10.995 6 12 7.444 12 8.679V11.25a.75.75 0 01-1.5 0V8.679c0-.577-.495-1.179-1.125-1.179-.393 0-.827.214-1.125.722V11.25a.75.75 0 01-1.5.001V6.751A.75.75 0 017.5 6z"
                    fill="currentColor"
                />
            </svg>
        </>
    )
}

export const EmailIcon = ({ className }: IconProps) => {
    return (

        <>
            <svg
                width={21}
                height={17}
                viewBox="0 0 21 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={className}
            >
                <g stroke="currentColor" strokeWidth={2} strokeLinecap="round">
                    <path
                        d="M2 5l6.458 4.844a3.125 3.125 0 003.75 0L18.667 5"
                        strokeLinejoin="round"
                    />
                    <path d="M17.667 1H3.083C1.933 1 1 1.933 1 3.083V13.5c0 1.15.933 2.083 2.083 2.083h14.584c1.15 0 2.083-.932 2.083-2.083V3.083c0-1.15-.933-2.083-2.083-2.083z" />
                </g>
            </svg>

        </>
    )
}