
let volunters = [];


function generateId(max = 1000) {
    return Math.floor(Math.random() * max);
}


const home = (req, res) => {
    console.log("Home Controller");
    res.render("index", { volunters });
};


const addVolunter = (req, res) => {
    const { name, email, phone, work, experience, summary } = req.body;

    let volunterObj = {
        id: generateId(),
        name,
        email,
        phone,
        work,
        experience,
        summary,
    };

    volunters = [...volunters, volunterObj];

    res.redirect("/");
};


const editVolunter = (req, res) => {
    const { id } = req.params;

    let single = volunters.find((volunter) => {
        return volunter.id == id
    });

    res.render("update", { single });
};


const updateVolunter = (req, res) => {
    const { id } = req.params;
    const { name, email, phone, work, experience, summary } = req.body;

    let update = volunters.map((volunter) => {
        if (volunter.id == id) {
            return { ...volunter, name, email, phone, work, summary, experience };
        }
        return volunter;
    });

    volunters = update;

    res.redirect("/");
};


const deleteVolunter = (req, res) => {
    const { id } = req.params;

    const delet = volunters.filter((volunter) => {
        return volunter.id != id
    });

    volunters = delet;

    res.redirect("/");
};


module.exports = { home, addVolunter, editVolunter, updateVolunter, deleteVolunter };
