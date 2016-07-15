var base = require("./base-nodes");

var GlowingSunshine = function(ctx, options) {
  options = Object.assign({}, options, GlowingSunshine.defaults);

  var node = new base.Distortion(ctx, options, function(x, level) {
    return Math.tanh(level * x * Math.PI) * Math.cos(0.5 * x)
  });

  node.name = "Glowing Sunshine";
  node.type = "Distortion";

  return node;
};

GlowingSunshine.defaults = { drive: 5, tone: 5, level: 5 };

module.exports = GlowingSunshine;