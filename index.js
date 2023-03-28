const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const passport = require('passport')
const bodyParser = require('body-parser')
const LocalStrategy = require('passport-local')
// const passportLocalMongoose = require('passport-local-mongoose')

const app = express()
// const router = express.Router()
const PORT = process.env.PORT || 8080
const User = require('./models/user')
const Events = require('./models/events')
const Weeklies = require('./models/weeklies')
const Artist = require('./models/artist')
const Links = require('./models/links')

dotenv.config()

app.use(cors())

app.use('/', express.static('build'))

app.use(express.urlencoded({ extended: true }))

//ENGINE CONFIG
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(
    require('express-session')({
        secret: 'Rusty is a dog',
        resave: false,
        saveUninitialized: false
    })
)

app.use(passport.initialize())
app.use(passport.session())

passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => {
    console.log('Connected to DB.')
    app.listen(PORT, () => console.log('Web server running.'))
})

app.get('/getEvents', (req, res) => {
    Events.find({}, (err, result) => {
        if (err) {
            res.send(err)
        } else {
            res.send(result)
        }
    }).sort({ date: 1 })
})

app.get('/getWeekly', (req, res) => {
    Weeklies.find({}, (err, result) => {
        if (err) {
            res.send(err)
        } else {
            res.send(result)
        }
    })
})

app.get('/getArtists', (req, res) => {
    Artist.find({}, (err, result) => {
        if (err) {
            res.send(err)
        } else {
            res.send(result)
        }
    })
})

app.get('/getLinks', (req, res) => {
    Links.find({}, (err, result) => {
        if (err) {
            res.send(err)
        } else {
            res.send(result)
        }
    })
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.get('/list', isLoggedIn, (req, res) => {
    Events.find({}, (err, events) => {
        res.render('list', { events: events })
    }).sort({ date: 1 })
})

app.get('/weekly', isLoggedIn, (req, res) => {
    Weeklies.find({}, (err, weeklies) => {
        res.render('weekly', { weeklies: weeklies })
    })
})

app.get('/artist', isLoggedIn, (req, res) => {
    Artist.find({}, (err, artist) => {
        res.render('artist', { artist: artist })
    })
})

app.get('/links', isLoggedIn, (req, res) => {
    Links.find({}, (err, links) => {
        res.render('links', { links: links })
    })
})

//POST
app.post(
    '/login',
    passport.authenticate('local', {
        successRedirect: '/list',
        failureRedirect: '/login'
    }),
    () => {}
)

app.post('/list', async (req, res) => {
    const events = new Events({
        name: req.body.name,
        date: req.body.date,
        time: req.body.time,
        location: req.body.location
    })
    try {
        await events.save()
        res.redirect('/list')
    } catch (err) {
        res.redirect('/list')
    }
})

app.post('/weekly', async (req, res) => {
    const weeklies = new Weeklies({
        name: req.body.name,
        date: req.body.date,
        time: req.body.time,
        location: req.body.location
    })
    try {
        await weeklies.save()
        res.redirect('/weekly')
    } catch (err) {
        res.redirect('/weekly')
    }
})

app.post('/artist', async (req, res) => {
    const artist = new Artist({
        name: req.body.name
    })
    try {
        await artist.save()
        res.redirect('/artist')
    } catch (err) {
        res.redirect('/artist')
    }
})

// app.post('/links', async (req, res) => {
//     const links = new Links({
//         link: req.body.link
//     })
//     try {
//         await links.save()
//         res.redirect('/links')
//     } catch (err) {
//         res.redirect('/links')
//     }
// })

//UPDATE
app.route('/list/edit/:id')
    .get((req, res) => {
        const id = req.params.id
        Events.find({}, (err, events) => {
            res.render('listEdit', { events: events, eventId: id })
        })
    })
    .post((req, res) => {
        const id = req.params.id
        Events.findByIdAndUpdate(
            id,
            {
                name: req.body.name,
                date: req.body.date,
                time: req.body.time,
                location: req.body.location
            },
            (err) => {
                if (err) return res.send(500, err)
                res.redirect('/list')
            }
        )
    })

app.route('/weekly/edit/:id')
    .get((req, res) => {
        const id = req.params.id
        Weeklies.find({}, (err, weeklies) => {
            res.render('weeklyEdit', { weeklies: weeklies, weeklyId: id })
        })
    })
    .post((req, res) => {
        const id = req.params.id
        Weeklies.findByIdAndUpdate(
            id,
            {
                name: req.body.name,
                date: req.body.date,
                time: req.body.time,
                location: req.body.location
            },
            (err) => {
                if (err) return res.send(500, err)
                res.redirect('/weekly')
            }
        )
    })

app.route('/artist/edit/:id')
    .get((req, res) => {
        const id = req.params.id
        Artist.find({}, (err, artist) => {
            res.render('artistEdit', { artist: artist, artistId: id })
        })
    })
    .post((req, res) => {
        const id = req.params.id
        Artist.findByIdAndUpdate(id, { name: req.body.name }, (err) => {
            if (err) return res.send(500, err)
            res.redirect('/artist')
        })
    })

app.route('/links/edit/:id')
    .get((req, res) => {
        const id = req.params.id
        Links.find({}, (err, links) => {
            res.render('linksEdit', { links: links, linksId: id })
        })
    })
    .post((req, res) => {
        const id = req.params.id
        Links.findByIdAndUpdate(id, { link: req.body.link }, (err) => {
            if (err) return res.send(500, err)
            res.redirect('/links')
        })
    })

//DELETE
app.route('/list/remove/:id').get((req, res) => {
    const id = req.params.id
    Events.findByIdAndRemove(id, (err) => {
        if (err) return res.send(500, err)
        res.redirect('/list')
    })
})

app.route('/weekly/remove/:id').get((req, res) => {
    const id = req.params.id
    Weeklies.findByIdAndRemove(id, (err) => {
        if (err) return res.send(500, err)
        res.redirect('/weekly')
    })
})
app.route('/artist/remove/:id').get((req, res) => {
    const id = req.params.id
    Artist.findByIdAndRemove(id, (err) => {
        if (err) return res.send(500, err)
        res.redirect('/artist')
    })
})

//CHECKS FOR LOGIN OK
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next()
    res.redirect('/login')
}
