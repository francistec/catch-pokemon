import axios from 'axios';

export  const Pokemon = {
    get: (name) => {
        return new Promise(async (resolve, reject)=>{
            try{
                let data = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
                if(data.status >= 200 && data.status < 300){
                    resolve(data.data);
                } else {
                    reject(false)
                }
            } catch(ex){
                reject(false);
            }
        });
    }
}

