class ApiError extends Error{
    constructor(
        statusCode,
        message="somethingWent Wrong",
        errors=[],
        stack=""
    ){
        super(message)
        this.statusCode=statusCode
        this.message=message,
        this.errors=errors,
        this.data=null,
        this.success=false
        if (stack){
            this.stack=stack4
        }else{
            Error.captureStackTrace(this,this.constructor)
        }
    }
}

module.exports={ApiError}