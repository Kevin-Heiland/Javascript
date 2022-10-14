const homeController = async () => {
    try {
       const response = await fetch('./src/data/stock.json');
       const data = await response.json();

       return data;
    } catch (error) {
        console.log('hay un error', error)
        
    }
}

export {homeController};