import { Globe2 } from "lucide-react";

import { cn } from "@/lib/utils";

type MooseCloudLinkProps = {
    className?: string;
    style?: React.CSSProperties;
};

export function MooseCloudLink({ className, style }: MooseCloudLinkProps) {
    return (
        <a
            className={cn("inline-flex size-9 shrink-0 items-center justify-center rounded-full text-stone-600 transition hover:bg-stone-100 hover:text-stone-950 dark:text-stone-300 dark:hover:bg-stone-800 dark:hover:text-white", className)}
            style={style}
            href="https://moosecloud.cc/"
            target="_blank"
            rel="noreferrer"
            aria-label="麋鹿云官网"
            title="麋鹿云官网"
        >
            <Globe2 className="size-4" />
        </a>
    );
}
