import React from "react";
import { Filters as StyledFilters, FilterGroup } from "./Filters.style";
import Input from "../../containers/Input";
import Search from "../../containers/Search";

export default function Filters(type) {
  const handleSearch = (e) => {
    console.log(e);
  };

  const handleChange = (e) => {
    console.log(e);
  };
  function renderSwitch(param) {
    switch (param) {
      case "type":
        <FilterGroup>
          <h3>Tip Proizvoda</h3>
          <form onChange={handleChange}>
            <Search />
            <Input type="checkbox" label="Samo bluze" name="bluze" />
            <Input type="checkbox" label="Samo bluze" name="bluze" />
            <Input type="checkbox" label="Samo bluze" name="bluze" />
            <Input type="checkbox" label="Samo bluze" name="bluze" />
          </form>
        </FilterGroup>;
        break;
      case "price":
        <FilterGroup>
          <h3>Cijena</h3>
          <form onChange={handleChange}>
            <Input type="checkbox" label="Samo bluze" name="bluze" />
            <Input type="checkbox" label="Samo bluze" name="bluze" />
            <Input type="checkbox" label="Samo bluze" name="bluze" />
            <Input type="checkbox" label="Samo bluze" name="bluze" />
          </form>
        </FilterGroup>;
        break;
      case "fashion":
        <FilterGroup>
          <h3>Kompleti</h3>
          <form onChange={handleChange}>
            <Input type="checkbox" label="Samo bluze" name="bluze" />
            <Input type="checkbox" label="Samo bluze" name="bluze" />
            <Input type="checkbox" label="Samo bluze" name="bluze" />
            <Input type="checkbox" label="Samo bluze" name="bluze" />
          </form>
        </FilterGroup>;
        break;
      default:
        <>
          <FilterGroup>
            <h3>Tip Proizvoda</h3>
            <form onChange={handleChange}>
              <Search />
              <Input type="checkbox" label="Samo bluze" name="bluze" />
              <Input type="checkbox" label="Samo bluze" name="bluze" />
              <Input type="checkbox" label="Samo bluze" name="bluze" />
              <Input type="checkbox" label="Samo bluze" name="bluze" />
            </form>
          </FilterGroup>
          <FilterGroup>
            <h3>Cijena</h3>
            <form onChange={handleChange}>
              <Input type="checkbox" label="Samo bluze" name="bluze" />
              <Input type="checkbox" label="Samo bluze" name="bluze" />
              <Input type="checkbox" label="Samo bluze" name="bluze" />
              <Input type="checkbox" label="Samo bluze" name="bluze" />
            </form>
          </FilterGroup>
          <FilterGroup>
            <h3>Kompleti</h3>
            <form onChange={handleChange}>
              <Input type="checkbox" label="Samo bluze" name="bluze" />
              <Input type="checkbox" label="Samo bluze" name="bluze" />
              <Input type="checkbox" label="Samo bluze" name="bluze" />
              <Input type="checkbox" label="Samo bluze" name="bluze" />
            </form>
          </FilterGroup>
        </>;
    }
  }
  return <StyledFilters>{renderSwitch(type)}</StyledFilters>;
}
