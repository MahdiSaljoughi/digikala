import {UIProvider} from "@/Providers/UIProvider";

export function Providers({children}: { children: React.ReactNode }) {
    return (
        <UIProvider>{children}</UIProvider>
    )
}