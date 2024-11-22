const apiKey = 'SUA_CHAVE_API';
const url = 'https://api.openai.com/v1/chat/completions';

async function fetchAIResponse(message) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: 'gpt-4',
      messages: [{ role: 'user', content: message }],
    })
  });
  const data = await response.json();
  return data.choices[0].message.content;
}

// Exemplo de uso
fetchAIResponse('Olá, IA!').then(response => console.log(response));
