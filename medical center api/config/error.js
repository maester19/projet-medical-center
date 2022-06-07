module.exports = {
    paramsError: 0,
    firebaseError: 1,
    elasticSearchError:2,
    neo4jerror: 3,
    dataNoExist: 4,
    getError: function(code){
        let error = {error: true}
        switch(code){
            case 0:
                error.code = "458X78954"
                error.message =  "Make sure to check the parameters"
                break
            case 1:
                 error.code = "458X78955"
                 break
            case 2:
                error.code = "458X78956"
                error.message =  "Elastic Error"
                break
            case 3:
                error.code = "458X78957"
                break
            case 4:
                error.code = "458X78960"
                error.message =  "Data not exist"
                break
        }
        return error;
    }
}