// MyComponent.js
import ReactDOM from 'react-dom';

"use client"
import React, { useState } from 'react'
import 'react-tooltip/dist/react-tooltip.css'
import './output.css';
import './input.css';
import './index.css';
import { useTable, useGlobalFilter, useSortBy, usePagination } from 'react-table'
import { AiOutlineArrowLeft, AiOutlineInfoCircle, AiOutlineShareAlt } from 'react-icons/ai';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

import axios from 'axios';
import moment from 'moment';
import { MdCopyAll, MdFirstPage, MdLastPage } from 'react-icons/md';
import copy from 'copy-to-clipboard';
import { FaWhatsapp, FaCode, FaAngleDown, FaSortUp, FaSortDown, FaSort } from 'react-icons/fa';
import { RxCross1 } from "react-icons/rx";
import { useMemo } from 'react';
import { Tooltip } from 'react-tooltip';
import { useEffect } from 'react';


let url = 'https://nextmigrant.com/timelines/study-permit/';
let iframe = `<iframe allowtransparency="true" allowfullscreen="true" src="${url}?nocontent=true" frameborder="0" style="min-width:100%; max-width:100%; height:800px; border:none; background:#FFF"> </iframe>`
const params = new URLSearchParams(window.location.search)
export default function MainComponent() {
    const [date, setDate] = useState(moment().subtract(25, 'minute'))
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(!true)
    const [mF, setMF] = useState(false)
    const [embedCode, setEmbedCode] = useState(false)
    const [copied, setCopied] = useState(false)
    const [shareOpt, setShareOpt] = useState(false)
    const [select, setSelect] = useState({
        date: 'Last_3_months',
        country: '',
        fileType: '',
        applicationType: ''
    });

    useEffect(() => {
        setMF(false)
        setLoading(true)
        axios.get(`https://api.nextmigrant.com/document-ai/get-application-timelines`)
            .then(res => {
                setData(res.data)
                setTimeout(() => setLoading(false), 500)
            })
    }, [])

    // useEffect(() => {
    //     if (params.get('nocontent')) {
    //         while (document.getElementById('nocontent')) {
    //             var element = document.getElementById('nocontent');
    //             element.parentNode.removeChild(element);
    //         }
    //     } else {
    //         document.body.id = 'body-style'
    //     }
    // })
    // useEffect(() => {
    //     if (shareOpt || mF || embedCode) {
    //         document.body.style.overflow = 'hidden'
    //     } else {
    //         document.body.style.overflow = 'unset'
    //     }
    // }, [shareOpt, mF, embedCode])



    return (
        <div className='bg-'>
            <div className='flex items-center px-4 lg:px-8 mt-10 relative'>
                <div className='text-sm px-3 py-0.5 rounded-md shadow border flex items-center lg:hidden'
                    onClick={() => setMF(pre => !pre)}>Filters <FaAngleDown className='ml-1' />
                </div>

                <div className={`${mF ? 'flex z-[10001]' : 'hidden'} flex-col lg:flex lg:flex-row  gap-4 absolute top-4 rounded-xl shadow-2xl lg:shadow-none lg:static bg-white lg:bg-transparent p-3 lg:p-0 border lg:border-0`}>
                    <select defaultValue={''}
                        onChange={(e) => setSelect(pre => ({ ...pre, date: e.target.value }))}
                        id="date" className='select-box'>
                        {[
                            { value: '', label: 'Filters' },
                        ]?.map(ele =>
                            <option key={ele.value} value={ele.value}>{ele.label}</option>
                        )}
                    </select>

                    <select defaultValue=''
                        onChange={(e) => setSelect(pre => ({ ...pre, country: e.target.value }))}
                        id="countries" className='select-box'>
                        {[
                            { value: '', label: "Analyse" },
                        ]?.map(ele =>
                            <option key={ele.value} value={ele.value}>{ele.label}</option>
                        )}
                    </select>

                </div>

                <div className='flex flex-col lg:flex-row lg:items-center items-end gap-2 lg:gap-4 ml-auto'>
                    <div className="text-xs lg:text-base font-medium text-[#13231A99] text-right" >
                        Last updated:  {moment(date).fromNow()}<br className='flex lg:hidden' /> <span className="text-[#0462FE]"
                            onClick={() => {
                                setDate(moment())
                                setLoading(true)
                                setTimeout(() => setLoading(false), 500)
                            }}> Refresh data  </span>
                    </div>

                    {<div className={`hidden lg:flex items-center border rounded-lg px-4 py-1.5 cursor-pointer bg-[#0462FE] text-white relative`}
                        onClick={() => setShareOpt(pre => !pre)}>
                        <span className="text-base font-medium " >
                            Share
                        </span>
                        <AiOutlineShareAlt className='ml-2' size={20} color={'#ffffff'} />
                        <div className={`flex-col gap-5 absolute bg-white top-6 right-6 md:right-10 w-72 md:w-80 p-4 rounded-lg shadow-lg z-[10001] border
                        ${shareOpt ? "flex" : "hidden"}`}>
                            <div className='flex items-center justify-between text-sm font-bold text-black'>
                                <div>Share</div>
                                <RxCross1 className='mr-2 cursor-pointer' color='#202020' onClick={(e) => {
                                    setShareOpt(false)
                                    e.stopPropagation()
                                }} />
                            </div>
                            {/* <div className='flex justify-between items-center border border-[#E5E7EB] p-3 rounded-md'>
                                <span className=' text-xs md:text-sm font-medium text-black'>Embed</span>
                                <MdCopyAll className='ml-auto cursor-pointer' size={20} color='#81724D' onClick={() => copy(`<div id="gcms-timelines"></div><script type="text/javascript" src="${url}.js"></script>`)} />
                            </div> */}
                            <a href={`https://api.whatsapp.com/send?text=Check out the latest GCMS notes processing times: \n${url}`} target='_blank'>
                                <div className='flex justify-between items-center border border-[#E5E7EB] p-3 rounded-md'>
                                    <span className=' text-xs md:text-sm font-medium text-black'>Share on Whatsapp</span>
                                    <FaWhatsapp className='ml-auto cursor-pointer' size={20} color='#81724D' />
                                </div>
                            </a>
                            <div className='flex justify-between items-center border border-[#E5E7EB] p-3 rounded-md'
                                onClick={(e) => {
                                    copy(url)
                                    setCopied(true)
                                    setTimeout(() => setCopied(false), 2000)
                                    e.stopPropagation()
                                }}>
                                <span className=' text-xs md:text-sm font-medium text-black'>{copied ? 'Copied!' : 'Copy link'}</span>
                                <MdCopyAll className='ml-auto cursor-pointer' size={20} color='#81724D' />
                            </div>
                            <div className='flex justify-between items-center border border-[#E5E7EB] p-3 rounded-md'
                                onClick={() => setEmbedCode(true)}>
                                <span className=' text-xs md:text-sm font-medium text-black'>Embed code</span>
                                <FaCode className='ml-auto cursor-pointer' size={20} color='#81724D' />
                            </div>
                        </div>
                    </div>}
                    {embedCode &&
                        <div className='fixed z-[10001] w-11/12 lg:w-[600px] h-auto m-auto inset-x-0 top-1/3 p-4 bg-white border rounded-lg shadow-2xl px-8 py-6'>
                            <div className='flex items-center justify-between text-base font-bold text-black'>
                                <div>Embed this on your website</div>
                                <RxCross1 className='mr-2 cursor-pointer' color='#202020' onClick={(e) => {
                                    setEmbedCode(false)
                                    e.stopPropagation()
                                }} />
                            </div>
                            <code className="block rounded-lg select-all" id='app_wizards'>
                                {iframe}
                            </code>
                            <div className='w-[120px] mt-5 mx-auto shadow  border rounded-lg px-4 pt-[1px] pb-2 cursor-pointer bg-[#0462FE] text-white text-center'
                                onClick={() => {
                                    copy(iframe)
                                    setCopied(true)
                                    setTimeout(() => {
                                        setCopied(false)
                                        setEmbedCode(false)
                                    }, 3000)
                                }}>
                                <span className=' text-xs md:text-sm font-medium'>{copied ? 'Copied!' : 'Copy'}</span>
                            </div>
                        </div>
                    }


                    {(shareOpt || mF || embedCode) && <div className="fixed top-0 bottom-0 left-0 right-0 z-[10000] bg-[#20202026] backdrop-blur-[1px]" onClick={() => {
                        setShareOpt(false)
                        setMF(false)
                        setEmbedCode(false)
                    }} />}

                </div>
            </div>

            <hr className='hidden lg:block' style={{ margin: '1rem' }} />
            {loading ?
                <div className='h-screen w-full flex justify-center pt-20'><div className='loader h-10 w-10' /></div>
                : <DetailsTable DATA={data} />}
        </div>
    )
}

// set columns 
const COLUMNS = [
    {
        "Header": "User",
        "accessor": "username",
        Cell: (ele) => <>
            <span data-tooltip-id={ele?.row?.original?.username?.replaceAll(' ', '_')}>
                {ele?.row?.original?.username?.slice(0, 5)}..
            </span>
            <Tooltip
                id={ele?.row?.original?.username?.replaceAll(' ', '_')}
                style={{
                    width: '200px',
                    background: '#ffffff',
                    color: '#000',
                    border: 'solid 1px #e5e7eb',
                    backdropFilter: 'blur(8px)',
                    maxWidth: '309px',
                    fontSize: '1.1rem',
                    borderRadius: '6px',
                    boxShadow: '0 1px 3px 0 rgb(0 0 0 / 12%), 0 1px 2px 0 rgba(0, 0, 0, 0.08)'
                }}
                place="top"
                effect="float"
                content={ele?.row?.original?.username}
            />
        </>
    },
    {
        "Header": "Application date",
        "accessor": "appDate"
    },
    {
        "Header": "Citizenship",
        "accessor": "appCitizenship"
    },
    {
        "Header": "Criminality",
        "accessor": "criminalityDate",
        Cell: (ele) => {
            return moment(ele?.row?.original?.criminalityDate).isValid() ? moment(ele?.row?.original?.criminalityDate).format('DD-MM-YYYY') : "--"
        }
    },
    {
        "Header": "Biometrics",
        "accessor": "biometricsDate"
    },
    {
        "Header": "Info sharing",
        "accessor": "infoSharingDate"
    },
    {
        "Header": "Status",
        "accessor": "appStatus"
    },
    {
        "Header": "Final decision date",
        "accessor": "finalDecisionDate"
    },
    {
        "Header": "Primary office",
        "accessor": "appPo"
    },
    {
        "Header": "Secondary office",
        "accessor": "appSo"
    },
    {
        "Header": "Final decision",
        "accessor": "finalDecision"
    },
    {
        "Header": "Destination province",
        "accessor": "destinationProvince"
    },
    {
        "Header": "Destination city",
        "accessor": "destinationCity"
    },
    {
        "Header": "School",
        "accessor": "appSchool",
        Cell: (ele) => {
            return ele?.row?.original?.appSchool?.length > 18 ? `${ele?.row?.original?.appSchool?.slice(0, 15)}...` : `${ele?.row?.original?.appSchool}`
        }
    },
    {
        "Header": "Level of study",
        "accessor": "levelOfStudy"
    },
    {
        "Header": "Field of study",
        "accessor": "fieldOfStudy"
    },
    {
        "Header": "Length of study",
        "accessor": "lengthOfStudy"
    },
    {
        "Header": "Residence country",
        "accessor": "appResidence"
    },
    {
        "Header": "Knows English",
        "accessor": "canSpeakEnglish",
        Cell: (ele) => ele ? "Yes" : "No"
    },
    {
        "Header": "Knows French",
        "accessor": "canSpeakFrench",
        Cell: (ele) => ele ? "Yes" : "No"
    },
    {
        "Header": "Residence City",
        "accessor": "appCity"
    },
    {
        "Header": "Gender",
        "accessor": "appGender"
    },
    {
        "Header": "Age",
        "accessor": "appAge"
    },
]

// for searching
// const GlobalFilter = ({ filter, setFilter }) => {
//     return (
//         <span>
//             Global Search:
//             <input value={filter || ''} onChange={e => setFilter(e.target.value)} />
//         </span>
//     )
// }

export function DetailsTable({ DATA }) {
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => DATA, []);
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        gotoPage,
        pageCount,
        // setPageSize,
        setGlobalFilter,
        state } = useTable({
            columns,
            data,
            initialState: { pageSize: 15 }
        }, useGlobalFilter, useSortBy, usePagination)

    const { pageIndex, globalFilter } = state



    return (<>
        {/* <div className="m-4 flex justify-between gap-2 items-center w-full" role="group" aria-label="Basic example">
            <select value={pageSize} onChange={e => setPageSize(e.target.value)}>
                {
                    [10, 25, 50].map(pageSize => (
                        <option key={pageSize} value={pageSize}>
                            Show {pageSize}
                        </option>
                    ))
                }
            </select>
            <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
        </div> */}
        <div className='overflow-x-auto w-full'>
            <table {...getTableProps()} className="table-auto w-full  mt-5">
                <thead>
                    {headerGroups.map((headerGroup, h) => (
                        <tr {...headerGroup.getHeaderGroupProps()} key={h}>
                            {headerGroup.headers.map((column, c) => (
                                <th {...column.getHeaderProps(
                                    [{ className: column.className },
                                    column.getSortByToggleProps(),
                                    ]
                                )} className='border-y border-blue-100 bg-[#13231A0D] p-3 pr-6 relative whitespace-nowrap' key={c}>
                                    {column.render('Header')}
                                    <div className='absolute bottom-4 end-0.5'>
                                        {column.isSorted ? (column.isSortedDesc ?
                                            <FaSortUp /> :
                                            <FaSortDown />) :
                                            <FaSort />}
                                    </div>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()} className="table-group-divider">
                    {page.map((row, r) => {
                        prepareRow(row)
                        return <tr {...row.getRowProps({
                            onClick: () => console.log(`/admin?userId=${row?.original?.id}`),
                        })} className="even:bg-[#81724D0D] border-t" key={r} >
                            {row.cells.map((cell, c) => (
                                <td {...cell.getCellProps()} className="border-b px-4 py-2.5 whitespace-nowrap" key={c}>
                                    {cell.render('Cell')}
                                </td>
                            ))}
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
        <div className="mt-6 flex justify-center gap-2 items-center w-full" role="group" aria-label="Basic example">
            <button className="btn btn-primary" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                <MdFirstPage />
            </button>
            <button className="btn btn-primary" onClick={() => previousPage()} disabled={!canPreviousPage}>
                <IoIosArrowBack />
            </button>
            <span>
                Page:{' '}
                <strong>
                    {pageIndex + 1} of {pageOptions.length}
                </strong>{' '}
            </span>
            <button className="btn btn-primary" onClick={() => nextPage()} disabled={!canNextPage}>
                <IoIosArrowForward />
            </button>
            <button className="btn btn-primary" onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                <MdLastPage />
            </button>
        </div>
    </>)
}




window.addEventListener('load', () => {
    ReactDOM.render(<MainComponent />, document.getElementById('study-permit'));
});
