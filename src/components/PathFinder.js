import "./PathFinder.css";
import Node from "./Node";
import { useState } from "react";
import Header from "./header";

const PathFinder = () => {
  const [isStart, setIsStart] = useState(false);
  const [isEnd, setIsEnd] = useState(false);
  const [isMousePressed, setMousePressed] = useState(false);
  const [start, setStart] = useState([-1, -1]);
  const [end, setEnd] = useState([-1, -1]);
  const [grid, setGrid] = useState(newgrid());
  //console.log(start, end);
  const mouseDownHandler = (row, col) => {
    setMousePressed(true);
    const gride = handleEvent([...grid], row, col);
    setGrid(gride);
  };

  const mouseUpHandler = (row, col) => {
    setMousePressed(false);
  };

  const mouseEnterHandler = (row, col) => {
    if (isMousePressed === false) return;
    const gride = handleEvent([...grid], row, col);
    setGrid(gride);
  };

  function handleEvent(grid, row, col) {
    if (
      isStart === false &&
      grid[row][col].isEnd === false &&
      grid[row][col].isWall === false
    ) {
      setIsStart(true);
      setStart([row, col]);
      grid[row][col].isWall = false;
      grid[row][col].isStart = true;
      grid[row][col].isEnd = false;
      return grid;
    } else if (
      isEnd === false &&
      grid[row][col].isStart === false &&
      grid[row][col].isWall === false
    ) {
      setIsEnd(true);
      setEnd([row, col]);
      grid[row][col].isWall = false;
      grid[row][col].isEnd = true;
      grid[row][col].istart = false;
      return grid;
    } else if (
      grid[row][col].isWall === false &&
      grid[row][col].isStart === false &&
      grid[row][col].isEnd === false
    ) {
      grid[row][col].isWall = true;
      grid[row][col].isStart = false;
      grid[row][col].isEnd = false;
      return grid;
    }

    if (isStart === true && grid[row][col].isStart === true) {
      setIsStart(false);
      setStart([-1, -1]);
      grid[row][col].isWall = false;
      grid[row][col].isStart = false;
      grid[row][col].isEnd = false;
      return grid;
    } else if (isEnd === true && grid[row][col].isEnd === true) {
      setIsEnd(false);
      setEnd([-1, -1]);
      grid[row][col].isWall = false;
      grid[row][col].isEnd = false;
      grid[row][col].isStart = false;
      return grid;
    } else if (grid[row][col].isWall === true) {
      grid[row][col].isWall = false;
      grid[row][col].isStart = false;
      grid[row][col].isEnd = false;
      return grid;
    }
    return grid;
  }

  const animateDijkstra = (visitedNodesInOrder, nodesInShortestPathOrder) => {
    for (let i = 1; i <= visitedNodesInOrder.length - 1; i++) {
      if (i === visitedNodesInOrder.length - 1) {
        setTimeout(() => {
          animateShortestPath(nodesInShortestPathOrder);
        }, 10 * i);
        return;
      }
      setTimeout(() => {
        const node = visitedNodesInOrder[i];
        document.getElementById(`node-${node.row}-${node.col}`).className =
          "node node-visited";
      }, 10 * i);
    }
  };

  const animateShortestPath = (nodesInShortestPathOrder) => {
    for (let i = 1; i < nodesInShortestPathOrder.length - 1; i++) {
      setTimeout(() => {
        const node = nodesInShortestPathOrder[i];
        document.getElementById(`node-${node.row}-${node.col}`).className =
          "node node-shortest-path";
      }, 50 * i);
    }
  };

  const ResetHandler = () => {
    console.log("hh");
    setGrid(newgrid());
    setStart([-1, -1]);
    setIsStart(false);
    setEnd([-1, -1]);
    setIsEnd(false);
    for (let i = 0; i < 20; i++) {
      for (let j = 0; j < 50; j++) {
        document.getElementById(`node-${i}-${j}`).className = "node";
      }
    }
  };

  return (
    <>
      <Header
        grid={grid}
        start={start}
        end={end}
        onAnimateShortestPath={animateDijkstra}
        onReset={ResetHandler}
      />
      <div className="grid">
        {grid.map((row, rowidx) => {
          return (
            <div key={rowidx}>
              {row.map((node, nodeidx) => {
                const { row, col, isStart, isEnd, isWall } = node;
                return (
                  <Node
                    key={nodeidx}
                    row={row}
                    col={col}
                    isStart={isStart}
                    isEnd={isEnd}
                    isWall={isWall}
                    onMouseDownHandler={(row, col) =>
                      mouseDownHandler(row, col)
                    }
                    onMouseUpHandler={(row, col) => mouseUpHandler(row, col)}
                    onMouseEnterHandler={(row, col) =>
                      mouseEnterHandler(row, col)
                    }
                  ></Node>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
};

function newgrid() {
  const grid = [];
  for (let i = 0; i < 20; i++) {
    let row = [];
    for (let j = 0; j < 50; j++) {
      row.push({
        row: i,
        col: j,
        isStart: false,
        isEnd: false,
        isWall: false,
        distance: Infinity,
        prev: null,
        isVisited: false,
      });
    }
    grid.push(row);
  }
  return grid;
}

export default PathFinder;
