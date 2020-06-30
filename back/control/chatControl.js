const dialogflow = require('@google-cloud/dialogflow');
const uuid = require('uuid');
const path = require('path');

async function chatComm(req,res) {
  let msgUser=req.body.msgUs;
  // A unique identifier for the given session
  const pId='westcity-bwbiko'
  //TODO -> implementar mecanismo que cambie la sessionId solo en caso de que sea inicie nuevo chat y utilizar el mismo sessionId para un chat hasta que se cierre
  const sessionId = uuid.v4();
  // Create a new session
  const sessionClient = new dialogflow.SessionsClient({
      keyFilename:`${path.join(__dirname,'../assets/credentials/westcity-bwbiko-84c7324871dd.json')}`    
  });
  const sessionPath = sessionClient.projectAgentSessionPath(pId, sessionId);
  // The text query request.
  const request = {
    session: sessionPath,//`projects/westcity-bwbiko/agent/sessions/${sessionId}`,
    queryInput: {
      text: {
        // The query to send to the dialogflow agent
        text: msgUser,
        // The language used by the client (en-US)
        languageCode: 'es',
      },
    },
  };
  // Send request and log result
  const responses = await sessionClient.detectIntent(request);
  //console.log('Detected intent');
  const result = responses[0].queryResult;
  //console.log(`  Query: ${result.queryText}`);
  //console.log(`  Response: ${result.fulfillmentText}`);
  if (result.intent) {
    res.status(200).send({msgBot: `${result.fulfillmentText}`})
  } else {
    res.status(500).send({msgBot: 'Error al procesar tu solicitud'})
  }
}


	


	

	



module.exports={
  chatComm
 

}