'use strict';

if (!global.Intl) {
    require('intl');
}

var React = require('react');
var content = require('./locales/US/en/index.properties');
var ReactIntlMixin = require('react-intl');


var MyComponent = React.createClass({
  mixins: [ReactIntlMixin],

  render: function () {
    return <div>
      <p>{this.formatDate(new Date())}</p>
      <p>{this.formatNumber(600)}</p>
      <p>{this.formatMessage(this.getIntlMessage('greeting'), {
          name: "World"
      })}</p>
    </div>;
  }
});

var context = {
    locales: ['en-US'],
    messages: content
};

React.renderComponent(
    <MyComponent locales={context.locales} messages={context.messages} />,
    document.body
);
