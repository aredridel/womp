'use strict';

if (!global.Intl) {
    require('intl');
}

var React = require('react');
var content = require('_languagepack');
var ReactIntlMixin = require('react-intl').IntlMixin;

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

function useContent(bundle) {
    return {
        locales: ['en-US'],
        messages: content['en-US'][bundle]
    };
}

React.render(
    <MyComponent {...useContent('index.properties')} />,
    document.getElementById('hereyougo')
);
