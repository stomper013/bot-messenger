let getHomepage = (req, res) => {
    return res.render("homePages.ejs");
};

module.exports = {
    getHomepage: getHomepage
};