import Ember from 'ember';
/* global google */

export default Ember.Route.extend({
  setupController: function(controller) {
    controller.setProperties({
      lat: 34.74048,
      lng: -82.0463009,
      zoom: 14,
      markers: Ember.A([
      {
        id: 'McDonalds',
        lat: 34.751603,
        lng: -82.0463009,
        address: '890 N Main St, Woodruff, SC 29388, USA',
        infoWindow: { content: '<p>This is McDonalds</p>', visible: true },
        anchorPoint: new google.maps.Point(),
        animation: google.maps.Animation.DROP,
        clickable: true,
        crossOnDrag: true,
        cursor: 'pointer',
        draggable: true,
        label: 'A',
        opacity: 0.3,
        optimized: true,
        title: 'string',
        visible: true,
        zIndex: 999
      }
        ])
    });
  }

});


// Center of town
      // lat: 34.74048,
      // lng: -82.03491,






