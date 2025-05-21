import { TreeItem } from "@mui/x-tree-view/TreeItem";
import Tooltip from "@mui/material/Tooltip";
import { TreeNode } from "./types";

export function renderTreeRecursive(nodes: TreeNode[], parentId = "") {
  return nodes.map((node, index) => {
    const nodeId = parentId
      ? `${parentId}-${node.id ?? index}`
      : `${node.id ?? index}`;

    const label = node.tooltip ? (
      <Tooltip title={node.tooltip} placement="right" arrow>
        <span>{node.name}</span>
      </Tooltip>
    ) : (
      node.name
    );

    return (
      <TreeItem key={nodeId} itemId={nodeId} label={label}>
        {node.children ? renderTreeRecursive(node.children, nodeId) : null}
      </TreeItem>
    );
  });
}
