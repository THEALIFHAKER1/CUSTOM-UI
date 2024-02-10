interface HeadingProps {
  children: string
  subtext?: string
}

export function HeadingText({ children, subtext }: HeadingProps) {
  return (
    <div>
      <h1 className="text-[3rem] font-semibold leading-tight">{children}</h1>
      {subtext && (
        <h2 className="font-light text-zinc-500 dark:text-zinc-400">
          {subtext}
        </h2>
      )}
    </div>
  )
}
