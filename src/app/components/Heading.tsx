type HeadingProps = {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  additionalClass?: string;
};

const fsize = {
  1: "text-5xl",
  2: "text-4xl",
  3: "text-3xl",
  4: "text-2xl",
  5: "text-xl",
  6: "text-lg",
};

export default function Heading({ children, level = 1, additionalClass = "" }: HeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  const styles = `${fsize[level]} font-bold text-blue-400 text-center mb-8`;
  return <Tag className={`${styles} ${additionalClass}`}>{children}</Tag>;
}
