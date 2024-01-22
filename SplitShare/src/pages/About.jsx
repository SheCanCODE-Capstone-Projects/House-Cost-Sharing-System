// About.jsx
import React from 'react';
import { useSpring, animated } from 'react-spring';

const About = () => {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 800 },
  });

  return (
    <animated.div style={fadeIn} className="container mx-auto my-10 p-8 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>
      <p className="text-gray-700 mb-6">
        Welcome to our amazing real estate platform! We are dedicated to providing you with the best
        property listing and management experience. Our team is passionate about connecting people with
        their dream homes and helping property owners showcase their spaces.
      </p>
      <p className="text-gray-700 mb-6">
        With a user-friendly interface and powerful features, we strive to make the process of buying,
        selling, and managing properties seamless for everyone.
      </p>
      <p className="text-gray-700 mb-6">
        Explore our website to find your perfect home or list your property with us. We're here to
        simplify the real estate journey for you!
      </p>
    </animated.div>
  );
};

export default About;