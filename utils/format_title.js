const formatTitle = (title) => {
  let split = title.split(' ');
  return split.join('_');
}

module.exports = formatTitle;