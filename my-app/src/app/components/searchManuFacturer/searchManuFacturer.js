import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { manufacturers } from "@/app/constants";
import DriveEtaOutlinedIcon from "@mui/icons-material/DriveEtaOutlined";

export default function SearchManufacturer({ manufacturer, setManufacturer }) {
  const [query, setQuery] = useState("");


  const manufacturersProps = {
    options: manufacturers,
    getOptionLabel: (option) => option.title || option,
  };

  return (
    <div className="search-manufacturer">
      <div className="h-full flex justify-center items-center">
        <DriveEtaOutlinedIcon />
      </div>
      <div className="ms-2 mb-4">
        <Autocomplete
          {...manufacturersProps}
          className="w-32"
          value={manufacturer}
          onChange={(e) => setQuery(e.target.value)}
          renderInput={(params) => (
            <TextField {...params} label={`car brand`} variant="standard" />
          )}
        />
      </div>
    </div>
  );
}
