export default (app) => {
    const { mongoose } = app
    const User = {
        id: {
            type: String,
            unique: true,
            required: true,
        },
        name: {
            type: String,
        },
        age: {
            type: Number,
        },
        createTime: {
            type: Number,
        },
    }
    const UserSchema = new mongoose.Schema(User)
    return mongoose.model('User', UserSchema)
}
