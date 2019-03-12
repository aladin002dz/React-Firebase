export function handler(event, context, callback) {

  const { API_KEY, AUTH_DOMAIN, DATABASE_URL, PROJECT_ID, STORAGE_BUCKET, MESSAGING_SENDER_ID} = process.env;
  const config = {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    databaseURL: DATABASE_URL,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGING_SENDER_ID
  };
    console.log('queryStringParameters', event.queryStringParameters);
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({ fbconfig: JSON.stringify(config)})
    });
  }
