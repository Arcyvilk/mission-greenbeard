import type { ReactNode } from "react"
import "./Dialog.css"

type DialogProps = {
    children: ReactNode
    isOpen: boolean
    onClose: () => void
}
export const Dialog = ({ children, isOpen, onClose }: DialogProps) => {
    return (
        <div className="dimmer" onClick={onClose}>
            <dialog
                className="dialog"
                open={isOpen}
                onClick={(e) => { e.stopPropagation() }}
            >
                {children}
            </dialog>
        </div>
    )
}
