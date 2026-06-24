interface SectionHeadingProps {
  tag: string;
  title: string;
}

export default function SectionHeading({ tag, title }: SectionHeadingProps) {
  return (
    <div className="flex items-center gap-3 mb-10">
      <span className="font-mono text-sea-500 text-sm tracking-wider">
        {tag}
      </span>
      <h2 className="font-mono text-2xl md:text-3xl font-bold text-abyss-900 tracking-tight">
        {title}
      </h2>
      <div className="flex-1 h-px bg-gradient-to-r from-sea-300/50 to-transparent ml-4" />
    </div>
  );
}
