import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const AddProperty = () => {
  const [name, setName] = useState('');
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [housePhoto, setHousePhoto] = useState(null);
  const [description, setDescription] = useState('');

  const formAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  const handleProfilePhotoChange = (e) => {
    const file = e.target.files[0];
    setProfilePhoto({ file, url: URL.createObjectURL(file) });
  };

  const handleHousePhotoChange = (e) => {
    const file = e.target.files[0];
    setHousePhoto({ file, url: URL.createObjectURL(file) });
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = () => {
    console.log('Form submitted!');
    console.log('Name:', name);
    console.log('Profile Photo:', profilePhoto);
    console.log('House Photo:', housePhoto);
    console.log('Description:', description);
  };

  return (
    <animated.div style={formAnimation} className='w-full min-h-screen flex justify-center items-center bg-black'>
      <div className='relative w-[520px] h-[620px] bg-yellow-500 rounded-lg p-8'>
        <h2 className='text-2xl font-bold mb-4'>Add Property</h2>

        <div className='mb-4'>
          <label htmlFor='name' className='block text-sm font-medium text-gray-700'>
            Name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            value={name}
            onChange={handleNameChange}
            className='mt-1 p-2 w-full border rounded-md'
          />
        </div>

        <div className='mb-4'>
          <label htmlFor='profilePhoto' className='block text-sm font-medium text-gray-700'>
            Profile Photo
          </label>
          {profilePhoto && (
            <div className='flex items-center mb-2'>
              <img src={profilePhoto.url} alt='Profile' className='w-10 h-10 rounded-full mr-2' />
              <span className='text-gray-700'>{profilePhoto.file.name}</span>
            </div>
          )}
          <input
            type='file'
            id='profilePhoto'
            name='profilePhoto'
            onChange={handleProfilePhotoChange}
            className='mt-1 p-2 w-full border rounded-md'
          />
        </div>

        <div className='mb-4'>
          <label htmlFor='housePhoto' className='block text-sm font-medium text-gray-700'>
            House Photo
          </label>
          {housePhoto && (
            <div className='flex items-center mb-2'>
              <img src={housePhoto.url} alt='House' className='w-10 h-10 rounded-full mr-2' />
              <span className='text-gray-700'>{housePhoto.file.name}</span>
            </div>
          )}
          <input
            type='file'
            id='housePhoto'
            name='housePhoto'
            onChange={handleHousePhotoChange}
            className='mt-1 p-2 w-full border rounded-md'
          />
        </div>

        <div className='mb-4'>
          <label htmlFor='description' className='block text-sm font-medium text-gray-700'>
            Description
          </label>
          <textarea
            id='description'
            name='description'
            value={description}
            onChange={handleDescriptionChange}
            rows='3'
            className='mt-1 p-2 w-full border rounded-md'
          ></textarea>
        </div>

        <button
          type='button'
          onClick={handleSubmit}
          className='bg-white text-black p-2 rounded-md hover:bg-yellow-800'
        >
          Submit
        </button>
      </div>
    </animated.div>
  );
};

export default AddProperty;
