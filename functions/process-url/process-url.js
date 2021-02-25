const cloudinary = require("cloudinary").v2;
const qs = require("querystring");
cloudinary.config({
  cloud_name: "dhx5xpndw",
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET
});

exports.handler = async function(event, ctx) {
  const { queryStringParameters } = event;
  console.log(queryStringParameters);
  try {

    const imageUrl = `https://res.cloudinary.com/${
      process.env.CLOUD_NAME
    }/image/fetch/${encodeURIComponent(
      `https://peaceful-shannon-670b41.netlify.app/.netlify/functions/gen-opengraph-image?${qs.stringify(
        queryStringParameters,
      )}`,
    )}`
    return {
      statusCode: 302,
      headers: {
        Location: imageUrl,
      },
      body: '',
    }
  } catch (e) {
    console.log(e);
  }
};
