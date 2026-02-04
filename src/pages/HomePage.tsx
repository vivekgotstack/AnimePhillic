import LowererHomePage from "./LowerHomePage";
import { LowerHomePage } from "./MiddleHomePage";
import { UpperHomePage } from "./UpperHomePage";

export default function HomePage() {
  return (
    <>
      <UpperHomePage />
      <LowerHomePage />
      <LowererHomePage/>
    </>
  )
}
