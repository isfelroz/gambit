'use client'
import { resolveHref } from '@/sanity/lib/utils'
import { MenuItem } from '@/types'
import clsx from 'clsx'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

export function Button({ _type, label = '', link = null, reference = null }: MenuItem) {
    const btnRef: any = useRef(null)
    const spanRef: any = useRef(null)

    const href = _type == 'external' ? link : resolveHref(reference?._type, reference?.slug)

    const handleMouseEnter = ({ offsetY, offsetX }: any) => {
        spanRef.current.style.top = offsetY + 'px'
        spanRef.current.style.left = offsetX + 'px'
        btnRef.current.classList.add('active')
    }

    const handleMouseOut = (e: any) => {
        btnRef.current.classList.remove('active')
    }

    useEffect(() => {
        const btn = btnRef.current

        btn?.addEventListener('mouseenter', handleMouseEnter)
        btn?.addEventListener('mouseleave', handleMouseOut)
        return () => {
            btn?.removeEventListener('mouseenter', handleMouseEnter)
            btn?.removeEventListener('mouseleave', handleMouseOut)
        }
    })

    return (
        <Link
            ref={btnRef}
            style={{ clipPath: 'border-box' }}
            className={clsx(
                'bg-btn-bg duration-300 group hover:text-btn-text-hover px-6 py-3 rounded-[30px] text-btn-text transition relative isolate overflow-hidden h-fit'
            )}
            href={href || '/'}
        >
            <span className="z-20 relative">{label}</span>
            <div ref={spanRef} className="absolute top-0 left-0 w-[300%] aspect-square flex">
                <span className=" w-full aspect-square scale-0 group-[&.active]:scale-100  bg-btn-bg-hover transition-all rounded-full z-10 -translate-x-1/2 -translate-y-1/2 delay-75 duration-500"></span>
            </div>
        </Link>
    )
}
