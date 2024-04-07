import React from "react";
import { icons } from "../constants/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";

import Container from "@/components/ui/Container";

export default function SearchBar() {
  const dispatch = useDispatch();

  const handleSearchChange = (e) => {};

  return (
    <div className="border-b py-2">
      <Container className="flex items-center gap-2 py-1 justify-start">
        <FontAwesomeIcon icon={icons.search}></FontAwesomeIcon>
        <input
          type="text"
          id="search"
          placeholder="Search..."
          name="search"
          className="border-none focus:outline-none text-sm"
          onChange={handleSearchChange}
        />
      </Container>
    </div>
  );
}
