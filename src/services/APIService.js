import AvailabilityResponseInStock from './mock/availabilityResponseInStock.json';
import AvailabilityResponseOutOfStock from './mock/availabilityResponseOutOfStock.json';
import AvailabilityResponseUnavailable from './mock/availabilityResponseUnavailable.json';
import CarsResponse from './mock/carsResponse.json';
import CarsResponseAvailability from './mock/carsResponseAvailability.json';
import CarsResponseName from './mock/carsResponseName.json';

/**
 * This really is a mock API Service. If there was a real API integration, I'd
 * seperate it out so that you had an API Factory which would return you a
 * real API Service or mock API Service depending on the environment settings.
 */
class APIService {
  static getAvailability(id) {
    if (id === 1) {
      return AvailabilityResponseOutOfStock;
    } else if (id === 2) {
      return AvailabilityResponseUnavailable;
    }
    return AvailabilityResponseInStock;
  }

  static getCars(order) {
    if (order === 'availability') {
      return CarsResponseAvailability;
    } else if (order === 'name') {
      return CarsResponseName;
    }
    return CarsResponse;
  }
}

export default APIService;
