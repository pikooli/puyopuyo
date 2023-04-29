import dynamic from "next/dynamic";
import "tailwindcss/tailwind.css";

const DynamicHome = dynamic(() => import("@/game"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

export default function Home() {
  return <DynamicHome />;
}
