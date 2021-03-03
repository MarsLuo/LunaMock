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

let code = {
    success: 200,
    paramsError:400
}

module.exports = {response, error, code};