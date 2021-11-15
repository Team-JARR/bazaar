const jwt = require('jsonwebtoken');
const jwksClient = require('jwks-rsa');

const client = jwksClient({
  jwksUri: process.env.JWKS_URI || 'https://dev-8o--axf8.us.auth0.com/.well-known/jwks.json',
});

function getKey(header, callback) {
  client.getSigningKey(header.kid, function (err, key) {
    const signingKey = key.publicKey || key.rsaPublicKey;
    callback(null, signingKey);
  });
}

function verifyUser(request, errorUserCallback) {

  try {
    const token = request.headers.authorization.split(' ')[1];

    jwt.verify(token, getKey, {}, errorUserCallback);
  } catch (error) {
    errorUserCallback('Not Authorized');
  }
}

module.exports = verifyUser