export const exerciseOption ={

        method: 'GET',
        headers: {
          'content-type': 'application/octet-stream',
          'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
       
        }
      
}


export const fetchData=async(url,options)=>{
const response=await fetch(url,options);
const data=await response.json();
return data;

}

export const videoOptions={
  method: 'GET',
  headers: {
    'content-type': 'application/octet-stream',
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }

}