function ListsTest({arr}){
    return arr.map(curr => <li key={curr}>{curr}</li>)
}

export default ListsTest