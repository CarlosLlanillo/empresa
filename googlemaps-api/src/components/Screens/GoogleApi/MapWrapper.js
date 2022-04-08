import React from 'react';
import { Wrapper, Status } from '@googlemaps/react-wrapper';
import { Box } from '@material-ui/core';
import MyMapComponent from './MyMapComponent';

const render = (status) => {
  if (status === Status.LOADING) return <p>Loading...</p>;
  if (status === Status.FAILURE) return <p>Error...</p>;
  return <p></p>;
};

const MapWrapper = () => {
  return (
    <>
      <Wrapper apiKey="AIzaSyCQl_8sxlwxoL6DQthFswq0di2VlzDvek4" render={render}>
        <MyMapComponent />
      </Wrapper>
      <Box height={1} flexGrow={1} id={'map'} />
    </>
  );
};

export default MapWrapper;
