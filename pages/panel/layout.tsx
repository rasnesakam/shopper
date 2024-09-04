import {ReactNode} from "react";

export default function Layout({children}: {children: ReactNode}) {


    return <>
        <div className="w-10/12">
            selam
            {children}
        </div>
    </>
}