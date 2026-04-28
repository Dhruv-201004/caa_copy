type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "items-center text-center" : "";

  return (
    <div className={`flex flex-col gap-4 ${alignClass}`}>
      {eyebrow ? (
        <span className="text-xs uppercase tracking-[0.3em] text-gold">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-3xl font-semibold text-navy-900 md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-base text-slate-600 md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
