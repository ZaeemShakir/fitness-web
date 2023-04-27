export const exerciseOption ={

        method: 'GET',
        url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
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