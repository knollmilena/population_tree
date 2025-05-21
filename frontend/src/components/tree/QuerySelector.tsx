import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { useState } from "react";
import { QUERY_OPTIONS } from "../../constants/queryOptions";

interface Props {
  onChange: (query: string) => void;
}

export default function HierarchyQuerySelector({ onChange }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleChange = (event: any) => {
    const index = event.target.value;
    setSelectedIndex(index);
    onChange(QUERY_OPTIONS[index].query);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="hierarchy-query-select-label">Тип иерархии</InputLabel>
      <Select
        labelId="hierarchy-query-select-label"
        value={selectedIndex}
        label="Тип иерархии"
        onChange={handleChange}
      >
        {QUERY_OPTIONS.map((option, index) => (
          <MenuItem key={index} value={index}>
            {option.title}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
