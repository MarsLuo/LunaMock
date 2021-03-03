let error = (code, message) => {
    return {code, message};
}

let response = (code, content, error) => {
    
    var body;
    if(code == 200) {
        body = {data:content};
    } else {
        body = {error};
    }

    return {code, body};
};

module.exports = {response,error};