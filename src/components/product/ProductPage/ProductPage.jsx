import React from 'react';
// import PropTypes from 'prop-types';
import './ProductPage.scss';
import APIService from '../../../services/APIService';
import Header from '../../shared/Header/Header';
import Footer from '../../shared/Footer/Footer';

class Homepage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { order: '' };

    this.sort = this.sort.bind(this);
  }
  componentWillMount() {
    if (typeof this.state.cars === 'undefined') {
      this.setState({ cars: this.getCarsFromAPIService(this.state.order) });
    }
  }

  // These API calls would normally be wrapped in promises
  // for a proper implementation against an API
  getCarsFromAPIService(order) { // eslint-disable-line
    const cars = APIService.getCars(order).response;
    for (let i = 0; i < cars.length; i += 1) {
      cars[i].availability = APIService.getAvailability(cars[i].id).available;
    }
    return cars;
  }

  sort(event) {
    this.setState({ order: event.target.value });
    this.setState({ cars: this.getCarsFromAPIService(event.target.value) });
  }

  render() {
    return (
      <div className="Homepage">
        <Header />
        [Breadcrumb]
        [Product Info
          [Product Image]
          [Product Description]
          [Description]
          [Reviews]
          [Quantity]
          [Price]
          [Return Policy]
          [Wishlist]
          [Add to Cart]
          [OOS Notification]
          [Product Details
            [Pickup]
            [Shipping]
            [Buy In Store]
          ]
        ]
        [Recommendations
          [Product Tile
            [
              [Product Image]
              [Product Title]
              [Reviews]
              [Price]
              [Add to Cart]
            ]]
        ]
        [Product Features]
        [Product Specs]
        [Return Policy]
        [Ratings Panel]
        [Q&A]
        <Footer />
      </div>
    );
  }
}

export default Homepage;

Homepage.propTypes = {
};
