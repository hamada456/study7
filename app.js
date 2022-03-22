const exp = require('express');
const app = exp();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('hello2222');
});

// const router = exp.Router();
// router.get('/', (req, res) => {
//     res.send('hello3333');
// });

app.listen(PORT, () => console.log(`++++start++++++ ${PORT}`));
