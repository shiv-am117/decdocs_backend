module.exports = {
    dbUrl : "mongodb://localhost/userData",
    sessionSecret : "heregoessecret",
    illegalUsernames: ['user','admin','users','admins'],
    PORT: process.env.NODE_PORT || 4000,
    HOST: process.env.NODE_HOST || 'localhost'
}
