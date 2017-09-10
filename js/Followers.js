console.log('apiKey');

var Followers = function () {
  return this;
};

Followers.prototype.fetch = function () {
  var request = new XMLHttpRequest();
  request.open('GET', '', true);
};
