module.exports = (req, res) => {
  req.setBody = (data) => {
    req.body = JSON.parse(data);
}
}