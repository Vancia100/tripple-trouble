import { useContext, useState } from "react";
import { Player, PlayerContext } from "@/context/playercontext";
export default function Spike() {
  const player = useContext(PlayerContext);

  const [isDead, setIsDead] = useState(false);
  if (player) {
    if (player.postion.x === 0 && player.postion.y === 0) {
      player.kill();
      setIsDead(true);
    }
  }
  return <div style={{ width: "100%", height: "100%", background: isDead ? "red" : "black" }}></div>;
}