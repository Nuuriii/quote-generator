import { useState, useEffect } from "react";
import { Buttons } from "../Element/Buttons";
import "./Quote.css";
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
               //untuk menentukan quotes dengan kategori apa yang ingin ditampilkan
               category: CATEGORY,
            },
            headers: {
               //berfungsi untuk autentikasi API
               "X-Api-Key": `${API_KEY}`,
            },
         });
         //mengatur kutipan pertama dari respon API ke state quote
         setQuote(response.data[0]);
      } catch (error) {
         //jika error maka akan dicetak ke console
         console.error("Error:", error);
      }
   };

   return (
      <div>
         {quote ? (
            <div className='container'>
               <div>
                  <h1>Random Quote</h1>
               </div>
               <div className='items-container'>
                  <div>
                     <p className='items1'>" {quote.quote} "</p>
                     <p className='items2'>- {quote.author}</p>
                  </div>
                  <Buttons
                     click={fetchQuotes}
                     className='btn'
                     text='Get Quote'
                  />
               </div>
            </div>
         ) : (
            <p>Loading . . .</p>
         )}
      </div>
   );
};
