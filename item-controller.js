exports.getWorld = (req,res) => {
    res.json({result:'Hello World From Controller!'});
}


exports.getWorldParams = (req, res) => {

    res.json({ message: "Hello World", data: [req.params.foo, req.params.bar] });

};


exports.postWorld = (req, res) => {
    res.json({ result: 'Post was sent!', data: req.body });
};
