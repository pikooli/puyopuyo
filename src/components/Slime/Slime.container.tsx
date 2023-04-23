import { SlimeView, SlimeViewProps } from "./Slime.view";

interface SlimeProps extends SlimeViewProps {}

export function Slime(props: SlimeProps) {
  return <SlimeView {...props} />;
}
