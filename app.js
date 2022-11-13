/* const express = require("express")
const app = express()

app.listen(3000, ()=> {
    console.log("Server is running at port 3000");
}) */

function addTokens(input, tokens)
{
 
    if (typeof input != 'string' || (typeof input == 'object' && !(input instanceof String))) 
    {		
        	throw new Error('Invalid input');
	}
	

    if (input.length < 6) 
    {
        throw new Error('Input should have at least 6 characters');
    }
  
    if (Array.isArray(tokens) == false ) {
		throw new Error('Invalid array format');
    }
    /*if (typeof tokens != 'object' || !(tokens instanceof Array)) {
		throw new Error('Invalid array format');
	}*/
	tokens.forEach((token) => 
    {
		if (token.hasOwnProperty('tokenName') == false) 
        {
			throw new Error('Invalid array format');
		}
		if (typeof token.tokenName != 'string') 
        {
			throw new Error('Invalid array format');
		}
	});
    
    if(!input.includes('...'))
    {
        return input;
    }
    else 
    {
    tokens.forEach((token) =>
    {
        input = input.replace('...', `\${${token.tokenName}}`);
    });
    return input;
    }
}


const app = {
    addTokens: addTokens
}

module.exports = app;

console.log(addTokens('Subsemnatul ... ...', [{ tokenName: 'Nume' }, { tokenName: 'Prenume' }]));

