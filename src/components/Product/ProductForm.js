import React, { Component } from 'react';
import { createProduct } from '../../store/products';
import { connect } from 'react-redux';


class ProductForm extends Component {
    constructor() {
      super();
      this.state = {
        name: '',
        type: '',
        description: '',
        size: '',
        color: '',
        price: '',
        rating: ''
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(evt) {
      this.setState({
        [evt.target.name]: evt.target.value,
      });
    }
  
    async handleSubmit(evt) {
      evt.preventDefault();
        await this.props.createProduct({ ...this.state });
    }
  
    render() {
      const { name, type, description, size, color, price, rating } = this.state;
      const { handleSubmit, handleChange } = this;
      return (
        <div>
          <form onSubmit={handleSubmit}>
            <input
              name="name"
              onChange={handleChange}
              value={name}
              placeholder="Product Name"
            />

            <input
              name="type"
              onChange={handleChange}
              value={type}
              placeholder="Type"
            />      
  
            <input
              name="description"
              onChange={handleChange}
              value={description}
              placeholder="Description"
            />

            <input
              name="size"
              onChange={handleChange}
              value={size}
              placeholder="Size"
            />

            <input
              name="color"
              onChange={handleChange}
              value={color}
              placeholder="Color"
            />

            {/* <input
              name="image"
              onChange={handleChange}
              value={image}
              placeholder="Image"
            /> */}

            <input
              name="price"
              onChange={handleChange}
              value={price}
              placeholder="Price"
            />

            <input
              name="rating"
              onChange={handleChange}
              value={rating}
              placeholder="Rating"
            />
  
            <button type="submit" disabled={!name || !type || !description || !size || !color || !price || !rating}>Submit</button>
          </form>
        </div>
      );
    }
  }
  
  const mapStateToProps = (state) => state;
  
  const mapDispatchToProps = (dispatch) => {
    return {
      createProduct: (product) => {
        dispatch(createProduct(product));
      },
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(ProductForm);