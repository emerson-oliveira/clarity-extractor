const datetimeUrl = (dataInicial, dataFinal, baseUrl) => {
    const startTimestamp = new Date(dataInicial); 
    const endTimestamp = new Date(dataFinal); 
    
    const startDate = startTimestamp.getTime();
    const endDate = endTimestamp.getTime();
    
    const response = `${baseUrl}?date=Custom&end=${endDate}&start=${startDate}`;

    return response;
}
//console.log(datetimeUrl('2020-11-05', '2020-12-05'));
module.exports = datetimeUrl;
