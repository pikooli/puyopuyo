import Image from "next/image";

export interface SlimeProps {
  url: string;
}

export function Slime(props: SlimeProps) {
  const { url } = props;

  return <Image src={url} alt="slime" width={20} height={20} />;
}
