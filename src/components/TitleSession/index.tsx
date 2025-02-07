type TitleSessionProps = {
  title: string;
  className?: string;
};
const TitleSession = ({ title, className }: TitleSessionProps) => {
  return <h1 className={`text-title mb-10 text-4xl font-semibold uppercase ${className}`}>{title}</h1>;
};
export default TitleSession;
