import User from "../schemas/User";

class UserController {
    async create(request, response) {
        const { name, email, username, password, phone } = request.body;
        //console.log({ name, email, password, username, phone, });

        const user = await User.create({
            name,
            email,
            username,
            password,
            phone,
        });

        //return response.send();
        return response.json(user);
    }
}

export default new UserController();