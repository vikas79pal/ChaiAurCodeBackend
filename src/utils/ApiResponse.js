class ApiResponse{
    constructor (statusCode,data,message="Success"){
        this.statusCode=statusCode,
        this.data=data,
        this.message=message,
        // less than 400 becoz we are considering here all the success Response
        this.success=statusCode<400
    }
}
module.exports={ApiResponse}