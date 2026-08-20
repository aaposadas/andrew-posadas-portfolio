type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  variant?: "standard" | "split";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  variant = "standard",
}: SectionHeadingProps) {
  const isSplit = variant === "split";

  return (
    <div
      className={
        isSplit
          ? "flex flex-col gap-4 border-b border-zinc-800 pb-6 sm:flex-row sm:items-end sm:justify-between"
          : "max-w-2xl"
      }
    >
      <div>
        <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-green-200/85">
          {eyebrow}
        </p>
        <h2 className="mt-3 text-3xl tracking-[-0.04em] text-white sm:text-4xl">
          {title}
        </h2>
      </div>
      {description && (
        <p
          className={
            isSplit
              ? "max-w-sm text-sm leading-6 text-zinc-400"
              : "mt-5 text-base leading-7 text-zinc-400"
          }
        >
          {description}
        </p>
      )}
    </div>
  );
}
