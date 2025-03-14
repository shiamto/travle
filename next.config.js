module.exports = {
  env: {
    backend_url:
      process.env.NODE_ENV === "production"
        ? "https://travelbackend.appstick.com.bd/"
        : "http://192.168.0.115:8000/",
  },
  images: {
    domains: ['appstick-resources.s3.ap-southeast-1.amazonaws.com'],
  },
};
