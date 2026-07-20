import { useState } from "react";
import SearchIcon from "@mui/icons-material/SearchOutlined";

export default function Search() {
  const [text, setText] = useState("");
  return (
    <label className="flex items-center justify-center" htmlFor="">
      <input
        type="text"
        value={text}
        name="search"
        className="w-50 rounded-4xl px-3 pl-8 transition-[border-radius,box-shadow] focus:rounded-lg"
        placeholder={"جستجو"}
        onChange={(e) => setText(e.target.value)}
      />
      <span className="text-muted -mr-8">
        <SearchIcon />
      </span>
    </label>
  );
}
