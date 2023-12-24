import React from 'react';

export default class GoogleAd extends React.Component {
  componentDidMount () {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

render () {
    return (
        <ins className='adsbygoogle'
          style={{ display: 'block' }}
          data-ad-client='ca-pub-4249925570318684'
          data-ad-slot='4249925570318684'
          data-ad-format='auto' />
    );
  }
}