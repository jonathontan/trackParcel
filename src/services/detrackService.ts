const baseUrl = import.meta.env.APP_DETRACK_SERVICE
const apiKey = import.meta.env.APP_DETRACK_API_KEY

function getJob(doNumber: string) {
  let relativeUrl = 'jobs/show/'
  if (doNumber) relativeUrl += `?do_number=${doNumber}`
  const requestUrl = baseUrl + relativeUrl
  
  return fetch(requestUrl, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY": apiKey
    }
  })
}

export default { getJob }