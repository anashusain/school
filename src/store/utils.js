export const sortByCharacters = (arrayToBeSorted, key) => {
    return arrayToBeSorted.sort((a,b)=>{
        if(a[key].toLowerCase() > b[key].toLowerCase()){
            return 1;
        } else {
            return -1;
        }
     })
}

export const convertFirstLetterToUpperCase = (data) => {
    let strArr = data.split(" ");
    let newArr = strArr.map((str)=>{
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    })
    return newArr.join(" ");
}