import Box from "@mui/material/Box";
import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { useState } from "react";
import { renderTreeRecursive } from "./TreeRenderer";
import { useHierarchyData } from "../../hooks/useHierarchyData";
import HierarchyQuerySelector from "./QuerySelector";

export default function HierarchyTree() {
  const [queryString, setQueryString] = useState("");
  const { data, isLoading, error } = useHierarchyData(queryString);

  return (
    <Box sx={{ maxWidth: 800, margin: "0 auto", padding: 7 }}>
      <HierarchyQuerySelector onChange={setQueryString} />
      <Box sx={{ minHeight: 352, minWidth: 250, mt: 2 }}>
        {isLoading && <p>Загрузка...</p>}
        {error && <p>Ошибка при загрузке данных</p>}
        {data && <SimpleTreeView>{renderTreeRecursive(data)}</SimpleTreeView>}
      </Box>
    </Box>
  );
}
