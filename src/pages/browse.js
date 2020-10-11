import React from 'react';
import { useContent } from '../hooks';
import selectionFilter from '../utils/selection-filter';
import BrowseContainer from '../containers/browse';

function Browse(props) {
  const { series } = useContent('series');
  const { films } = useContent('films');
  const slides = selectionFilter({ series, films });
  
  return (
    <BrowseContainer slides={slides} />
  );
}

export default Browse;