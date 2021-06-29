import React, { useEffect } from "react";
import { Filters as StyledFilters, FilterGroup } from "./Filters.style";
import Input from "../../containers/Input";
import Search from "../../containers/Search";

import { useProducts } from "../../context/ProductsContext";

export default function Filters({ tp }) {
  const { handleChange, handleSearch, type, style, minPrice } = useProducts();

  useEffect(() => {
    handleChange()
  }, [])

  function renderSwitch(param) {
    switch (param) {
      case "tp":
        return (
          <FilterGroup>
            <h3>Tip Proizvoda</h3>
            <form>
              <Search onKeyUp={handleSearch} />
              <Input
                type="checkbox"
                label="Samo bluze"
                name="type"
                value="bluze"
                onChange={handleChange}
              />
              <Input
                type="checkbox"
                label="Samo pantalone"
                name="type"
                value="pantalone"
                onChange={handleChange}
              />
              <Input
                type="checkbox"
                label="Samo tregerice"
                name="type"
                value="tregerice"
                onChange={handleChange}
              />
              <Input
                type="checkbox"
                label="Samo prsluci"
                name="type"
                value="prsluci"
                onChange={handleChange}
              />
            </form>
          </FilterGroup>
        );
      case "price":
        return (
          <FilterGroup>
            <h3>Cijena</h3>
            <form>
              <Input
                type="radio"
                label="Manje od 1.300RSD"
                name="price"
                value={[0, 1300]}
                onChange={handleChange}
              />
              <Input
                type="radio"
                label="Od 1.300RSD do 3.600RSD"
                name="price"
                value={[1300, 3600]}
                onChange={handleChange}
              />
              <Input
                type="radio"
                label="Od 4.000RSD do 8.000RSD"
                name="price"
                value={[4000, 8000]}
                onChange={handleChange}
              />
              <Input
                type="radio"
                label="Od 10.500RSD do 15.000RSD"
                name="price"
                value={[10500, 150000]}
                onChange={handleChange}
              />
            </form>
          </FilterGroup>
        );
      case "fashion":
        return (
          <FilterGroup>
            <h3>Kompleti</h3>
            <form>
              <Input
                type="checkbox"
                label="Urban komplet"
                name="style"
                value="urban"
                onChange={handleChange}
              />
              <Input
                type="checkbox"
                label="Neon komplet"
                name="style"
                value="neon"
                onChange={handleChange}
              />
              <Input
                type="checkbox"
                label="Vision komplet"
                name="style"
                value="vision"
                onChange={handleChange}
              />
              <Input
                type="checkbox"
                label="Cool trend komplet"
                name="style"
                value="cool-trend"
                onChange={handleChange}
              />
            </form>
          </FilterGroup>
        );
      default:
        return (
          <>
            <form>
              <FilterGroup>
                <h3>Tip</h3>
                <Search onKeyUp={handleSearch} />
                <Input
                  type="checkbox"
                  label="Samo bluze"
                  name="type"
                  value="bluze"
                  onChange={handleChange}
                />
                <Input
                  type="checkbox"
                  label="Samo pantalone"
                  name="type"
                  value="pantalone"
                  onChange={handleChange}
                />
                <Input
                  type="checkbox"
                  label="Samo tregerice"
                  name="type"
                  value="tregerice"
                  onChange={handleChange}
                />
                <Input
                  type="checkbox"
                  label="Samo prsluci"
                  name="type"
                  value="prsluci"
                  onChange={handleChange}
                />
              </FilterGroup>
              <FilterGroup>
                <h3>Cijena</h3>
                <Input
                  type="radio"
                  label="Manje od 1.300RSD"
                  name="price"
                  value={[0, 1300]}
                  onChange={handleChange}
                />
                <Input
                  type="radio"
                  label="Od 1.300RSD do 3.600RSD"
                  name="price"
                  value={[1300, 3600]}
                  onChange={handleChange}
                />
                <Input
                  type="radio"
                  label="Od 4.000RSD do 8.000RSD"
                  name="price"
                  value={[4000, 8000]}
                  onChange={handleChange}
                />
                <Input
                  type="radio"
                  label="Od 10.500RSD do 15.000RSD"
                  name="price"
                  value={[10500, 150000]}
                  onChange={handleChange}
                />
              </FilterGroup>
              <FilterGroup>
                <h3>Kompleti</h3>
                <Input
                  type="checkbox"
                  label="Urban komplet"
                  name="style"
                  value="urban"
                  onChange={handleChange}
                />
                <Input
                  type="checkbox"
                  label="Neon komplet"
                  name="style"
                  value="neon"
                  onChange={handleChange}
                />
                <Input
                  type="checkbox"
                  label="Vision komplet"
                  name="style"
                  value="vision"
                  onChange={handleChange}
                />
                <Input
                  type="checkbox"
                  label="Cool trend komplet"
                  name="style"
                  value="cool-trend"
                  onChange={handleChange}
                />
              </FilterGroup>
            </form>
          </>
        );
    }
  }
  return <StyledFilters>{renderSwitch(type)}</StyledFilters>;
}

Filters.defaultProps = {
  tp: "",
};
