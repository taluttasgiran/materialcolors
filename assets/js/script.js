
function rgbToSHex(color) {
  color = "" + color;
  if (!color || color.indexOf("rgb") < 0) {
    return;
  }

  if (color.charAt(0) == "#") {
    return color;
  }

  var nums = /(.*?)rgb\((\d+),\s*(\d+),\s*(\d+)\)/i.exec(color),
      r    = parseInt(nums[2], 10).toString(16),
      g    = parseInt(nums[3], 10).toString(16),
      b    = parseInt(nums[4], 10).toString(16);

  return "#" + (
      (r.length == 1 ? "0" + r : r) +
      (g.length == 1 ? "0" + g : g) +
      (b.length == 1 ? "0" + b : b)
    );
}
function rgbToHex(color) {
  color = "" + color;
  if (!color || color.indexOf("rgb") < 0) {
    return;
  }

  if (color.charAt(0) == "#") {
    return color;
  }

  var nums = /(.*?)rgb\((\d+),\s*(\d+),\s*(\d+)\)/i.exec(color),
      r    = parseInt(nums[2], 10).toString(16),
      g    = parseInt(nums[3], 10).toString(16),
      b    = parseInt(nums[4], 10).toString(16);

  return (
    (r.length == 1 ? "0" + r : r) +
    (g.length == 1 ? "0" + g : g) +
    (b.length == 1 ? "0" + b : b)
  );
}
function hexToRgbA(hex) {
  var c;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('');
    if (c.length == 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = '0x' + c.join('');
    return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',1)';
  }
  throw new Error('Bad Hex');
}