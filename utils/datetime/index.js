const datetimeUrl = (dataInicial, dataFinal, baseUrl) => {
    const startTimestamp = new Date(new Date(dataInicial).setHours(0)); 
    const endTimestamp = new Date(new Date(dataFinal).setHours(23,59));

    const startDate = startTimestamp.getTime();
    const endDate = endTimestamp.getTime();
    
    const response = `${baseUrl}?date=Custom&end=${endDate}&start=${startDate}`;

    return response;
}
//console.log(datetimeUrl('2020-11-05', '2020-12-05'));
module.exports = datetimeUrl;
