import express from "express";

export const app = express();

// app.get('/',(req,res)=>{
//     res.send('server is ready');

// });

// get a list of 5 jokes

app.get('/jokes', (req, res) => {
    const jokes = [
        { id: 1, content: 'Why don’t scientists trust atoms? Because they make up everything!' },
        { id: 2, content: 'Did you hear about the mathematician who’s afraid of negative numbers? He will stop at nothing to avoid them!' },
        { id: 3, content: 'Why don’t skeletons fight each other? They don’t have the guts!' },
        { id: 4, content: 'I’m reading a book about anti-gravity. It’s impossible to put down!' },
        { id: 5, content: 'Why did the scarecrow win an award? Because he was outstanding in his field!' }
    ];
    res.send(jokes);
});

const port=process.env.PORT || 3000;


app.listen(port,()=>{
    console.log(`Serve at http://localhost:${port}`)
    }
);


