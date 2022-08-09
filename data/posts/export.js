function importAll(r) {
  let images = {};
  r.keys().map((item) => {
    images[item.replace("./", "")] = r(item);
  });

  return images;
}

const images = importAll(
  require.context("data/posts/images", false, /\.(png|jpe?g|svg)$/)
);

export default images;
