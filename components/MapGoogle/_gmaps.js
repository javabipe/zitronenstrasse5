// Your personal API key.
const API_KEY = process.env.googleMapApiKey

export default function loadMapScript(CALLBACK_NAME) {
  // We inject a new script tag into
  // the `<head>` of our HTML to load
  // the Google Maps script.
  const script = document.createElement('script')
  script.async = true
  script.defer = true
  script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=${CALLBACK_NAME}`
  document.querySelector('head').appendChild(script)
}
