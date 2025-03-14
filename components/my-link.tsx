"use client";

import Link from "next/link"
import { usePlausible } from 'next-plausible'
import { cn } from "@/lib/utils"

type MyEvents = {
    buttonClick: { value: string }
}

type Props = {
    href: string,
    text: string,
    className?: string,
    children: React.ReactNode
}
const MyLink = ({href, text, className, children}: Props) => {
    const plausible = usePlausible<MyEvents>()

    return (
        <Link 
            href={href} 
            onClick={() => plausible("buttonClick", {props: {value: text}})}
            className={cn(className)}
            target="_blank"
            rel="noopener noreferrer"
        >
            {children}
        </Link>
    )
}

export default MyLink