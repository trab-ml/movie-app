import React, { useEffect, useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import { CategoryFilterProps, OptionProps, retrieveCategories } from "../utils";

// A Filter-by-category component, charged to allow user filter by categories
export function CategoryFilter({ movies, onOptionsChange }: CategoryFilterProps) {
  const categories = retrieveCategories(movies);
  const [selected, setSelected] = useState([] as OptionProps[]);

  const options = categories.map(category => ({ label: category, value: category }));

  useEffect(() => {
    onOptionsChange(selected);
  }, [selected]);

  return (
    <div className="d-flex align-items-center gap-1">
      <MultiSelect
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
      />
    </div>
  );
}
