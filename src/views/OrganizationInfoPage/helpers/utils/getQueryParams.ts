export function getQueryParams(url : string) {
  const queryParams : Record<string, string> = {};
  
  const queryStartIndex = url.indexOf('?');
  if (queryStartIndex !== -1) {
    const queryString = url.substring(queryStartIndex + 1);
    
    const pairs = queryString.split('&');
    for (const pair of pairs) {
      const [key, value] = pair.split('=');
      queryParams[decodeURIComponent(key)] = decodeURIComponent(value || '');
    }
  }
  return queryParams;
}