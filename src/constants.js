let MONDAY_DOMAIN, MONDAY_PROTOCOL;

MONDAY_DOMAIN = "monday.com";
MONDAY_PROTOCOL = "https";

const MONDAY_API_URL = `${MONDAY_PROTOCOL}://api.${MONDAY_DOMAIN}/v2`;
const MONDAY_OAUTH_URL = `${MONDAY_PROTOCOL}://auth.${MONDAY_DOMAIN}/oauth/authorize`;
const MONDAY_OAUTH_TOKEN_URL = `${MONDAY_PROTOCOL}://auth.${MONDAY_DOMAIN}/oauth/token`;

// export { MONDAY_DOMAIN, MONDAY_PROTOCOL, MONDAY_API_URL, MONDAY_OAUTH_URL };
module.exports = {
  MONDAY_DOMAIN,
  MONDAY_PROTOCOL,
  MONDAY_API_URL,
  MONDAY_OAUTH_URL,
  MONDAY_OAUTH_TOKEN_URL
};
