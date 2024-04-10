import type { SettingsPayload } from '@/types'
import Link from 'next/link'
// import Container from '../shared/container'
// import ButttonArrow from '../shared/button-arrow'
// import ExternalSvg from '../shared/external-svg'
// import clsx from 'clsx'

interface FooterProps {
    data: SettingsPayload
}

export default function Footer() {
    return (
        <footer className="bg-background dark overflow-hidden">
            <div className="container">
                <div className="absolute -bottom-[5%] -left-[5%] z-[-10] text-white opacity-10 w-[60%]">
                    <div className="external-svg  [&_*]:fill-current w-full">
                        <LogoFooter />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--xl-space)] py-28">
                    <div>
                        <Link href={'/'} className="flex w-fit items-center gap-8">
                            <span className="text-link-hover hover:text-link duration-500 transition text-h2">Nous suivre</span>
                        </Link>
                    </div>
                    <div>
                        <div className="flex justify-end gap-[var(--xl-space)]">
                            <div>
                                <h4 className="mb-8">Réseaux</h4>
                                <ul className="flex flex-col gap-2 text-xs">
                                    <li>
                                        <a href="#" className="text-link hover:text-link-hover uppercase transition">
                                            Instagram
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-link hover:text-link-hover uppercase transition">
                                            Facebook
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-link hover:text-link-hover uppercase transition">
                                            Linkedin
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="addresses">
                                <address>
                                    <a href="https://maps.app.goo.gl/RinCUDrLivUevvZR8" target="_blank" rel="noopener" title="Voir sur une carte">
                                        <p className="address_title as_h4">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="23" viewBox="0 0 36 23" fill="none" role="img">
                                                <title></title>
                                                <path d="M11.2667 3L1 21H23L11.2667 3Z" fill="#FFFBEF" stroke="#062E33"></path>
                                                <path
                                                    d="M23.2247 6.43447L22.3439 5.14989L21.5425 6.4855L13.1425 20.4855L12.2338 22H14H32H33.8982L32.8247 20.4345L23.2247 6.43447Z"
                                                    fill="#FFFBEF"
                                                    stroke="#062E33"
                                                    stroke-width="2"
                                                ></path>
                                                <circle cx="28" cy="3" r="3" fill="#4ADDA8"></circle>
                                            </svg>
                                            Annecy{' '}
                                        </p>

                                        <div className="address_address">
                                            5 bis avenue du Pré Closet <br />
                                            74940 Annecy{' '}
                                        </div>
                                    </a>
                                </address>

                                <address>
                                    <a href="https://maps.app.goo.gl/1M7trtwvcdMzU9LCA" target="_blank" rel="noopener" title="Voir sur une carte">
                                        <p className="address_title as_h4">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="45" viewBox="0 0 27 45" fill="none" role="img">
                                                <title></title>
                                                <path
                                                    d="M25.5882 44H1C4.66667 39.0392 13.2941 29.1176 13.2941 0C13.2941 28.9882 21.0588 38.8235 25.5882 44Z"
                                                    fill="#FFFBEF"
                                                    stroke="#062E33"
                                                ></path>
                                                <path
                                                    d="M16.5292 36.2353H10.0586C11.0235 35.1329 13.2939 25.8825 13.2939 25.8825C13.2939 25.8825 15.3372 35.085 16.5292 36.2353Z"
                                                    fill="#062E33"
                                                ></path>
                                                <path d="M16.7939 39H9.79395V44H16.7939V39Z" fill="#062E33"></path>
                                                <rect x="13" y="2" width="7" height="4" fill="#4ADDA8"></rect>
                                                <rect x="13" y="2" width="1" height="7" fill="#4ADDA8"></rect>
                                            </svg>
                                            Paris{' '}
                                        </p>

                                        <div className="address_address">
                                            15 Rue Alfred Roll <br />
                                            75017 Paris{' '}
                                        </div>
                                    </a>
                                </address>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center py-2">
                    {/* <MenuLegal menu={menu} /> */}
                    {/* <span className="text-sm text-p-color">{createby}</span> */}
                </div>
            </div>
        </footer>
    )
}

function LogoFooter() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 322.9 154.5" role="img">
            <title></title>
            <path
                id="letters-alt"
                d="M322.4,40.2c-1.3-3.1-4.8-4.5-7.9-3.2l0,0c-13,5.5-29.4,10.4-44.3,14.3c-0.7-20.7-0.8-36.4-0.8-37.1l0,0  c0-3.3-2.7-6-6-6l0,0c-3.3,0-6,2.7-6,6l0,0c-0.1,13.7-1,27.3-2.5,40.9c-14.5,3.4-25.1,5.5-25.3,5.5c-3.3,0.6-5.4,3.7-4.8,7  c0.5,2.9,3,4.9,5.9,4.9c0.4,0,0.8,0,1.1-0.1c0.9-0.2,9.4-1.8,21.4-4.6C251,82,247.7,97,242.7,109.5c-10,25-20.1,32.3-24.6,32.7  c-0.7,0.1-2.6,0.2-4.7-3.1c-2.9-4.8-5.6-12.5-8-21.9c1.5-4,2.9-8.4,4.2-13.3c5.7-21.1,9-42.8,9.9-64.6c0.3-10.4-0.2-18.8-1.6-25  c-2.5-11.4-8-14.1-12.2-14.3c-3.1-0.2-9,0.6-13.4,8c-9.5,15.8-7.2,53.3-5.8,68.6c1.2,13.4,3.3,26.7,6.3,39.9  c-5.2,12.9-9,14.1-9.1,14.1c-1.9,0-3.7-0.8-5-2.2c-5.6-5.8-7.4-21.3-7.3-29.7c0-3.3-2.6-6-5.9-6.1c-3,0-5.6,2.2-6,5.2  c-1.2,9.1-5.4,25.5-11.5,30.6c-1.9,1.6-4.6,1.7-7.2,0.3c-7.6-4-9.3-16-8.4-25c1.2-14,8.3-22,14.8-23.6c4.6-1.1,8.8,0.9,11.9,5.6  c1.8,2.8,5.5,3.6,8.3,1.8s3.6-5.5,1.8-8.3c-6-9.1-15.3-13.2-24.9-10.7c-12.8,3.2-22.4,17-23.9,34.1c-1.3,13.3,1.9,29.9,14.8,36.7  c6.9,3.7,14.8,3,20.5-1.7c3.5-3.1,6.2-7,8.1-11.2c1.4,3.8,3.5,7.4,6.3,10.4c3.5,3.7,8.4,5.9,13.6,5.9h0.1c5,0,9.6-3.1,13.9-9.3  c1.4,4.2,3.2,8.3,5.4,12.2c3.5,5.8,8.6,8.9,14.5,8.9c0.5,0,0.9,0,1.4-0.1c12.4-1,24.8-15.3,34.7-40.2c2.6-6.6,4.7-13.3,6.4-20.1  c1.4,19.2,3.3,37.6,6.2,49.8c0.7,3.2,3.9,5.3,7.2,4.5c3.2-0.7,5.3-3.9,4.5-7.2c0-0.1,0-0.1,0-0.2c-4.2-17.4-6.4-49.7-7.5-77.3  c15.9-4.1,34-9.4,48.5-15.5C322.3,46.8,323.7,43.3,322.4,40.2L322.4,40.2z M200.6,91.5c-4.4-30.7-4.9-65.6,2.2-77.3  c0.4-0.9,1.1-1.6,1.9-2.1c1.5,2.2,4.2,11.7,2.6,35C206.2,62,204,76.9,200.6,91.5z"
            ></path>
            <path
                id="letters-w"
                d="M112,52.2c-3.3,0-5.9,2.6-6,5.9c0,0.2-0.4,16.6-2.5,34.1c-3.7,31.1-9.3,37.9-11,39.2  c-0.5,0.4-0.7,0.4-0.8,0.4C82.1,130,76,97.1,75.4,74c-0.1-3.3-2.9-5.9-6.2-5.8c-2.9,0.1-5.2,2.2-5.7,5c0,0.2-2.9,16.8-7.3,33.9  c-5.5,21.4-9.9,30-12.3,33.2c-0.9-3-2.2-9.1-3-21.4C40.1,106.1,40,91,39.9,79c0-6.5-0.1-12.1-0.2-16.3c-0.2-6.1-0.3-10.5-4.7-12.1  c-4.9-1.9-9.5,1.9-16.8,10.1c-4.4,5-10.1,12-17,20.9c-2,2.7-1.5,6.5,1.2,8.5s6.5,1.5,8.5-1.2l0,0c8.1-10.6,13.5-17,17-21  c0,3.4,0.1,7.4,0.1,11.1c0.2,45.9,1.7,67.4,9.7,73.4c1.5,1.2,3.4,1.8,5.3,1.8c0.8,0,1.7-0.1,2.5-0.4c5.9-1.7,13.1-8.1,22.1-42.7  l0.2-0.8c4.5,20.5,11.6,31.4,21.8,33.3c3.8,0.7,7.6-0.3,10.5-2.8c9.6-7.9,13.4-30.7,15.3-47.2c2.1-18.1,2.5-34.4,2.6-35.1  c0.1-3.3-2.6-6.1-5.9-6.1l0,0L112,52.2z"
            ></path>
        </svg>
    )
}
