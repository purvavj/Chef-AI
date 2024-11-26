import { HfInference } from '@huggingface/inference';

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe 
they could make with some or all of those ingredients. You don't need to use every ingredient 
they mention in your recipe. The recipe can include additional ingredients they didn't mention, 
but try not to include too many extra ingredients. Format your response in markdown to make 
it easier to render to a web page
`;

// Use the environment variable
const hf = new HfInference(process.env.REACT_APP_HF_API_KEY);

export async function getRecipeFromMistral(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ");
    try {
        const response = await hf.chatCompletion({
            model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
            ],
            max_tokens: 1024,
        });

        console.log("Hugging Face API response:", response);

        if (response.choices && response.choices[0].message) {
            return response.choices[0].message.content;
        } else {
            console.error("Unexpected API response format:", response);
            return "Error: Could not fetch API recipe.";
        }
    } catch (err) {
        console.error("Error fetching recipe from Hugging Face:", err.message);
        return "Error: Could not fetch HUGG recipe.";
    }
}
