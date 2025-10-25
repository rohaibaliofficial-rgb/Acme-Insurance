
import { GoogleGenAI, Type } from "@google/genai";
import { QuoteResponse, InsuranceType } from '../types';

interface GetQuoteParams {
  name: string;
  email: string;
  insuranceType: InsuranceType;
  details: string;
}

/**
 * Calls the Gemini API to generate an insurance quote based on user input.
 * @param params - The parameters for the quote request.
 * @returns A Promise that resolves to a QuoteResponse object.
 * @throws Error if the API key is not configured or if the API call fails.
 */
export async function getInsuranceQuote(params: GetQuoteParams): Promise<QuoteResponse> {
  if (!process.env.API_KEY) {
    throw new Error("API_KEY is not configured. Please set the API_KEY environment variable.");
  }

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const prompt = `Generate a mock insurance quote based on the following details.
    User Name: ${params.name}
    User Email: ${params.email}
    Desired Insurance Type: ${params.insuranceType}
    Additional Details: ${params.details}

    Provide a concise plan name, a monthly premium, 3-5 key coverage details, and a short disclaimer.
    The response must be in JSON format conforming to the QuoteResponse schema.`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            planName: {
              type: Type.STRING,
              description: 'The name of the insurance plan (e.g., "Silver Auto Plan").',
            },
            premium: {
              type: Type.STRING,
              description: 'The monthly premium for the plan (e.g., "$150/month").',
            },
            coverageDetails: {
              type: Type.ARRAY,
              items: {
                type: Type.STRING,
              },
              description: 'An array of key coverage details.',
            },
            disclaimer: {
              type: Type.STRING,
              description: 'A short disclaimer about the quote being an estimate.',
            },
          },
          required: ["planName", "premium", "coverageDetails", "disclaimer"],
        },
      },
    });

    const jsonStr = response.text.trim();
    return JSON.parse(jsonStr) as QuoteResponse;

  } catch (error) {
    console.error("Error generating insurance quote:", error);
    throw new Error(`Failed to generate quote: ${(error as Error).message}`);
  }
}
