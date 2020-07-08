export default function makeUserRepo({ userModel }) {
    return Object.freeze({
        getByUsername,
        getById,
        addNew
    })

    async function getByUsername(username) {
        return await userModel
            .findOne({ username })
            .select('+password')
    }

    async function getById(id) {
        return await userModel.findById(id)
    }

    async function addNew(userData) {
        let user = await userModel.findOne({ username: userData.username })

        if (!user) {
            user = await userModel.create(userData)
        }

        return user
    }
}