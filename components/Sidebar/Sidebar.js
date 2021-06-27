import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Sidebar as StyledSidebar } from "./Sidebar.style";

import Filters from "../Filters";

import Input from "../../containers/Input";
import Search from "../../containers/Search";

export default function Sidebar({ categories, children }) {
  const router = useRouter();
  const { pathname } = router;
  const regex = pathname.match(/[^/]+$/)[0];

  const handleSearch = (e) => {
    console.log(e);
  };

  const handleChange = async (e) => {
    const formData = {};
    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name || !field.value) return;
      formData[field.name] = field.value;
    });

    console.log(formData);
  };
  return (
    <StyledSidebar>
      <h3>Categories</h3>
      <div className="categories">
        {categories &&
          categories.map((category) => (
            <Link
              key={category.sys.id}
              href={`/proizvodi/${category.fields.slug}`}
            >
              <a
                className={
                  regex === category.fields.slug
                    ? "category-item active"
                    : "category-item"
                }
              >
                {category.fields.name}
              </a>
            </Link>
          ))}
      </div>
      <Filters />
      {children}
    </StyledSidebar>
  );
}

Sidebar.defaultProps = {
  banner: "",
};
