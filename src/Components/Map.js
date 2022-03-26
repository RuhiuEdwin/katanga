import React, { Component } from 'react';
import {Map, GoogleApiWrapper} from 'google-maps-react'



export class MapContainer extends Component {
  render() {
    return (
        <Map
            google ={this.props.google}
            style={{width:"100%", height:"100%"}}
            zoom= {10}
            initialCenter = {
                {
                    lat:-4.334210,
                    lng:15.308680
                }
            }
        />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDez3Fj_8wbLGbOnP5bXwbf8ZYgW8V_1ME'
})(MapContainer);