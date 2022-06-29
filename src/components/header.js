import "./header.css";
import { dijkstra } from "../algos/Dijiktras";
import { Astar } from "../algos/Astar";
import { Greedybfs } from "../algos/GreedyBfs";
import { Dfs } from "../algos/Dfs";
import { Bfs } from "../algos/Bfs";
import { getNodesInShortestPathOrder } from "../algos/getNodeInShortestPath";
import Button from "./Button";

const Header = (props) => {
  const onClickHandler = (event) => {
    if (
      props.start[0] !== -1 &&
      props.start[1] !== -1 &&
      props.end[0] !== -1 &&
      props.end[1] !== -1
    ) {
      if (event.target.outerText === "Dijiktras") {
        console.log(event.target.outerText);
        const visitedNodesInOrder = dijkstra(
          [...props.grid],
          props.grid[props.start[0]][props.start[1]],
          props.grid[props.end[0]][props.end[1]]
        );
        const nodesInShortestPathOrder = getNodesInShortestPathOrder(
          props.grid[props.end[0]][props.end[1]]
        );
        //console.log(visitedNodesInOrder, nodesInShortestPathOrder);
        props.onAnimateShortestPath(
          visitedNodesInOrder,
          nodesInShortestPathOrder
        );
      } else if (event.target.outerText === "A-Star") {
        console.log(event.target.outerText);
        const visitedNodesInOrder = Astar(
          [...props.grid],
          props.grid[props.start[0]][props.start[1]],
          props.grid[props.end[0]][props.end[1]]
        );
        const nodesInShortestPathOrder = getNodesInShortestPathOrder(
          props.grid[props.end[0]][props.end[1]]
        );
        //console.log(visitedNodesInOrder, nodesInShortestPathOrder);
        props.onAnimateShortestPath(
          visitedNodesInOrder,
          nodesInShortestPathOrder
        );
      } else if (event.target.outerText === "Greedy BFS") {
        console.log(event.target.outerText);
        const visitedNodesInOrder = Greedybfs(
          [...props.grid],
          props.grid[props.start[0]][props.start[1]],
          props.grid[props.end[0]][props.end[1]]
        );
        const nodesInShortestPathOrder = getNodesInShortestPathOrder(
          props.grid[props.end[0]][props.end[1]]
        );
        //console.log(visitedNodesInOrder, nodesInShortestPathOrder);
        props.onAnimateShortestPath(
          visitedNodesInOrder,
          nodesInShortestPathOrder
        );
      } else if (event.target.outerText === "DFS") {
        console.log(event.target.outerText);
        const visitedNodesInOrder = Dfs(
          [...props.grid],
          props.grid[props.start[0]][props.start[1]],
          props.grid[props.end[0]][props.end[1]]
        );
        const nodesInShortestPathOrder = getNodesInShortestPathOrder(
          props.grid[props.end[0]][props.end[1]]
        );
        //console.log(visitedNodesInOrder, nodesInShortestPathOrder);
        props.onAnimateShortestPath(
          visitedNodesInOrder,
          nodesInShortestPathOrder
        );
      } else if (event.target.outerText === "BFS") {
        console.log(event.target.outerText);
        const visitedNodesInOrder = Bfs(
          [...props.grid],
          props.grid[props.start[0]][props.start[1]],
          props.grid[props.end[0]][props.end[1]]
        );
        const nodesInShortestPathOrder = getNodesInShortestPathOrder(
          props.grid[props.end[0]][props.end[1]]
        );
        //console.log(visitedNodesInOrder, nodesInShortestPathOrder);
        props.onAnimateShortestPath(
          visitedNodesInOrder,
          nodesInShortestPathOrder
        );
      }
    }
  };
  return (
    <div className="headerdiv">
      <Button onClick={onClickHandler}>Dijiktras</Button>
      <Button onClick={onClickHandler}>A-Star</Button>
      <Button onClick={onClickHandler}>Greedy BFS</Button>
      <Button onClick={onClickHandler}>DFS</Button>
      <Button onClick={onClickHandler}>BFS</Button>

      <Button onClick={props.onReset}>Reset</Button>
    </div>
  );
};
export default Header;
