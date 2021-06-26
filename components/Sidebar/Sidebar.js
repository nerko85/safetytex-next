import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Sidebar as StyledSidebar,
  FilterGroup,
  Filters,
} from "./Sidebar.style";

import Input from "../../containers/Input";
import Search from "../../containers/Search";

export default function Sidebar({ categories, banner }) {
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
      <Filters>
        <form onChange={handleChange}>
          <FilterGroup>
            <h3>Tip Proizvoda</h3>
            <Search />
            <Input type="checkbox" label="Samo bluze" name="bluze" />
            <Input type="checkbox" label="Samo panatalone" name="pantalone" />
            <Input type="checkbox" label="Samo tregerice" name="tregerice" />
            <Input type="checkbox" label="Samo prsluci" name="prsluci" />
          </FilterGroup>
          <FilterGroup>
            <h3>Cijena</h3>
            <Input type="checkbox" label="Samo bluze" name="bluze" />
            <Input type="checkbox" label="Samo bluze" name="bluze" />
            <Input type="checkbox" label="Samo bluze" name="bluze" />
            <Input type="checkbox" label="Samo bluze" name="bluze" />
          </FilterGroup>
          <FilterGroup>
            <h3>Kompleti</h3>
            <Input type="checkbox" label="Urban komplet" name="urban-komplet" />
            <Input type="checkbox" label="Neon komplet" name="neon-komplet" />
            <Input
              type="checkbox"
              label="Vision komplet"
              name="vision-komplet"
            />
            <Input
              type="checkbox"
              label="Urban plus komplet"
              name="urban-plus-komplet"
            />
          </FilterGroup>
        </form>
      </Filters>
    </StyledSidebar>
  );
}

Sidebar.defaultProps = {
  banner: "",
};
