class OpenAIAPI {
    static async generateResponse(userMessage, conversationHistory = []) {
        console.log(process.env.OPENAI_API_KEY);
        const apiKey = process.env.OPENAI_API_KEY;
        const endpoint = 'https://api.openai.com/v1/chat/completions';
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo-1106",
                messages: conversationHistory.concat([{ role: 'user', content: userMessage }]),
                max_tokens: 150
            }),
        });
        const responseData = await response.json();
        // Log the entire API response for debugging
        console.log('Response from OpenAI API:', responseData);
        // Check for API errors
        if (responseData.error) {
            console.error('OpenAI API Error:', responseData.error);
            return 'Sorry, there was an error with the AI service.';
        }
        // Check if choices array is defined and not empty, and message exists
        if (Array.isArray(responseData.choices) && responseData.choices.length > 0 && responseData.choices[0]?.message?.content) {
            return responseData.choices[0].message.content;
        } else {
            // Handle the case where choices array is undefined or empty
            console.error('Error: No valid response from OpenAI API', responseData);
            return 'Sorry, I couldn\'t understand that.';
        }
    }
}
module.exports = { OpenAIAPI };