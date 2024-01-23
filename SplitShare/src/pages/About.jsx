import React from 'react';
import { useSpring, animated, config } from 'react-spring';

const About = () => {
  const fadeInAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: config.slow,
  });

  const scaleAnimation = useSpring({
    transform: 'scale(1)',
    from: { transform: 'scale(0.8)' },
    config: config.default,
  });

  return (
    <animated.div className="text-center mx-auto max-w-sm p-4 mb-8" style={{ ...fadeInAnimation, ...scaleAnimation }}>
      <div className='font-semibold'>
        <h1 className="text-2xl font-bold mb-4 text-yellow-500">
          About Us
        </h1>
        <p className="text-white mb-4">
          Welcome to our amazing SplitSpace platform! We are dedicated to providing you with the best
          property listing and management experience. Our team is passionate about connecting people with
          their dream homes and helping property owners showcase their spaces.
        </p>

        <p className="text-white mb-4">
          With a user-friendly interface and powerful features, we strive to make the process of buying,
          selling, and managing properties seamless for everyone.
        </p>
        <p className="text-white mb-4">
          Explore our website to find your perfect home or list your property with us. We're here to
          simplify the real estate journey for you!
        </p>
      </div>
    </animated.div>
  );
};

export default About;
