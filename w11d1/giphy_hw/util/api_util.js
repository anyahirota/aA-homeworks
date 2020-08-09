export const fetchSearchGiphys = (searchTerm) => (
    $.ajax({
        url: `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=VCAOdu9G36cGTybpvL8vPlxQx0OwHJqt&limit=2`, 
        method: "GET"
    })
); 