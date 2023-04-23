export interface SlimeViewProps {
  letter: string;
}
export function SlimeView(props: SlimeViewProps) {
  const { letter = "slime" } = props;
  return <div className="w-8 border text-center">{letter}</div>;
}
