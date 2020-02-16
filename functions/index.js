const functions = require('firebase-functions');
const express = require('express');
const engines=require('consolidate');
const firebase=require('firebase-admin');


const app=express();
app.engine('hbs',engines.handlebars);
app.set('views','./views');
app.set('view engine','hbs');

app.get('/',(req,res)=>{
    res.set('Cache-Control','public,max-age=300,s-maxage=600');
    res.render('index');
});

app.get('/watch/:v',(req,res)=>{ //  render ไฟล์ที่ req มา
    res.set('Cache-Control','public,max-age=300,s-maxage=600');
    res.render('watch');
});

app.get('/admin',(req,res)=>{
    res.set('Cache-Control','public,max-age=300,s-maxage=600');
    res.render('admin');
});

app.get('/page/:p',(req,res)=>{
    res.set('Cache-Control','public,max-age=300,s-maxage=600');
    var data={
        page:req.params.p
    };
    res.render('page',data);
});

app.get('/tags/:v',(req,res)=>{
    res.set('Cache-Control','public,max-age=300,s-maxage=600');
    var data={
        tags:req.params.v
    };
    res.render('tags',data);
});

app.get('/tags/:a/page:b',(req,res)=>{
    res.set('Cache-Control','public,max-age=300,s-maxage=600');
    var data={
        tags:req.params.a,
        page:req.params.b
    };
    res.render('tagspage',data);
});

app.get('/search',(req,res)=>{
    res.set('Cache-Control','public,max-age=300,s-maxage=600');
    var data={
        searchwords:req.query.searchwords
    }
    res.render('search',data);
});

app.get('/search/:a/page:b',(req,res)=>{
    res.set('Cache-Control','public,max-age=300,s-maxage=600');
    var data={
        searchwords:req.params.a,
        page:req.params.b,
    };
    res.render('searchpage',data);
});

app.get('/registration',(req,res)=>{
    res.render('registration');
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.app = functions.https.onRequest(app);
