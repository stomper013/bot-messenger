let getHomepage = (req, res) => {
    console.log(req)
    return res.render("homePages.ejs");
};

module.exports = {
    getHomepage: getHomepage
};