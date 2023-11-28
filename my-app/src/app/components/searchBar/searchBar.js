"use client"
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import SearchManuFacturer from "../searchManuFacturer/searchManuFacturer";
import SearchIcon from "@mui/icons-material/Search";
import DriveEtaOutlinedIcon from "@mui/icons-material/DriveEtaOutlined";

const SearchButton = ({ buttonClasses }) => (
  <button type="submit" className={`ml-3 z-10 ${buttonClasses} text-2xl`}>
    <SearchIcon />
  </button>
);

export default function SearchBar() {
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  const router = useRouter(); 

  const handleSearch = (e) => {
    e.preventDefault();

    if (manufacturer === "" && model === "") {
      return alert("Please fill in the search bar.");
    }
    updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
  };

  const updateSearchParams = (model, manufacturer) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }

    if (manufacturer) {
      searchParams.set("manufacturer", manufacturer);
    } else {
      searchParams.delete("manufacturer");
    }

    const newPathName = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathName);
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManuFacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton buttonClasses={"sm:hidden"} />
      </div>
      <div className="searchbar__item">
        <DriveEtaOutlinedIcon />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder=""
          className="searchbar__input"
        />
        <SearchButton buttonClasses={"sm:hidden"} />
      </div>
      <SearchButton buttonClasses={"max-sm:hidden"} />
    </form>
  );
}
