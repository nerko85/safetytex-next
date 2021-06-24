import React from "react";
import { Sidebar as StyledSidebar } from "./Sidebar.style";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Sidebar({ categories, banner }) {
  const router = useRouter();
  const { pathname } = router;
  const regex = pathname.match(/[^/]+$/)[0];
  return (
    <StyledSidebar>
      <h3>Categories</h3>
      <div className="categories">
        {categories &&
          categories.map((category) => (
            <Link href={`/${category.fields.slug}`}>
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
    </StyledSidebar>
  );
}

Sidebar.defaultProps = {
  banner: "",
};
