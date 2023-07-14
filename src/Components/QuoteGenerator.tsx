import { useState, useEffect } from "react";
import axios from "axios";

// buat aturan tipe data agar TS tidak merah
interface Quote {
   quote: string;
   author: string;
}

export const QuoteGenerator = () => {
   const [quote, setQuote] = useState<Quote | null>(null);

   //variable untuk mensetting api request
   //Simpan api key ke variable agar reusable
   const API_KEY: string = "pNoO9jlbYKzgDTkTTomZUg==UMuQmNRuqS33tBrU";
   //untuk mengatur quotenya temanya ingin seperti apa
   const CATEGORY: string = "computers";
   //url api
   const API_URL: string = "https://api.api-ninjas.com/v1/quotes";

   //gunakan useEffect untuk menjalankan fungsi yang merequest API
   useEffect(() => {
      fetchQuotes();
   }, []);

   // fungsi untuk mengonsumsi api
   const fetchQuotes = async () => {
      try {
         const response = await axios.get(API_URL, {
            params: {
               category: CATEGORY,
            },
            headers: {
               "X-Api-Key": `${API_KEY}`,
            },
         });
         setQuote(response.data[0]);
      } catch (error) {
         console.error("Error:", error);
      }
   };

   return (
      <div>
         {quote ? (
            <div>
               <h1>Random Quote</h1>
               <p>{quote.quote}</p>
               <p>{quote.author}</p>
            </div>
         ) : (
            <p>Loading . . .</p>
         )}
      </div>
   );
};
