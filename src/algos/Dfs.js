export function Dfs(grid, startNode, finishNode) {
    const visitedNodesInOrder = [];
    startNode.distance = 0;
    const unvisitedNodes = [];
    console.log(startNode);
    unvisitedNodes.push(grid[startNode.row][startNode.col]);
    while (!!unvisitedNodes.length) {
      //sortNodesByDistance(unvisitedNodes);
      if (unvisitedNodes.length === 0) return visitedNodesInOrder;
      const closestNode = unvisitedNodes.pop();
      console.log(closestNode);
      if (closestNode.isWall) continue;
      closestNode.isVisited = true;
      visitedNodesInOrder.push(closestNode);
      if (closestNode === finishNode) return visitedNodesInOrder;
      updateUnvisitedNeighbors(closestNode, grid,unvisitedNodes);
    }
  }
  
//   function sortNodesByDistance(unvisitedNodes) {
//     unvisitedNodes.sort((nodeA, nodeB) => nodeA.distance - nodeB.distance);
//   }
  
  function updateUnvisitedNeighbors(node, grid,unvisitedNodes) {
    const unvisitedNeighbors = getUnvisitedNeighbors(node, grid);
    for (const neighbor of unvisitedNeighbors) {
      neighbor.distance = node.distance + 1;
      neighbor.prev = node;
      unvisitedNodes.push(neighbor);
    }
    // for(let u in unvisitedNeighbors){
    //     unvisitedNodes.push(u);
    // }
  }
  
  function getUnvisitedNeighbors(node, grid) {
    const neighbors = [];
    const { col, row } = node;
    if (col > 0) neighbors.push(grid[row][col - 1]);
    if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
    if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);
    if (row > 0) neighbors.push(grid[row - 1][col]);
    return neighbors.filter((neighbor) => !neighbor.isVisited);
  }
  
  // function getAllNodes(grid) {
  //   const nodes = [];
  //   for (const row of grid) {
  //     for (const node of row) {
  //       nodes.push(node);
  //     }
  //   }
  //   return nodes;
  // }
  