const handler = (req,res)=>{
    res.render('home',{profile : 'Profile'});
}

module.exports = {handler};