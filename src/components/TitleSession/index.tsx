type TitleSessionProps = {
  title: string;
  className?: string;
};
const TitleSession = ({ title, className }: TitleSessionProps) => {
  return <h1 className={`mb-10 text-2xl font-semibold uppercase text-title md:text-4xl ${className}`}>{title}</h1>;
};
export default TitleSession;
