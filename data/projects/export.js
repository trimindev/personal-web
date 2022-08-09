// import coffee from "data/projects/images/coffee.png";
// import juice from "data/projects/images/coffee.png";

function importAll(r) {
  let images = {};
  r.keys().map((item) => {
    images[item.replace("./", "")] = r(item);
  });

  return images;
}

const images = importAll(
  require.context("data/projects/images", false, /\.(png|jpe?g|svg)$/)
);

// const images = { coffee, juice };

export default images;
