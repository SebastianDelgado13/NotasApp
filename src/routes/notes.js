const { Router } = require('express');
const express = require('express');
const router = express.Router();


router.get('/notes/add', (req, res) => {
    res.render('notes/new-notes');
});

router.post('/notes/new-notes', (req, res) =>{
    const { title, description }= req.body;
    const errors = [];
    if(!title) {
        errors.push({text: 'Por favor escriba un titulo'});
    }
    if(!description) {
        errors.push({text: 'Por favor escriba una descricion'});
    }
    if(errors.length > 0) {
        res.render ('notes/new-notes', {
            errors,
            title,
            description
    });
}
else{
    res.send('ok');
}
});

router.get('/notes', (req, res) => {
    res.render('Notas de la base de datos');
});

module.exports = router; 