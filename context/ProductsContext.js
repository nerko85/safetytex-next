import React, { Component, createContext, useContext } from "react";
import { products } from "../data";

const ProductsContext = createContext();

class ProductsProvider extends Component {
  state = {
    products: [],
    featuredProducts: [],
    sortedProducts: [],
    isNew: "",
    type: [],
    style: [],
    minPrice: 0,
    maxPrice: 0,
    loading: true,
  };

  componentDidMount() {
    let items = this.formatData(products);
    let featuredProducts = items.filter((item) => item.featured);
    this.setState({
      products: items,
      sortedProducts: items,
      featuredProducts,
    });

    setTimeout(() => {
      this.setState({ loading: false });
    }, 2000);
  }
  

  handleChange = (e) => {
    if(!e) {
      this.setState({sortedProducts:this.formatData(products)});
      return;
    }

    const target = e.target;
    const value = target.value;
    const name = target.name;

    if (target.type === "radio") {
      let tempValue = value.split(",");
      this.setState(
        {
          minPrice: tempValue[0],
          maxPrice: tempValue[1],
        },
        this.filterProducts
      );
   
    } else {
      if (target.checked) {
        this.setState(
          { [name]: [...this.state[name], value] },
          this.filterProducts
        );
      } else {
        let tempValue = this.state[name];
        let index = tempValue.indexOf(value);
        tempValue.splice(index, 1);
        this.setState(
          {
            [name]: tempValue,
          },
          this.filterProducts
        );
      }
    }
  };

  // Returns search results - have to fill this
  handleSearch = (e) => {
    const { products } = this.state;
    var regex = new RegExp(e.target.value, "gi");
    let tempProducts;
    if (e.target.value.length) {
      tempProducts = products.filter((product) => product.name.match(regex));
    } else {
      tempProducts = products;
    }
    this.setState({
      sortedProducts: tempProducts,
    });
  };

  // formats the data from contentfull
  formatData(items) {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);
      let details = { ...item.fields, id, images };
      return details;
    });
    return tempItems;
  }

  // Getting one product for static page generation
  getProduct = (slug) => {
    const products = [...this.state.products];
    let tempProduct = products.find((room) => room.slug === slug);
    return tempProduct;
  };

  // Filtering products based on filter on the website
  filterProducts = () => {
    const { products, type, style, minPrice, maxPrice } = this.state;

    let tempProducts = [...products];

    if (type && type.length) {
      tempProducts = tempProducts.filter((product) =>
        type.includes(product.type)
      );
    }

    if (style && style.length) {
      tempProducts = tempProducts.filter((product) =>
        style.includes(product.style)
      );
    }

    if (minPrice && minPrice.length) {
      console.log(minPrice);
      tempProducts = tempProducts.filter(
        (product) => product.price > minPrice && product.price < maxPrice
      );
    }

    this.setState({
      sortedProducts: tempProducts,
    });
  };

  render() {
    return (
      <ProductsContext.Provider
        value={{
          ...this.state,
          getProduct: this.getProduct,
          handleChange: this.handleChange,
          handleSearch: this.handleSearch,
        }}
      >
        <div>{this.props.children}</div>
      </ProductsContext.Provider>
    );
  }
}

function useProducts() {
  return useContext(ProductsContext);
}

export { ProductsProvider, useProducts };
