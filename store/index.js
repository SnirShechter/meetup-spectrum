export const state = () => ({});
export const getters = {};
export const mutations = {};
export const actions = {
  async getAllItems({}) {
    let items = await this.$axios.get(
      "https://fedtest.monolith.co.il/api/catalog/getAll"
    );
    items = transpileProductList(items);
    return items;
  },

  async getProduct({ commit }, id) {
    let product = await this.$axios.get(
      `https://fedtest.monolith.co.il/api/Catalog/Get?id=${id}`
    );
    product = transpileProduct(product);

    return product;
  }
};

function transpileProductList({ data: { data: productList } }) {
  return productList.map(({ id, title, images, min_price: price }) => ({
    id,
    title,
    image: {
      title: images[0].title,
      url: `https://fedtest.monolith.co.il/api/imager.php?url=${
        images[0].url
      }&type=fit&width=${1000}&height=${1000}&quality=70`
    },
    price
  }));
}

function transpileProduct({
  data: {
    data: { id, title, min_price: price, images, description }
  }
}) {
  return {
    id,
    title,
    description,
    image: {
      title: images[0].title,
      url: `https://fedtest.monolith.co.il/api/imager.php?url=${
        images[0].url
      }&type=fit&width=${1000}&height=${1000}&quality=70`
    },
    price
  };
}
