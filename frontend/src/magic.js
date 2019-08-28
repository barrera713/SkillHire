 const magic = (word) =>  {
    if (word !== '') {
        return word.toLowerCase().split(' ').map( i =>  i[0].toUpperCase() + i.slice(1)).join(' ')
    }
}


 export default magic;


