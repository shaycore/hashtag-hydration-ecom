import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createProduct } from '../../store';

class ProductForm extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            type: '',
            description: '',
            brand: '',
            size: '',
            color: '',
            image: '',
            price: ''
        }
        this.save = this.save.bind(this);
    }
    componentDidMount() {
        this.el.addEventListener('change', ev => {
            const file = ev.target.files[0];
            const reader = new FileReader();
            reader.addEventListener('load', () => {
                this.setState({ image: reader.result });
            })
            reader.readAsDataURL(file);
        })
    }
    save(ev) {
        ev.preventDefault();
        const newProduct = {
            name: this.state.name,
            type: this.state.type,
            description: this.state.description,
            brand: this.state.brand,
            size: this.state.size,
            color: this.state.color,
            image: this.state.image,
            price: this.state.price
        };
        this.props.create(newProduct);
    }
    render() {
        const { image, name, type, description, brand, size, color, price } = this.state;
        const { save } = this;
        return (
            <div className="col-lg-7 mb-5">
                <form onSubmit={ save }>
                    <div className="control-group">
                       {(image ? <img src={ image || null } style={{ height: 100, width: 100 }} />:<p className="form-control">Upload Image</p>)}
                       <input className="form-control" type='file' ref={ el => this.el = el }/><br />
                    </div>
                    <div className="control-group">
                        <input className="form-control" placeholder='Brand' value={ brand } onChange={ ev => this.setState({ brand: ev.target.value })}></input><br />
                    </div>
                    <div className="control-group">
                        <input className="form-control" placeholder='Name' value={ name } onChange={ ev => this.setState({ name: ev.target.value })}></input><br />
                    </div>
                    <div className="control-group">
                        <input className="form-control" placeholder='Type' value={ type } onChange={ ev => this.setState({ type: ev.target.value })}></input><br />
                    </div>
                    <div className="control-group">
                        <textarea className="form-control" placeholder='Description' value={ description } onChange={ ev => this.setState({ description: ev.target.value })}></textarea><br />
                    </div>
                    <div className="control-group">
                        <input className="form-control" placeholder='Size' value={ size } onChange={ ev => this.setState({ size: ev.target.value })}></input><br />
                    </div>
                    <div className="control-group">
                        <input className="form-control" placeholder='Color' value={ color } onChange={ ev => this.setState({ color: ev.target.value })}></input><br />
                    </div>
                    <div className="control-group">
                        <input className="form-control" placeholder='Price' value={ price } onChange={ ev => this.setState({ price: ev.target.value })}></input><br />
                    </div>
                    <div>
                        <button className="btn btn-primary py-2 px-4" disabled={ !name || !type || !description || !size || !color || !price }>Create</button>
                    </div>
                </form>
            </div>

        )
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        create: (product) => dispatch(createProduct(product))
    }
}

export default connect(null, mapDispatchToProps)(ProductForm);
