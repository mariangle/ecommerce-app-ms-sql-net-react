import React from "react";
import { icons } from "../constants/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";

import Container from "@/components/ui/Container";

export default function SearchBar() {
  const dispatch = useDispatch();

  const handleSearchChange = (e) => {};

  return (
    <div className="border-y py-2">
      <Container className="flex items-center gap-2 justify-start">
        <FontAwesomeIcon icon={icons.search}></FontAwesomeIcon>
        <input
          type="text"
          id="search"
          placeholder="Search..."
          name="search"
          className="border-none focus:outline-none"
          onChange={handleSearchChange}
        />
      </Container>
    </div>
  );
}
