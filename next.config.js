module.exports = {
  env: {
    backend_url:
      process.env.NODE_ENV === "production"
        ? "https://1ridebackend.appstick.com.bd/"
        : "https://1ridebackend.appstick.com.bd/",
    socket_io_url:
      process.env.NODE_ENV === "production"
        ? "https://1ridebackend.appstick.com.bd/"
        : "https://1ridebackend.appstick.com.bd/",
    
  },
  images: {
    domains: ['appstick-resources.s3.ap-southeast-1.amazonaws.com'],
  },
};
