import mongoose from "mongoose";

async function connect() {
    await mongoose.connect(process.env.MONGODB_URI)
}


connect()
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
},
{
    timestamps: true
})

const User = mongoose.models.User || mongoose.model("User", userSchema)

export default User