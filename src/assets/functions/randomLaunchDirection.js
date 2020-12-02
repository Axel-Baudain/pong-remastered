const randomLaunchDirection = function (obj) {
  var keys = Object.keys(obj);
  return obj[keys[keys.length * Math.random() << 0]];
};

export default randomLaunchDirection;
