
class ApiFeatures{
    constructor(query, queryStr){
        this.query = query
        this.queryStr = queryStr
    }

    search(){
        const keyword = this.queryStr.keyword ? {
            name : {
                $regex : this.queryStr.keyword,
                $options : "i"
            }
        } : {}
        
        this.query = this.query.find(keyword);

        return this;
    }

    filter(){

        const queryStrCopy = {...this.queryStr}

        const removeFields = ["keyword", "page", "limit"]
        removeFields.forEach(key => delete queryStrCopy[key])

        // price filtering
        let queryStr = JSON.stringify(queryStrCopy)
        queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key)=> `$${key}`);

        this.query = this.query.find(JSON.parse(queryStr));

        return this;
    }

    pagination(productsPerPage){

        const curPage =this.queryStr.page || 1;
        const skip = productsPerPage * (curPage - 1)

        console.log(skip);

        this.query = this.query.limit(productsPerPage).skip(skip);

        return this;
    }
}

module.exports = ApiFeatures;