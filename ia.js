const apiKey = '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';










function sendMessage(msg) {

  const apiURL = "https://api.openai.com/v1/chat/completions "

  const options = {
    method:'POST', 
    headers:{
      "Authorization": `Bearer$(apiKey)`, 
      "Content-Type": "applicacation/json"
    },
 
    body:{model:"gpt-3.5-turbo", messages:[
      
    ]}



    const response = await fetch(apiURL, options)
  }

 
}

