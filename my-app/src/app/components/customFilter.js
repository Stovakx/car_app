"use client"
import React, { useState, Fragment } from "react";
import { useRouter } from "next/navigation";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import Image from "next/image";
import { updateSearchParams } from "@/app/utils";


export default function CustomFilter({ title, options }) {
  const router = useRouter();
  // State for storing the selected option
  const [selected, setSelected] = useState(options[0].title); 

  // update the URL search parameters and navigate to the new URL
  const handleUpdateParams = (value) => {
    const newPathName = updateSearchParams(title, value.toLowerCase());
    router.push(newPathName);
  };

  return (
    <div className="w-fit">
      <FormControl>
        <Select
          labelId={`custom-filter-label-${title}`}
          id={`custom-filter-select-${title}`}
          value={selected}
          onChange={(e) => {
            setSelected(e.target.value);
            handleUpdateParams(e.target.value);
          }}
          renderValue={(value) => value}
        >
          {options.map((option) => (
            <MenuItem key={option.title} value={option.title}>
              {option.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
