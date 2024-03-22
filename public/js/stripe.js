// /* eslint-disable */
// import axios from 'axios';
// import { showAlert } from './alerts';
// import { loadStripe } from '@stripe/stripe-js';
// // const stripe = Stripe('pk_test_51Ox88UHA5LhUp44JVRgklanujmGm0ykdXujYaQYuihxErc1vboae8EwgYIScAQciZNUCJf0SrjAhnyoL334dCzVV004ZSCcmVb');
//
// export const bookTour = async tourId => {
//   const stripe = loadStripe('pk_test_51Ox88UHA5LhUp44JVRgklanujmGm0ykdXujYaQYuihxErc1vboae8EwgYIScAQciZNUCJf0SrjAhnyoL334dCzVV004ZSCcmVb');
//   try {
//     // 1) Get checkout session from API
//     const session = await axios(
//       `http://localhost:3000/api/v1/bookings/checkout-session/${tourId}`
//     );
//     console.log(session);
//
//     // // 2) Create checkout form + charge credit card
//     window.location.replace(session.data.session.url);
//   } catch (err) {
//     console.log(err);
//     showAlert('error', err);
//   }
// };
/* eslint-disable */
import axios from "axios";
import {showAlert} from "./alerts";

export const bookTour = async tourId => {

  const stripe = Stripe('your stripe public key');

  try {

    // 1) Get checkout session from API
    const session = await axios(`http://localhost:3000/api/v1/bookings/checkout-session/${tourId}`);

    console.log(session);


    // 2) Create checkout form + charge credit card
    // await stripe.redirectToCheckout({
    //     sessionId: session.data.session.id
    // });
    window.location.replace(session.data.session.url);

  } catch (err) {

    console.log(err);
    showAlert('error', err);
  }

};