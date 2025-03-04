const baseUrl = import.meta.env.VITE_ORCA_SERVICE
const apiKey = import.meta.env.VITE_ORCA_API_KEY

function getAllSheets() {
  const relativeUrl = 'sheets'
  const requestUrl = baseUrl + relativeUrl

  return fetch(requestUrl, {
    method: 'GET',
    headers: {
      'Authorization': apiKey
    }
  })
}

function getSheet(sheetId: string) {
  const relativeUrl = `sheets/${sheetId}/rows`
  const requestUrl = baseUrl + relativeUrl

  return fetch(requestUrl, {
    method: 'GET',
    headers: {
      'Authorization': apiKey
    }
  })
}

export default { getAllSheets, getSheet }