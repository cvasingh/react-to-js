import React from 'react'
import ReactDOM from 'react-dom';
import './output.css';
import './input.css';
import './index.css';
import { useState } from 'react';
import { IoExtensionPuzzleOutline, IoPeople } from 'react-icons/io5';
import { TbWorldCheck } from 'react-icons/tb';
import { LuBarChart4 } from 'react-icons/lu';
import { FaArrowRight, FaDropbox, FaRegFolder, FaUserCheck } from 'react-icons/fa';
import { RiDatabase2Line } from 'react-icons/ri';
import { MdAddModerator, MdKey } from 'react-icons/md';
import { IoIosExit } from 'react-icons/io';

const list = [{
    name: 'Powerful automations',
    icon: <IoExtensionPuzzleOutline className='w-6 h-6 ' />,
    image: 'https://placehold.co/300x300'
}, {
    name: 'Client portal',
    icon: <TbWorldCheck className='w-6 h-6 ' />,
    image: 'https://placehold.co/300x300'
}, {
    name: 'Reports & Invoicing',
    icon: <LuBarChart4 className='w-6 h-6 ' />,
    image: 'https://placehold.co/300x300'
}, {
    name: 'Smart forms',
    icon: <FaUserCheck className='w-6 h-6 ' />,
    image: 'https://placehold.co/300x300'
}, {
    name: 'Document management',
    icon: <FaRegFolder className='w-6 h-6 ' />,
    image: 'https://placehold.co/300x300'
}, {
    name: 'Marketing hub',
    icon: <FaDropbox className='w-6 h-6 ' />,
    image: 'https://placehold.co/300x300'
}, {
    name: 'Client messaging',
    icon: <IoPeople className='w-6 h-6 ' />,
    image: 'https://placehold.co/300x300'
}]


const list2 = [{
    name: 'Choose where your data is hosted',
    icon: <RiDatabase2Line className='w-10 min-w-10 h-10 bg-[#0F172A] text-white p-2 rounded-full' />,
    image: 'https://placehold.co/300x300'
}, {
    name: 'Control who in your team accesses client info',
    icon: <MdKey className='w-10 min-w-10 h-10 bg-[#0F172A] text-white p-2 rounded-full' />,
    image: 'https://placehold.co/300x300'
}, {
    name: 'Easily move data out of your Bridge account',
    icon: <IoIosExit className='w-10 min-w-10 h-10 bg-[#0F172A] text-white p-2 rounded-full' />,
    image: 'https://placehold.co/300x300'
}, {
    name: '2FA and OTP enabled by default',
    icon: <MdAddModerator className='w-10 min-w-10 h-10 bg-[#0F172A] text-white p-2 rounded-full' />,
    image: 'https://placehold.co/300x300'
}]

export default function MainComponent() {
    const [selected, setSelected] = useState('Powerful automations');

    return (
        <div className='max-w-screen-xl mx-auto'>
            <div className='font-bold mt-20 text-xl lg:text-6xl px-6 lg:px-12'>
                Best immigration experts use Bridge to streamline application filing
            </div>
            <div className='font-normal mt-10 text-base lg:text-3xl px-6 lg:px-12 text-[#475569]'>
                A CRM designed from the ground up by immigration experts for immigration experts. Provide your team and clients exceptional experiences.
            </div>
            <button className='mx-6 lg:mx-12 rounded-full bg-[#535DE3] text-white px-6 py-2 mt-4'>
                Request access
            </button>
            <img src='./hero-1.png' className='w-full mx-auto ' alt='banner' />

            <div className='font-bold text-center text-xl text-[#1E293B]'>
                Built for scale and security
            </div>
            <div className='grid grid-cols-4 gap-8 lg:gap-0 lg:flex items-center justify-between mt-10 px-6 lg:px-12'>
                <svg className='w-full lg:w-20 ' xmlns="http://www.w3.org/2000/svg" width="78" height="45" viewBox="0 0 78 45" fill="none">
                    <path d="M21.8045 16.3051L22.3241 18.5498C22.3241 19.298 22.5839 19.7968 23.1035 20.545V21.0439L22.8437 21.7921L21.0251 22.7897L20.5055 23.0391L19.7261 22.7897L18.6869 21.5427L17.9075 20.0462C15.8291 22.2909 13.2311 23.5379 10.3733 23.5379C8.0351 23.5379 6.21649 22.7897 5.17729 21.5427C3.87829 20.545 3.09888 18.7992 3.09888 16.8039C3.09888 14.8087 3.87829 13.0628 5.43709 11.8158C6.9959 10.3194 9.0743 9.82056 11.9321 9.82056C13.8645 9.81041 15.7887 10.0623 17.6477 10.5688V8.82293C17.6477 6.82768 17.1281 5.58065 16.3487 4.83243C15.5693 3.8348 14.2703 3.58539 12.1919 3.58539L9.3341 3.8348C8.08401 4.1412 6.86635 4.55868 5.69689 5.08183H5.17729C4.91749 5.08183 4.65769 4.83243 4.65769 4.33361V3.08658L4.91749 2.33836C4.91749 2.08895 5.17729 1.83955 5.69689 1.83955L8.8145 0.592515L12.9713 0.0937015C16.0889 0.0937015 18.1673 0.841921 19.7261 2.08895C21.0251 3.58539 21.8045 5.58065 21.8045 8.32412V16.3051ZM11.4125 20.2956L14.0105 19.7968C15.0497 19.5474 15.8291 18.7992 16.6085 18.051L17.3879 16.5545L17.6477 14.3099V13.3123C16.0274 12.9663 14.3713 12.799 12.7115 12.8134C11.1527 12.8134 9.8537 13.0628 8.8145 13.8111C8.0351 14.3099 7.7753 15.3075 7.7753 16.5545C7.7753 17.8016 8.0351 18.5498 8.5547 19.298C9.3341 19.7968 10.1135 20.2956 11.4125 20.2956ZM32.1966 22.7897L31.1574 22.5403L30.6378 21.7921L24.6623 2.33836L24.4025 1.34073L24.9222 0.841921H27.5202L28.5594 1.09133L29.079 2.08895L33.4956 18.5498L37.3926 2.08895L37.9122 1.09133L38.9514 0.841921H41.0298L42.069 1.09133L42.5886 2.08895L46.7454 18.7992L51.162 2.08895L51.6816 1.09133L52.7208 0.841921H55.059C55.5786 0.841921 55.8384 1.09133 55.8384 1.34073V1.83955L55.5786 2.33836L49.3434 21.7921L48.8238 22.7897L47.7846 23.0391H45.4464L44.4072 22.7897L44.1474 21.7921L39.9906 5.58065L36.0936 21.5427L35.574 22.5403L34.5348 22.7897H32.1966ZM65.7109 23.5379C63.2888 23.5203 60.8981 23.0103 58.6963 22.0415L57.9169 21.2933L57.657 20.7944V19.5474C57.657 19.0486 57.9169 18.7992 58.1767 18.7992H58.6963L59.4757 19.0486C61.3477 19.881 63.388 20.3068 65.4511 20.2956C67.0099 20.2956 68.3089 19.7968 69.0883 19.298C70.1275 18.7992 70.3873 18.051 70.3873 17.0533L69.8677 15.3075L67.2697 14.0605L63.3727 12.8134C61.5541 12.3146 59.9953 11.317 59.2159 10.3194C58.711 9.68446 58.3436 8.95897 58.1354 8.18565C57.9271 7.41233 57.8822 6.60682 58.0033 5.81658C58.1243 5.02634 58.4089 4.26734 58.8403 3.58432C59.2716 2.90129 59.841 2.30805 60.5149 1.83955L63.1129 0.592515C64.7816 0.0436105 66.56 -0.127115 68.3089 0.0937015C69.3619 0.286776 70.4027 0.536577 71.4265 0.841921L72.4657 1.34073L73.2451 1.83955L73.5049 2.83717V3.8348C73.5049 4.58302 73.2451 4.83243 72.9853 4.83243L71.9461 4.33361C70.3873 3.8348 68.8285 3.58539 67.0099 3.58539C65.4511 3.58539 64.1521 3.58539 63.3727 4.08421C62.5933 4.58302 62.3335 5.33124 62.3335 6.32887C62.3335 7.07709 62.5933 7.5759 63.1129 8.07471C63.6325 8.57353 64.4119 9.07234 65.9707 9.57115L69.6079 10.5688C71.4265 11.317 72.7255 12.0652 73.5049 13.0628C74.2843 14.0605 74.8039 15.3075 74.8039 16.5545L74.0245 19.5474L72.2059 21.5427C71.4265 22.2909 70.3873 22.7897 69.3481 23.0391L65.7109 23.5379Z" fill="#252F3E" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M70.6471 35.7588C60.0491 42.5539 47.3896 45.7538 34.68 44.85C21.9705 43.9462 9.94024 38.9907 0.500876 30.7707C-0.538328 30.0225 0.241075 29.2743 1.02048 29.7731C11.3423 35.3862 22.8625 38.6634 34.7035 39.355C46.5445 40.0465 58.3936 38.1341 69.3481 33.7636C70.6471 33.2648 71.9461 34.7612 70.6471 35.7588Z" fill="#FF9900" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M74.0245 31.7683C72.9853 30.5213 66.7501 31.0201 64.1521 31.5189C63.1129 31.5189 63.1129 30.7707 63.8923 30.2719C68.8285 27.0296 76.8823 28.0272 77.6617 29.0249C78.7009 30.2719 77.4019 38.0035 72.9853 41.7446C72.2059 42.2434 71.4265 41.994 71.6863 41.2458C72.9853 38.7517 75.0637 33.0154 74.0245 31.7683Z" fill="#FF9900" />
                </svg>
                <svg className='w-full lg:w-20 ' xmlns="http://www.w3.org/2000/svg" width="53" height="55" viewBox="0 0 53 55" fill="none">
                    <path d="M52.9793 12.4379L53 12.6674V24.4792C53 24.7714 52.8344 25.0636 52.5861 25.2096L42.7353 30.9277V42.2387C42.7353 42.5308 42.5904 42.823 42.3214 42.9691L21.8126 54.8644L21.6677 54.9478L21.6056 54.9687C21.4608 55.0104 21.3159 55.0104 21.171 54.9687L21.0882 54.9478L20.9641 54.8852L0.434596 42.9899C0.16556 42.823 0 42.5308 0 42.2387V6.82413L0.020695 6.59457L0.0620851 6.5111L0.12417 6.38589L0.16556 6.30241L0.248341 6.19807L0.331121 6.13546C0.372511 6.13546 0.393206 6.09372 0.434596 6.07285L10.6993 0.125213C10.9684 -0.0417378 11.2995 -0.0417378 11.5478 0.125213L21.8126 6.05198C21.854 6.05198 21.8747 6.09372 21.8954 6.11459L21.9988 6.1772C21.9988 6.21893 22.0402 6.26067 22.0609 6.28154L22.123 6.36502L22.1851 6.49023L22.2058 6.57371L22.2472 6.78239V28.9034L30.7735 23.9575V12.6674C30.7735 12.584 30.7735 12.5213 30.8149 12.4587L30.8356 12.3753L30.8977 12.2292L30.9598 12.1666L31.0219 12.0622L31.1253 11.9996L31.2081 11.9161L41.4729 5.96851C41.7212 5.82242 42.0523 5.82242 42.3007 5.96851L52.5861 11.8953L52.6896 11.9788L52.7724 12.0414L52.8551 12.1457L52.8965 12.2083C52.9379 12.25 52.9379 12.3127 52.9586 12.3544L53 12.417L52.9793 12.4379ZM51.2823 23.9784V14.17L47.7021 16.2569L42.7353 19.1159V28.9243L51.2823 23.9784ZM41.0383 41.7169V31.9086L36.1542 34.7259L22.2472 42.7395V52.6523L41.0383 41.7378V41.7169ZM1.71769 8.32669V41.7378L20.5295 52.6523V42.7395L10.6993 37.1258L10.6166 37.0423C10.5752 37.0423 10.5545 37.0214 10.5338 36.9797L10.451 36.8962L10.3889 36.8127L10.3475 36.7084L10.3061 36.6041V36.4788L10.2647 36.3745V13.2726L5.31863 10.3927L1.73838 8.30582L1.71769 8.32669ZM11.1339 1.85733L2.58688 6.845L11.1339 11.7909L19.6603 6.845L11.1339 1.85733ZM15.542 32.8268L20.5088 29.9469V8.30582L16.9285 10.3927L11.9617 13.2726V34.8928L15.542 32.8059V32.8268ZM41.8868 7.70063L33.3397 12.6674L41.8868 17.6342L50.4338 12.6674L41.8868 7.70063ZM41.0383 19.1159L36.0715 16.236L32.4912 14.1491V23.9575L37.458 26.8583L41.0383 28.9452V19.1368V19.1159ZM21.378 41.237L33.9192 34.0372L40.1691 30.4269L31.6427 25.4601L21.8126 31.1781L12.8516 36.3745L21.378 41.237Z" fill="#FF2D20" />
                </svg>
                <svg className='w-full lg:w-20 ' xmlns="http://www.w3.org/2000/svg" width="58" height="58" viewBox="0 0 58 58" fill="none">
                    <path d="M29 58C45.0163 58 58 45.0163 58 29C58 12.9837 45.0163 0 29 0C12.9837 0 0 12.9837 0 29C0 45.0163 12.9837 58 29 58Z" fill="black" />
                    <path d="M48.836 51.5065L22.0474 16.9999H17V40.9899H21.0379V22.1277L45.6664 53.9482C46.7777 53.2045 47.8364 52.3882 48.836 51.5065Z" fill="url(#paint0_linear_38_978)" />
                    <path d="M41.3334 16.9999H37.3334V40.9999H41.3334V16.9999Z" fill="url(#paint1_linear_38_978)" />
                    <defs>
                        <linearGradient id="paint0_linear_38_978" x1="33.4003" y1="32.7033" x2="51.215" y2="58.3291" gradientUnits="userSpaceOnUse">
                            <stop stop-color="white" />
                            <stop offset="1" stop-color="white" stop-opacity="0" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_38_978" x1="39.3334" y1="16.9999" x2="39.2664" y2="34.6249" gradientUnits="userSpaceOnUse">
                            <stop stop-color="white" />
                            <stop offset="1" stop-color="white" stop-opacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
                <svg className='w-full lg:w-20 ' xmlns="http://www.w3.org/2000/svg" width="60" height="59" viewBox="0 0 60 59" fill="none">
                    <path d="M55.3161 45.5944C52.0374 45.5944 49.4613 45.8296 47.3536 46.7703C46.651 47.0055 45.7142 47.0055 45.7142 47.7111L46.4168 49.1222C46.8852 49.8278 47.5878 51.0037 48.5245 51.7092L51.1007 53.5907L56.0187 55.9426L58.5948 58.0593L60 59L59.2974 57.5889L58.1265 56.413C56.9555 54.7667 55.5503 53.3555 53.911 52.1796C52.5058 51.4741 49.6955 50.0629 49.2271 48.6518H48.9929L51.8032 47.9463L56.0187 47.2407L57.8923 46.7703V46.3L55.7845 43.9481C53.911 42.0666 51.5691 40.4203 49.2271 38.774L45.0117 36.8925C44.5433 36.6574 43.6065 36.4222 43.3723 35.9518L41.733 32.8944L38.2201 25.8388L36.3465 21.1351C32.1311 14.0795 27.4472 9.84618 20.4214 5.84802C19.0163 4.90727 17.1427 4.67209 15.2692 4.20172L12.2247 3.96653L10.3511 2.55542C8.00919 1.1443 1.92017 -2.1483 0.280825 2.08505C-0.890139 4.67209 1.92018 7.25913 2.85695 8.67025L4.96468 11.7277L5.66726 13.8443C6.36984 15.7258 6.83822 17.8425 7.775 19.4888L9.18015 21.8406C9.64854 22.311 10.1169 22.5462 10.3511 23.2518C9.64854 24.1925 9.64854 25.3684 9.41435 26.3092C7.775 31.0129 8.47757 36.6574 10.5853 40.1851C11.0537 41.1259 12.693 43.4777 14.8008 42.537C16.6743 41.8314 16.2059 39.4796 16.6743 37.3629L16.9085 36.4222L18.7821 39.7148C19.953 41.8314 22.0608 43.9481 23.9343 45.3592C24.8711 46.0648 25.8078 47.2407 26.9788 47.7111L26.042 46.7703L23.9343 44.4185C22.0608 42.0666 20.6556 39.4796 19.2504 36.8925L17.6111 32.8944L16.9085 31.4833C16.2059 32.424 15.2692 33.1296 14.8008 34.3055C14.0982 35.9518 14.0982 38.3036 13.864 40.4203H13.6298C12.2247 40.1851 11.7563 38.774 11.2879 37.5981C10.1169 34.7759 9.88273 30.0721 11.0537 26.7795C11.2879 25.8388 12.4589 23.2518 11.9905 22.311C11.7563 21.6055 11.0537 21.1351 10.5853 20.6647L8.94596 17.8425L6.60403 10.7869L4.4963 7.7295C3.79372 6.55358 2.85695 5.84802 2.15437 4.4369C1.92018 3.96653 1.68598 3.26097 2.15437 2.7906L2.62275 2.32023C3.09114 1.84986 4.73049 2.32023 5.19887 2.55542C6.60403 3.26097 8.00919 3.73135 9.18015 4.67209L11.0537 6.0832H11.9905C13.3956 6.31839 14.8008 6.0832 15.9717 6.55358C18.0795 7.25913 20.1872 8.19988 21.8266 9.3758C27.213 12.6684 31.6627 17.6073 34.473 23.2518C35.1756 24.1925 35.1756 25.1332 35.6439 26.074L38.4543 32.1888C39.391 34.0703 40.0936 35.9518 41.2646 37.5981C41.9671 38.5388 44.5433 39.0092 45.48 39.4796L48.2904 40.4203L52.5058 43.2426C52.9742 43.7129 55.0819 44.8889 55.3161 45.5944Z" fill="#00546B" />
                    <path d="M13.6298 10.0814L11.9905 10.3165L13.3956 11.9628L14.3324 14.0795V13.8443C15.035 13.6091 15.2692 12.9036 15.2692 11.9628L14.8008 11.0221L13.6298 10.0814Z" fill="#00546B" />
                </svg>
                <svg className='w-full lg:w-20 ' xmlns="http://www.w3.org/2000/svg" width="67" height="57" viewBox="0 0 67 57" fill="none">
                    <path d="M64.3828 43.9147C60.7973 45.7402 42.2678 53.3549 38.3421 55.389C34.3901 57.4491 32.1917 57.4231 29.0773 55.9366C25.9629 54.4502 6.28178 46.5225 2.69627 44.8274C0.942765 43.993 0.000585923 43.2628 0.000585923 42.6108V35.8306C0.000585923 35.8306 25.6488 30.276 29.8101 28.7895C33.9452 27.3292 35.3847 27.277 38.9178 28.5548C42.4248 29.8587 63.5192 33.64 67 34.8918V41.5677C67 42.2197 66.2149 42.9498 64.3828 43.9147Z" fill="#912626" />
                    <path d="M64.3828 37.1866C60.7973 39.0382 42.2678 46.6268 38.3421 48.6609C34.3901 50.7471 32.1917 50.721 29.0773 49.2346C25.9629 47.7482 6.25561 39.8205 2.69627 38.1254C-0.836907 36.4304 -0.915422 35.2569 2.56541 33.9008C6.07241 32.5448 25.6488 24.8779 29.7839 23.3914C33.9714 21.9311 35.3847 21.8789 38.9178 23.1306C42.4248 24.4345 60.8497 31.7363 64.3305 33.0142C67.8113 34.292 67.9422 35.3351 64.3828 37.1866Z" fill="#C6302B" />
                    <path d="M64.3828 32.962C60.7973 34.8396 42.2678 42.4283 38.3421 44.4884C34.3901 46.5225 32.1917 46.4964 29.0773 45.01C25.9629 43.5496 6.25561 35.622 2.69627 33.9008C0.942765 33.0663 0.000585923 32.3361 0.000585923 31.6842V24.93C0.000585923 24.93 25.6488 19.3754 29.8101 17.889C33.9452 16.4025 35.3847 16.3504 38.9178 17.6282C42.4248 18.9321 63.5192 22.7134 67 23.9912V30.615C67 31.2669 66.2149 32.0232 64.3828 32.962Z" fill="#912626" />
                    <path d="M64.3828 26.2861C60.7973 28.1115 42.2678 35.7263 38.3421 37.7603C34.3901 39.8205 32.1917 39.7944 29.0773 38.308C25.9629 36.8215 6.28178 28.8939 2.69627 27.2249C-0.836907 25.5298 -0.915422 24.3563 2.56541 23.0263C6.07241 21.6181 25.6488 13.9251 29.7839 12.4909C33.9714 11.0044 35.3847 10.9262 38.9178 12.2301C42.4248 13.534 60.8497 20.8358 64.3305 22.0875C67.8113 23.3914 67.9422 24.4345 64.3828 26.26" fill="#C6302B" />
                    <path d="M64.3828 21.6703C60.7973 23.4957 42.2678 31.1105 38.3421 33.1446C34.3901 35.2047 32.1917 35.1786 29.0773 33.6922C25.9629 32.2057 6.28178 24.2781 2.69627 22.583C0.942765 21.7485 0.000585923 21.0183 0.000585923 20.3664V13.5861C0.000585923 13.5861 25.6488 8.03155 29.8101 6.54511C33.9452 5.08475 35.3847 5.03259 38.9178 6.31041C42.4248 7.6143 63.5192 11.3956 67 12.6734V19.3233C67 19.9752 66.2149 20.7054 64.3828 21.6703Z" fill="#912626" />
                    <path d="M64.3828 14.9683C60.7973 16.7937 42.2678 24.3824 38.3421 26.4425C34.3901 28.5027 32.1917 28.4766 29.0773 26.9641C25.9629 25.5298 6.28178 17.5761 2.69627 15.9071C-0.836907 14.212 -0.915422 13.0385 2.56541 11.6825C6.07241 10.3003 25.6488 2.63343 29.7839 1.14699C33.9714 -0.313376 35.3847 -0.365531 38.9178 0.912285C42.4248 2.21618 60.8497 9.51799 64.3305 10.7697C67.8113 12.0475 67.9422 13.1167 64.3828 14.9422" fill="#C6302B" />
                    <path d="M41.692 8.39664L35.9343 8.97035L34.6257 12.0736L32.5319 8.63134L25.9105 8.03155L30.8831 6.23217L29.3652 3.494L34.0237 5.31945L38.3944 3.88516L37.2167 6.72765L41.6659 8.39664M34.2854 23.3914L23.5551 18.9582L38.944 16.5851L34.2854 23.3653M19.3676 10.0917C23.9476 10.0917 27.6117 11.526 27.6117 13.2732C27.6117 15.0465 23.9476 16.4547 19.3938 16.4547C14.8399 16.4547 11.1497 15.0465 11.1497 13.2732C11.1497 11.526 14.8399 10.0917 19.3938 10.0917" fill="white" />
                    <path d="M48.4967 9.23113L57.5782 12.8299L48.4705 16.4025V9.23113" fill="#621B1C" />
                    <path d="M38.4206 13.195L48.4967 9.23113V16.4025L47.5021 16.7937L38.4206 13.195Z" fill="#9A2928" />
                </svg>
                <svg className='w-full lg:w-20 ' xmlns="http://www.w3.org/2000/svg" width="109" height="46" viewBox="0 0 109 46" fill="none">
                    <path d="M109 23.7678C109 15.9066 105.245 9.7036 98.0698 9.7036C90.8634 9.7036 86.5034 15.9068 86.5034 23.7065C86.5034 32.9493 91.6509 37.6169 99.0384 37.6169C102.642 37.6169 105.367 36.7878 107.425 35.621V29.4794C105.367 30.5235 103.005 31.1685 100.007 31.1685C97.0705 31.1685 94.4666 30.1243 94.1336 26.5008H108.94C108.94 26.1014 109 24.5047 109 23.7678ZM94.0427 20.8506C94.0427 17.3806 96.132 15.9372 98.0395 15.9372C99.8864 15.9372 101.855 17.3806 101.855 20.8506H94.0427ZM74.8166 9.7036C71.8491 9.7036 69.9416 11.1161 68.882 12.0989L68.4882 10.195H61.8273V46L69.3966 44.3727L69.427 35.6823C70.517 36.4808 72.1216 37.6169 74.7861 37.6169C80.2059 37.6169 85.1411 33.195 85.1411 23.4608C85.1109 14.5554 80.115 9.7036 74.8164 9.7036M72.9996 30.8612C71.2132 30.8612 70.1532 30.2165 69.4268 29.418L69.3964 18.0253C70.1836 17.1349 71.2737 16.5209 72.9996 16.5209C75.7548 16.5209 77.6623 19.6529 77.6623 23.6756C77.6623 27.7905 75.785 30.8612 72.9996 30.8612ZM51.4116 7.89186L59.0114 6.23365V0L51.4116 1.62756V7.89186ZM51.4116 10.2257H59.0114V37.0949H51.4116V10.2257ZM43.267 12.498L42.7825 10.2257H36.2425V37.0949H43.812V18.8853C45.5982 16.5209 48.6261 16.9507 49.5648 17.2884V10.2257C48.5959 9.85711 45.0534 9.18152 43.267 12.498ZM28.128 3.56215L20.7402 5.15883L20.71 29.7557C20.71 34.3007 24.0709 37.6476 28.552 37.6476C31.0348 37.6476 32.8514 37.187 33.8505 36.6343V30.4007C32.8818 30.7999 28.0977 32.2124 28.0977 27.6676V16.7664H33.8505V10.2257H28.0977L28.128 3.56215ZM7.66023 18.0253C7.66023 16.8279 8.6291 16.3671 10.2341 16.3671C12.535 16.3671 15.4416 17.0736 17.7427 18.3326V11.1161C15.2298 10.1028 12.747 9.7036 10.2341 9.7036C4.0875 9.7036 0 12.9587 0 18.3941C0 26.8692 11.5055 25.5182 11.5055 29.1725C11.5055 30.5848 10.2945 31.0456 8.59886 31.0456C6.0859 31.0456 2.87637 30.0014 0.332961 28.5889V35.8974C3.14887 37.1257 5.995 37.6476 8.59886 37.6476C14.8966 37.6476 19.2264 34.4849 19.2264 28.9882C19.1961 19.8373 7.66023 21.4646 7.66023 18.0253Z" fill="#635BFF" />
                </svg>
                <svg className='w-full lg:w-20 ' xmlns="http://www.w3.org/2000/svg" width="91" height="41" viewBox="0 0 91 41" fill="none">
                    <path d="M71.9316 17.4908L70.0437 16.7387C61.1708 36.6268 25.8731 24.5358 23.7489 30.4522C23.3948 34.4487 43.0249 31.2121 57.0584 31.8895C61.3379 32.096 63.4839 35.3141 61.6667 40.5595L65.2459 40.5705C69.3747 27.7486 82.5512 34.2921 83.1018 30.0606C82.1972 27.2783 67.9589 30.0606 71.9316 17.4908Z" fill="white" />
                    <path d="M62.6805 38.3669C63.2468 36.4865 63.058 34.6055 62.1143 33.477C61.1701 32.3484 59.8485 31.5967 58.1494 31.4083L25.2987 31.0319C25.11 31.0319 24.9212 30.8442 24.7325 30.8442C24.5437 30.6558 24.5437 30.4678 24.7325 30.2797C24.9212 29.9037 25.11 29.7153 25.4875 29.7153L58.5269 29.3392C62.4918 29.1516 66.6454 25.954 68.1554 22.1926L70.0437 17.3028C70.0437 17.1144 70.2325 16.9267 70.0437 16.7387C67.9667 7.14696 59.2822 0 49.087 0C39.6472 0 31.529 6.01806 28.697 14.4816C26.8091 13.165 24.5437 12.4125 21.9004 12.6013C17.3693 12.977 13.7822 16.7383 13.2156 21.2521C13.0269 22.3807 13.2156 23.5092 13.4047 24.6374C6.04155 24.8254 0 30.8438 0 38.3669C0 39.119 0 39.6834 0.188754 40.4356C0.188754 40.812 0.566262 41 0.755371 41H61.3589C61.7364 41 62.1143 40.8123 62.1143 40.4356L62.6805 38.3669Z" fill="#F4811F" />
                    <path d="M73.0645 17.3028H72.1203C71.9316 17.3028 71.7428 17.4904 71.5541 17.6788L70.2324 22.1926C69.6662 24.0729 69.8549 25.9543 70.7991 27.0825C71.7428 28.2111 73.0645 28.9628 74.7636 29.1516L81.7493 29.5276C81.9377 29.5276 82.1268 29.7153 82.3155 29.7153C82.5039 29.9037 82.5039 30.0917 82.3155 30.2797C82.1268 30.6562 81.938 30.8442 81.5602 30.8442L74.3861 31.2203C70.4212 31.4079 66.2679 34.6055 64.7575 38.3669L64.3797 40.0595C64.1909 40.2479 64.3797 40.6239 64.7575 40.6239H89.6787C90.0562 40.6239 90.245 40.4359 90.245 40.0598C90.6225 38.5549 91 36.8623 91 35.1696C91 25.3899 82.8818 17.3028 73.0645 17.3028Z" fill="#FAAD3F" />
                </svg>
            </div>
            <div className='flex flex-col lg:flex-row justify-between mt-24 px-6 lg:px-24'>
                <div className='font-bold text-xl lg:text-4xl text-[#1E293B] items-center'>
                    Made for modern<br />immigration consultants
                </div>
                <div className='font-normal text-sm lg:text-xl text-[#1E293B] items-center'>
                    NextMigrant® Bridge is the result of countless hours<br />spent on perfecting ssss
                </div>
            </div>
            <div className='flex flex-col lg:flex-row items-center gap-4 justify-between mt-10 px-6 lg:px-12'>
                <img src='./image-1.png' className='w-full lg:w-[30%]' alt='icon' />
                <img src='./image-2.png' className='w-full lg:w-[30%]' alt='icon' />
                <img src='./image-3.png' className='w-full lg:w-[30%]' alt='icon' />
            </div>


            <div className='font-bold text-xl lg:text-4xl px-12 text-center mt-20'>
                The only immigration CRM<br />crafted to perfection
            </div>
            <div className='grid grid-cols-2 lg:flex lg:items-center lg:justify-between mt-10 mx-6 lg:mx-12 gap-4 border p-3 rounded-2xl'>
                {list?.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => setSelected(item.name)}
                        className={`cursor-pointer flex flex-col justify-center rounded-xl w-full lg:w-[12%] p-4 ${selected === item.name ? 'bg-[#0F172A] text-white' : 'bg-white text-[#1E293B]'}`}
                    >
                        {item.icon}
                        <div className='font-medium text-base mt-4' dangerouslySetInnerHTML={{ __html: item.name?.replace(' ', '<br/>') }} />
                    </div>
                ))}
            </div>
            <div className=' px-6 lg:px-12 text-center mt-4'>
                <img src='./image-4.png' className='w-full' alt='icon' />
            </div>

            <div className='font-bold text-xl lg:text-4xl px-12 text-center mt-20'>
                Built to be secure. Inside out.
            </div>
            <div className='flex flex-col lg:flex-row justify-between mt-10 px-6 lg:px-12 gap-6 lg:gap-0'>
                <img src='./image-5.png' className='w-full lg:w-[30%]' alt='icon' />
                <div className='w-full lg:w-[65%]'>
                    <div className='font-normal text-base lg:text-2xl text-[#475569]'>
                        The simplest privacy and data protection policy you’ll ever come across. Your data belongs to you and cannot be accessed by anyone else.
                        <br />
                        <br />
                        Security and data safety is not just another feature for us, it’s a core part of the platform.
                        <br />
                        <br />
                        Our systems are designed so that your data is stored on encrypted servers and even our employees cannot access some of your most critical data.
                    </div>
                    <div className='flex items-center justify-start'>
                        <button className='rounded-full bg-[#535DE3] text-white px-6 py-2 mt-4'>
                            Request access
                        </button>
                        <button className='rounded-full text-[#8B5CF6] flex gap-2 items-center px-6 py-2 mt-4'>
                            Learn more <FaArrowRight />
                        </button>
                    </div>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row items-center justify-between mt-20 mx-6 lg:mx-12 gap-4 lg:gap-12'>
                {list2?.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => setSelected(item.name)}
                        className={`w-full lg:w-1/4 flex items-center justify-start gap-3 border rounded-lg px-4 py-2`}
                    >
                        {item.icon}
                        <div className='font-medium text-base line-clamp-2'>
                            {item.name}
                        </div>
                    </div>
                ))}
            </div>

            <div className='font-bold text-xl lg:text-4xl px-12 text-center mt-20'>
                Invoicing, reporting, and more.
            </div>
            <div className='flex flex-col lg:flex-row justify-between mt-10 px-6 lg:px-12 gap-6 lg:gap-0'>
                <div className='w-full lg:w-[30%]'>
                    <div className='font-normal text-base lg:text-2xl text-[#475569]'>
                        Generate invoices, create reports, dashboards, alerts, payment reminders and more.
                        <br />
                        <br />
                        Send automated payment reminders and contract signing requests.
                        <br />
                        <br />
                        Your clients can sign new contracts within a few clicks.
                    </div>
                    <button className='rounded-full bg-[#535DE3] text-white px-6 py-2 mt-4'>
                        Request access
                    </button>
                </div>
                <img src='./image-6.png' className='w-full lg:w-[65%]' alt='icon' />
            </div>

            <div className='font-bold text-xl lg:text-4xl px-12 text-center mt-20'>
                Keep your clients in the loop. Always.
            </div>
            <div className='flex flex-col lg:flex-row justify-between mt-10 px-6 lg:px-12 gap-6 lg:gap-0'>
                <img src='./image-7.png' className='w-full lg:w-[40%]' alt='icon' />
                <div className='w-full lg:w-[60%]'>
                    <div className='font-normal text-base lg:text-2xl text-[#475569]'>
                        Your clients can use the Bridge mobile app to keep a track of their application.
                        <br />
                        <br />
                        Create better brand awareness or send marketing notifications to your entire user-base with a few clicks.
                    </div>

                    <div className='mt-6 flex flex-col font-normal text-sm lg:text-xl text-[#475569] border rounded-2xl'>
                        <div className='flex gap-5 p-4 border-b'>
                            <div className='w-1/3'>
                                Marketing notifications
                            </div>
                            <div className='flex-1'>
                                Send bulk notifications to up-to 10000 clients with a single click.
                            </div>
                        </div>
                        <div className='flex gap-5 p-4 border-b'>
                            <div className='w-1/3'>
                                Appointments
                            </div>
                            <div className='flex-1'>
                                Your clients can book appointments from within their app. That’s Calendly for free.
                            </div>
                        </div>
                        <div className='flex gap-5 p-4'>
                            <div className='w-1/3'>
                                Document upload
                            </div>
                            <div className='flex-1'>
                                Allow your clients to upload and securely share their documents with your team.
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center justify-start'>
                        <button className='rounded-full bg-[#535DE3] text-white px-6 py-2 mt-4'>
                            Request access
                        </button>
                        <button className='rounded-full text-[#8B5CF6] flex gap-2 items-center px-6 py-2 mt-4'>
                            Learn more <FaArrowRight />
                        </button>
                    </div>
                </div>
            </div>
            <div className='h-20' />
        </div>
    )
}
window?.addEventListener('load', () => {
    ReactDOM.render(<MainComponent />, document.getElementById('home'));
});