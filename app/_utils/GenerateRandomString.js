export const GenerateRandomString=()=>{  
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    
    let result = '';
    for (let i=0 ; i<4; i++)
    {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      
    }

return result;
}