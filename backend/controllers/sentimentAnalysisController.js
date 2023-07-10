// const { LanguageServiceClient } = require('@google-cloud/language');

// // Create a new instance of the LanguageServiceClient
// const projectId = "harmony-392320"
// const client = new LanguageServiceClient();
// const {Storage} = require('@google-cloud/storage');

// async function authenticateImplicitWithAdc() {
//   const storage = new Storage({
//     projectId,
//   });
//   const [buckets] = await storage.getBuckets();
//   console.log('Buckets:');

//   for (const bucket of buckets) {
//     console.log(`- ${bucket.name}`);
//   }

//   console.log('Listed all storage buckets.');
// }

// module.exports = {
//     post: async (req, res) => {
//         const { text } = req.body;
//         authenticateImplicitWithAdc();
//         // Perform sentiment analysis using Google Cloud Natural Language API
//         const document = {
//           content: text,
//           type: 'PLAIN_TEXT',
//         };
      
//         try {
//           const [result] = await client.analyzeSentiment({ document });
//           const sentiment = result.documentSentiment;
      
//           // Return the sentiment score as the API response
//           res.json({ score: sentiment.score });
//         } catch (error) {
//           console.error('Error analyzing sentiment:', error);
//           res.status(500).json({ error: 'An error occurred while analyzing sentiment.' });
//         }
//       }
// }

const Sentiment = require('sentiment')
const sentiment = new Sentiment()

module.exports = {
        post: async (req, res) => {
            const { text } = req.body;
            try {
              const result = sentiment.analyze(text)
              console.log(result)
              if(result.score < 0){
                return res.json({message:"Negative Comment"})
              }
                return res.json({ message: "Positive Comment" });
            } catch (error) {
              console.error('Error analyzing sentiment:', error);
              return res.status(500).json({ error: 'An error occurred while analyzing sentiment.' });
            }
          }
    }