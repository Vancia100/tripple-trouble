import { useEffect, useContext, useRef, useCallback } from 'react';
import { BlockContext } from '../../context/blockContext';
import { PlayerContext } from '../../context/playerContext';
import icon from '../../assets/treadmill.png';

export default function Treadmill(props: {
  position: { x: number, y: number },
  width:number
  direction: { x: number, y: number }
}){
  const blocks = useContext(BlockContext)
  const players = useContext(PlayerContext)
  const movePlayers = useRef<() => void>(() => {});

  movePlayers.current = useCallback(() => {
    if (!players) return;
    for (const player of Object.values(players)) {
      if (player.position.x === props.position.x && player.position.y === props.position.y) {
        player.setPosition(prev => {
          return {
            x: prev.x + props.direction.x,
            y: prev.y + props.direction.y
          };
        });
      }
    }
  }, [players]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (movePlayers.current) movePlayers.current();
    }, 1000);

    blocks.setBlocks(prev => {
      if (!prev[props.position.x]) prev[props.position.x] = {};
      prev[props.position.x][props.position.y] = {
        passable: true
      };
      return prev;
    });

    return () => clearInterval(interval);
  }, []);

  return (
    <img src={icon} style={{ display: "block" }} width={props.width} height={props.width}></img>
  )
}