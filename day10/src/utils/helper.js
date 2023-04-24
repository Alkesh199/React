//filterData is to filter resto based on input
export const filterData = (searchValue,allRestaurents) =>{
    console.log("inside Filter Data function"); 
    return allRestaurents.filter(
    rest=>rest.data.name.toLowerCase().includes(searchValue.toLowerCase())
    );
}